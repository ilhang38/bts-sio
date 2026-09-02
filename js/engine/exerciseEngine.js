// ============================================================================
// exerciseEngine.js — Rendu et correction des exercices
// ----------------------------------------------------------------------------
// Un seul point d'entrée : renderExercise(exercise, container, options).
// Chaque type d'exercice a sa fonction de rendu dédiée, mais tous convergent
// vers finish(correct, extraHtml) qui enregistre la tentative (js/store.js)
// et affiche le résultat + l'explication (jamais un simple "Faux.").
//
// À PROPOS DE LA "PROGRAMMATION" ET DE "CORRIGER LE CODE" :
// Il n'y a pas de compilateur C# dans le navigateur (ça demanderait un
// service serveur externe). La vérification est donc une vérification
// STRUCTURELLE indicative (présence de mots-clés, de motifs attendus dans le
// code écrit), pas une exécution réelle. C'est annoncé clairement à
// l'étudiant, et le corrigé complet est systématiquement affiché pour qu'il
// puisse comparer lui-même. Voir README.md pour une piste d'évolution vers
// une vraie exécution (ex. service Judge0) si le projet grandit.
// ============================================================================

import { recordAttempt } from '../store.js';
import { renderCodeBlock, createEditor, escapeHtml } from '../components/codeEditor.js';
import { AI_PROXY_URL } from '../aiConfig.js';

function normalize(str) {
  return String(str)
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().trim().replace(/\s+/g, ' ');
}

function mdLite(text) {
  if (!text) return '';
  const esc = escapeHtml(text).replace(/`([^`]+)`/g, '<code>$1</code>');
  return esc.split('\n').map(line => `<p>${line}</p>`).join('');
}
function mdLiteInline(text) {
  if (!text) return '';
  return escapeHtml(text).replace(/`([^`]+)`/g, '<code>$1</code>');
}

const DIFFICULTE_LABELS = { facile: 'Facile', moyen: 'Moyen', difficile: 'Difficile', bts: 'Niveau BTS' };
const TYPE_LABELS = {
  'qcm': 'QCM', 'vrai-faux': 'Vrai / Faux', 'reponse-courte': 'Réponse courte',
  'trouver-erreur': "Trouver l'erreur", 'corriger-code': 'Corriger le code',
  'completer-code': 'Compléter le code', 'lire-code': 'Lire le code', 'programmation': 'Programmation'
};

export function renderExercise(exercise, container, { onComplete, examMode = false } = {}) {
  const startTime = Date.now();
  container.innerHTML = '';

  const root = document.createElement('div');
  root.className = `exercise exercise--${exercise.type}`;

  root.innerHTML = `
    <div class="exercise__header">
      <span class="badge badge--${exercise.difficulte}">${DIFFICULTE_LABELS[exercise.difficulte] || exercise.difficulte}</span>
      <span class="badge badge--type">${TYPE_LABELS[exercise.type] || exercise.type}</span>
    </div>
    <div class="exercise__enonce">${mdLite(exercise.enonce)}</div>
    <div class="exercise__body"></div>
    <div class="exercise__feedback"></div>
    <div class="exercise__actions"></div>
  `;
  container.appendChild(root);

  const body = root.querySelector('.exercise__body');
  const feedback = root.querySelector('.exercise__feedback');
  const actions = root.querySelector('.exercise__actions');

  function finish(correct, extraHtml = '') {
    const timeMs = Date.now() - startTime;
    const { xpGain } = recordAttempt({
      exerciseId: exercise.id, competence: exercise.competence, matiere: exercise.matiere,
      type: exercise.type, difficulte: exercise.difficulte, correct, timeMs
    });
    if (examMode) {
      feedback.innerHTML = `<div class="result result--neutral">Réponse enregistrée. Le corrigé complet s'affichera à la fin de l'examen.</div>`;
    } else {
      feedback.innerHTML = `
        <div class="result result--${correct ? 'ok' : 'ko'}">
          <div class="result__title">${correct ? '✅ Correct' : '❌ Incorrect'} <span class="result__xp">+${xpGain} XP</span></div>
          ${extraHtml}
          <div class="result__explication"><strong>Explication</strong>${mdLite(exercise.explication)}</div>
        </div>`;
    }
    body.querySelectorAll('input, textarea, button').forEach(el => el.disabled = true);
    actions.innerHTML = '';
    if (onComplete) onComplete(correct);
  }

  const renderers = {
    qcm: renderQcm, 'vrai-faux': renderVraiFaux, 'reponse-courte': renderReponseCourte,
    'lire-code': renderLireCode, 'trouver-erreur': renderTrouverErreur,
    'completer-code': renderCompleterCode, 'corriger-code': renderCorrigerCode,
    programmation: renderProgrammation
  };
  const renderer = renderers[exercise.type];
  if (renderer) renderer(exercise, body, actions, finish);
  else body.innerHTML = `<p class="inline-msg">Type d'exercice inconnu : ${escapeHtml(exercise.type)}</p>`;
}

