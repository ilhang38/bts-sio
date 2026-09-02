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
// Applique la règle pédagogique demandée dès le départ pour l'IA : jamais la
// réponse directe, seulement indice → explication → correction complète, et
// uniquement si l'étudiant les demande dans cet ordre.
// ============================================================================

// Remplace par l'URL réelle de ton site une fois déployé sur GitHub Pages,
// par ex. 'https://tonpseudo.github.io'. Mets '*' seulement pour tester en
// local, jamais en production (ça autoriserait n'importe quel site à utiliser
// ta clé via ce proxy).
const ALLOWED_ORIGIN = 'https://tonpseudo.github.io';

const CONSIGNES = {
  indice: "Donne UNIQUEMENT un indice court (2 à 3 phrases maximum) qui oriente l'étudiant vers la bonne piste, sans jamais révéler la solution ni écrire la moindre ligne de code corrigé.",
  explication: "Explique en quelques phrases pourquoi le code actuel de l'étudiant ne fonctionne pas ou est incomplet par rapport à l'énoncé, sans donner le code corrigé.",
  correction: "Donne une correction complète et commentée du code, en expliquant brièvement chaque changement important."
};

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

    const { niveau, enonce, codeEtudiant, langage } = body || {};
    if (!enonce || typeof codeEtudiant !== 'string' || !CONSIGNES[niveau]) {
      return json({ error: 'Paramètres manquants ou invalides' }, 400);
    }
    if (enonce.length > 2000 || codeEtudiant.length > 4000) {
      return json({ error: 'Contenu trop long' }, 400);
    }
    if (!env.OPENAI_API_KEY) {
      return json({ error: "Clé OpenAI non configurée côté serveur (secret OPENAI_API_KEY manquant)." }, 500);
    }

    const messages = [
      {
        role: 'system',
        content: `Tu es un tuteur pédagogique pour un étudiant de BTS SIO SLAM qui apprend ${langage || 'la programmation'}. ${CONSIGNES[niveau]} Réponds en français, de façon concise, bienveillante, sans jamais donner plus que ce qui est demandé pour ce niveau d'aide.`
      },
      {
        role: 'user',
        content: `Énoncé de l'exercice :\n${enonce}\n\nCode actuel de l'étudiant :\n${codeEtudiant}`
      }
    ];

    let apiResponse;
    try {
      apiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages,
          max_tokens: 300,
          temperature: 0.4
        })
      });
    } catch (e) {
      return json({ error: "Impossible de contacter l'API OpenAI." }, 502);
    }

    if (!apiResponse.ok) {
      const detail = await apiResponse.text().catch(() => '');
      return json({ error: 'Erreur renvoyée par OpenAI', detail }, 502);
    }

    const data = await apiResponse.json();
    const reponse = data.choices?.[0]?.message?.content?.trim() || "Pas de réponse générée.";
    return json({ reponse }, 200);
  }
};

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
