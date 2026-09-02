// ============================================================================
// worker.js — Proxy IA pour RéviSIO (Cloudflare Workers)
// ----------------------------------------------------------------------------
// Ce fichier NE FAIT PAS PARTIE du site statique déployé sur GitHub Pages.
// Il se déploie séparément, sur Cloudflare Workers (gratuit jusqu'à 100 000
// requêtes/jour). C'est LUI qui détient la clé OpenAI, jamais le navigateur.
//
// La clé n'est JAMAIS écrite dans ce fichier : elle est configurée comme
// "secret" sur Cloudflare (voir README-DEPLOIEMENT.md), donc invisible même
// si quelqu'un lit ce code source.
//
// Deux familles de requêtes gérées ici :
//  1. Aide sur un exercice de code (niveau: indice/explication/correction) —
//     jamais la réponse directe, seulement si l'étudiant la demande dans cet
//     ordre. Inchangé depuis la première version.
//  2. Nova (novaMode: question/cours) — l'assistante pédagogique dédiée :
//     répondre à une question de cours, ou générer une mini-leçon structurée
//     à la demande, dans le style du site.
// ============================================================================

// Remplace par l'URL réelle de ton site une fois déployé sur GitHub Pages,
// par ex. 'https://tonpseudo.github.io'. Mets '*' seulement pour tester en
// local, jamais en production (ça autoriserait n'importe quel site à utiliser
// ta clé via ce proxy).
const ALLOWED_ORIGIN = 'https://tonpseudo.github.io';

const MODELE = 'gpt-4o-mini';

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders() });
    }
    if (request.method !== 'POST') {
      return json({ error: 'Méthode non autorisée' }, 405);
    }

    const origin = request.headers.get('Origin') || '';
    if (ALLOWED_ORIGIN !== '*' && origin !== ALLOWED_ORIGIN) {
      return json({ error: 'Origine non autorisée' }, 403);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: 'Corps de requête invalide' }, 400);
    }

    if (!env.OPENAI_API_KEY) {
      return json({ error: "Clé OpenAI non configurée côté serveur (secret OPENAI_API_KEY manquant)." }, 500);
    }

    if (body && body.novaMode) {
      return handleNova(body, env);
    }
    return handleExerciceAide(body, env);
  }
};

// -------------------------------------------------- Aide sur un exercice --
const CONSIGNES_EXERCICE = {
  indice: "Donne UNIQUEMENT un indice court (2 à 3 phrases maximum) qui oriente l'étudiant vers la bonne piste, sans jamais révéler la solution ni écrire la moindre ligne de code corrigé.",
  explication: "Explique en quelques phrases pourquoi le code actuel de l'étudiant ne fonctionne pas ou est incomplet par rapport à l'énoncé, sans donner le code corrigé.",
  correction: "Donne une correction complète et commentée du code, en expliquant brièvement chaque changement important."
};

async function handleExerciceAide(body, env) {
  const { niveau, enonce, codeEtudiant, langage } = body || {};
  if (!enonce || typeof codeEtudiant !== 'string' || !CONSIGNES_EXERCICE[niveau]) {
    return json({ error: 'Paramètres manquants ou invalides' }, 400);
  }
  if (enonce.length > 2000 || codeEtudiant.length > 4000) {
    return json({ error: 'Contenu trop long' }, 400);
  }

  const messages = [
    {
      role: 'system',
      content: `Tu es un tuteur pédagogique pour un étudiant de BTS SIO SLAM qui apprend ${langage || 'la programmation'}. ${CONSIGNES_EXERCICE[niveau]} Réponds en français, de façon concise, bienveillante, sans jamais donner plus que ce qui est demandé pour ce niveau d'aide.`
    },
    {
      role: 'user',
      content: `Énoncé de l'exercice :\n${enonce}\n\nCode actuel de l'étudiant :\n${codeEtudiant}`
    }
  ];

  const { ok, data, error } = await appelerOpenAI(messages, env, 300);
  if (!ok) return json({ error }, 502);

  const reponse = data.choices?.[0]?.message?.content?.trim() || "Pas de réponse générée.";
  return json({ reponse }, 200);
}