function addInlineMsg(body) {
  const msg = document.createElement('p');
  msg.className = 'inline-msg';
  body.appendChild(msg);
  return msg;
}

function renderQcm(exercise, body, actions, finish) {
  body.innerHTML = `<div class="qcm-options">${exercise.options.map(o => `
    <label class="qcm-option">
      <input type="${exercise.multiple ? 'checkbox' : 'radio'}" name="qcm-${exercise.id}" value="${o.id}">
      <span>${mdLiteInline(o.texte)}</span>
    </label>`).join('')}</div>`;
  const msg = addInlineMsg(body);
  actions.innerHTML = `<button class="btn btn--primary">Vérifier</button>`;
  actions.querySelector('button').addEventListener('click', () => {
    const checked = Array.from(body.querySelectorAll('input:checked')).map(i => i.value);
    if (checked.length === 0) { msg.textContent = 'Sélectionne au moins une réponse.'; return; }
    const correctSet = new Set(exercise.correctes);
    const isCorrect = checked.length === correctSet.size && checked.every(c => correctSet.has(c));
    finish(isCorrect);
  });
}

function renderVraiFaux(exercise, body, actions, finish) {
  body.innerHTML = `<div class="vf-options">
    <button class="btn btn--choice" data-val="true">✔️ Vrai</button>
    <button class="btn btn--choice" data-val="false">✖️ Faux</button>
  </div>`;
  body.querySelectorAll('.btn--choice').forEach(btn => btn.addEventListener('click', () => {
    finish((btn.dataset.val === 'true') === exercise.correct);
  }));
}

function renderReponseCourte(exercise, body, actions, finish) {
  body.innerHTML = `<input type="text" class="input-text" placeholder="Ta réponse...">`;
  const input = body.querySelector('input');
  const msg = addInlineMsg(body);
  actions.innerHTML = `<button class="btn btn--primary">Vérifier</button>`;
  function submit() {
    if (!input.value.trim()) { msg.textContent = 'Écris une réponse avant de vérifier.'; return; }
    const val = normalize(input.value);
    const isCorrect = exercise.reponsesAcceptees.some(r => normalize(r) === val);
    finish(isCorrect);
  }
  actions.querySelector('button').addEventListener('click', submit);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') submit(); });
}

function renderLireCode(exercise, body, actions, finish) {
  body.innerHTML = `
    ${renderCodeBlock(exercise.code, exercise.langage)}
    <p class="exercise__question">${escapeHtml(exercise.question || 'Que va afficher ce programme ?')}</p>
    <input type="text" class="input-text" placeholder="Ta réponse...">`;
  const input = body.querySelector('input');
  const msg = addInlineMsg(body);
  actions.innerHTML = `<button class="btn btn--primary">Vérifier</button>`;
  function submit() {
    if (!input.value.trim()) { msg.textContent = 'Écris une réponse avant de vérifier.'; return; }
    const val = normalize(input.value);
    const isCorrect = exercise.reponsesAcceptees.some(r => normalize(r) === val);
    finish(isCorrect);
  }
  actions.querySelector('button').addEventListener('click', submit);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') submit(); });
}

function renderTrouverErreur(exercise, body, actions, finish) {
  const lines = exercise.code.split('\n');
  body.innerHTML = `
    ${renderCodeBlock(exercise.code, exercise.langage)}
    <p class="exercise__question">Clique sur la ligne qui contient l'erreur :</p>
    <div class="line-choices"></div>`;
  const choices = body.querySelector('.line-choices');
  lines.forEach((_, idx) => {
    const n = idx + 1;
    const btn = document.createElement('button');
    btn.className = 'btn btn--line';
    btn.textContent = `Ligne ${n}`;
    btn.addEventListener('click', () => {
      const isCorrect = n === exercise.ligneErreur;
      const extra = `<div class="exercise__correction-code"><strong>Ligne fautive</strong>${renderCodeBlock(exercise.code, exercise.langage, { highlightLine: exercise.ligneErreur })}</div>`;
      finish(isCorrect, extra);
    });
    choices.appendChild(btn);
  });
}

function renderCompleterCode(exercise, body, actions, finish) {
  const lines = exercise.template.split('\n');
  const rows = lines.map((line, idx) => {
    const n = idx + 1;
    const content = escapeHtml(line).replace(/\{\{(\d+)\}\}/g, (_, id) => `<span class="blank-slot" data-trou="${id}"></span>`);
    return `<div class="code-line"><span class="code-line__num">${n}</span><span class="code-line__content">${content}</span></div>`;
  }).join('');
  body.innerHTML = `<div class="code-block" data-lang="${escapeHtml(exercise.langage || '')}"><div class="code-block__lines">${rows}</div></div>`;

  const inputs = {};
  body.querySelectorAll('.blank-slot').forEach(slot => {
    const id = slot.dataset.trou;
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'blank-input';
    input.autocomplete = 'off'; input.autocapitalize = 'off'; input.spellcheck = false;
    input.size = Math.max(3, (exercise.trous.find(t => String(t.id) === id)?.accepte[0] || '').length + 1);
    slot.replaceWith(input);
    inputs[id] = input;
  });

  actions.innerHTML = `<button class="btn btn--primary">Vérifier</button>`;
  actions.querySelector('button').addEventListener('click', () => {
    let allCorrect = true;
    exercise.trous.forEach(t => {
      const input = inputs[t.id];
      const val = normalize(input.value);
      const ok = t.accepte.some(a => normalize(a) === val);
      if (!ok) allCorrect = false;
      input.classList.add(ok ? 'blank-input--ok' : 'blank-input--ko');
    });
    finish(allCorrect);
  });
}

function renderCorrigerCode(exercise, body, actions, finish) {
  const note = document.createElement('p');
  note.className = 'editor-note';
  note.textContent = "Vérification structurelle (pas d'exécution réelle du code) — compare toujours avec le corrigé proposé.";
  body.appendChild(note);

  const editor = createEditor({ code: exercise.codeInitial, lang: exercise.langage });
  body.appendChild(editor.el);
  renderAiHelper(exercise, editor, body);

  actions.innerHTML = `<button class="btn" data-act="reset">↻ Réinitialiser</button><button class="btn btn--primary" data-act="verify">✓ Vérifier</button>`;
  actions.querySelector('[data-act="reset"]').addEventListener('click', () => editor.setValue(exercise.codeInitial));
  actions.querySelector('[data-act="verify"]').addEventListener('click', () => {
    const value = editor.getValue();
    const results = exercise.verif.map(v => ({ label: v.label, ok: v.regex.test(value) }));
    const allOk = results.every(r => r.ok);
    const extra = `
      <ul class="checklist">${results.map(r => `<li class="checklist__item checklist__item--${r.ok ? 'ok' : 'ko'}">${r.ok ? '✅' : '❌'} ${escapeHtml(r.label)}</li>`).join('')}</ul>
      <div class="exercise__solution"><strong>Corrigé proposé</strong>${renderCodeBlock(exercise.solution, exercise.langage)}</div>`;
    finish(allOk, extra);
  });
}