// ---------------------------------------------------------------- Nova --
const SOCLE_NOVA = "Tu es Nova, l'assistante pédagogique du site RéviSIO, une plateforme de révision pour un étudiant de BTS SIO SLAM (programmation C#, SQL, POO, bases de données, CEJM, mathématiques pour l'informatique, anglais professionnel, culture générale et expression). Réponds toujours en français.";

async function handleNova(body, env) {
  const { novaMode, message, historique } = body || {};
  if (!message || typeof message !== 'string' || message.length > 800) {
    return json({ error: 'Message manquant ou trop long (800 caractères max).' }, 400);
  }

  if (novaMode === 'question') {
    const hist = Array.isArray(historique) ? historique.slice(-8) : [];
    for (const h of hist) {
      if (!h || (h.role !== 'user' && h.role !== 'assistant') || typeof h.content !== 'string' || h.content.length > 800) {
        return json({ error: 'Historique invalide' }, 400);
      }
    }
    const messages = [
      {
        role: 'system',
        content: `${SOCLE_NOVA} L'étudiant te pose une question sur son programme de révision. Réponds de façon claire, concise (quelques phrases à un petit paragraphe) et pédagogique, avec un exemple concret si ça aide. Si la question sort du programme BTS SIO, réponds quand même du mieux possible mais reste bref.`
      },
      ...hist,
      { role: 'user', content: message }
    ];
    const { ok, data, error } = await appelerOpenAI(messages, env, 500);
    if (!ok) return json({ error }, 502);
    const reponse = data.choices?.[0]?.message?.content?.trim() || "Pas de réponse générée.";
    return json({ novaMode, reponse }, 200);
  }

  if (novaMode === 'cours') {
    const messages = [
      {
        role: 'system',
        content: `${SOCLE_NOVA} L'étudiant te demande une mini-leçon rapide sur un sujet. Génère-la dans le style pédagogique du site. Réponds UNIQUEMENT avec un objet JSON valide (aucun texte avant ou après, pas de balises markdown), avec exactement ces clés : "titre" (string courte), "objectif" (une phrase), "explication" (tableau de 2 à 4 paragraphes courts en string), "aRetenir" (tableau de 3 à 5 points courts en string), "exemple" (string, un exemple concret, avec du code si le sujet est technique), "astuce" (string, un conseil pour retenir la notion).`
      },
      { role: 'user', content: `Sujet demandé : ${message}` }
    ];
    const { ok, data, error } = await appelerOpenAI(messages, env, 800);
    if (!ok) return json({ error }, 502);
    const brut = data.choices?.[0]?.message?.content?.trim() || '';
    try {
      const nettoye = brut.replace(/^```json\s*|```\s*$/g, '');
      const cours = JSON.parse(nettoye);
      return json({ novaMode, structured: true, cours }, 200);
    } catch {
      return json({ novaMode, structured: false, reponse: brut }, 200);
    }
  }

  return json({ error: 'novaMode invalide (attendu: question ou cours)' }, 400);
}

// ------------------------------------------------------------- Utilitaires --
async function appelerOpenAI(messages, env, maxTokens) {
  let apiResponse;
  try {
    apiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: MODELE,
        messages,
        max_tokens: maxTokens,
        temperature: 0.4
      })
    });
  } catch (e) {
    return { ok: false, error: "Impossible de contacter l'API OpenAI." };
  }
  if (!apiResponse.ok) {
    const detail = await apiResponse.text().catch(() => '');
    return { ok: false, error: 'Erreur renvoyée par OpenAI : ' + detail.slice(0, 300) };
  }
  const data = await apiResponse.json();
  return { ok: true, data };
}

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
}

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders() }
  });
}