function renderProgrammation(exercise, body, actions, finish) {
  const note = document.createElement('p');
  note.className = 'editor-note';
  note.textContent = "Vérification structurelle (pas d'exécution réelle du code) — compare toujours avec le corrigé proposé.";
  body.appendChild(note);

  const editor = createEditor({ code: exercise.codeDepart, lang: exercise.langage });
  body.appendChild(editor.el);
  renderAiHelper(exercise, editor, body);

  actions.innerHTML = `<button class="btn" data-act="reset">↻ Réinitialiser</button><button class="btn btn--primary" data-act="verify">✓ Vérifier</button>`;
  actions.querySelector('[data-act="reset"]').addEventListener('click', () => editor.setValue(exercise.codeDepart));
  actions.querySelector('[data-act="verify"]').addEventListener('click', () => {
    const value = editor.getValue();
    const results = exercise.criteres.map(c => ({ label: c.label, ok: c.regex.test(value) }));
    const allOk = results.every(r => r.ok);
    const extra = `
      <ul class="checklist">${results.map(r => `<li class="checklist__item checklist__item--${r.ok ? 'ok' : 'ko'}">${r.ok ? '✅' : '❌'} ${escapeHtml(r.label)}</li>`).join('')}</ul>
      <div class="exercise__solution"><strong>Corrigé proposé</strong>${renderCodeBlock(exercise.solution, exercise.langage)}</div>`;
    finish(allOk, extra);
  });
}

/**
 * Aide IA progressive : indice → explication → correction complète, jamais
 * la réponse directe (l'étape suivante n'apparaît qu'une fois la précédente
 * consultée). Ne s'affiche pas du tout tant que AI_PROXY_URL n'est pas
 * configuré (js/aiConfig.js) — le site fonctionne normalement sans ça.
 */
function renderAiHelper(exercise, editor, body) {
  if (!AI_PROXY_URL) return;

  const wrap = document.createElement('div');
  wrap.className = 'ai-helper';
  wrap.innerHTML = `
    <div class="ai-helper__header">🤖 Besoin d'aide ?</div>
    <div class="ai-helper__steps"></div>
    <div class="ai-helper__response"></div>
  `;
  body.appendChild(wrap);

  const stepsEl = wrap.querySelector('.ai-helper__steps');
  const responseEl = wrap.querySelector('.ai-helper__response');

  const ETAPES = [
    { niveau: 'indice', label: '💡 Demander un indice' },
    { niveau: 'explication', label: "🔎 Voir l'explication" },
    { niveau: 'correction', label: '✅ Voir la correction complète' }
  ];

  async function demander(niveau, btn) {
    btn.disabled = true;
    btn.textContent = '… génération en cours';
    try {
      const res = await fetch(AI_PROXY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          niveau,
          enonce: exercise.enonce,
          codeEtudiant: editor.getValue(),
          langage: exercise.langage
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erreur inconnue');
      const bloc = document.createElement('div');
      bloc.className = 'ai-helper__bloc';
      bloc.innerHTML = `<strong>${escapeHtml(ETAPES.find(e => e.niveau === niveau).label)}</strong><p>${escapeHtml(data.reponse)}</p>`;
      responseEl.appendChild(bloc);
      afficherEtapeSuivante(niveau);
    } catch (e) {
      const erreur = document.createElement('p');
      erreur.className = 'inline-msg';
      erreur.textContent = "L'aide IA n'a pas pu répondre (" + e.message + ").";
      responseEl.appendChild(erreur);
      btn.disabled = false;
      btn.textContent = ETAPES.find(e2 => e2.niveau === niveau).label;
    }
  }

  function afficherEtapeSuivante(niveauActuel) {
    stepsEl.innerHTML = '';
    const idx = ETAPES.findIndex(e => e.niveau === niveauActuel);
    const suivante = ETAPES[idx + 1];
    if (!suivante) return;
    const btn = document.createElement('button');
    btn.className = 'btn btn--outline';
    btn.textContent = suivante.label;
    btn.addEventListener('click', () => demander(suivante.niveau, btn));
    stepsEl.appendChild(btn);
  }

  afficherEtapeSuivante(null); // affiche la première étape (indice)
  // astuce : niveau `null` ne matche aucune étape existante, donc idx = -1,
  // et ETAPES[-1 + 1] = ETAPES[0] = l'indice. C'est voulu.
}
