// ============================================================================
// app.js — Routage et pages de l'application
// ----------------------------------------------------------------------------
// Routage 100% côté client via location.hash (aucune configuration serveur
// nécessaire, compatible GitHub Pages tel quel). Chaque page est une fonction
// render(container, params) qui reconstruit le contenu de #view.
// ============================================================================

import { PROGRAMME_VERSIONS, MATIERES, BLOCS, getMatiere, PARCOURS } from './data/programme.js';
import { LESSONS, getLesson, getLessonsByParcours } from './data/lessons.js';
import { EXERCISES, getExercise, getFilterOptions } from './data/exercises.js';
import { renderExercise } from './engine/exerciseEngine.js';
import {
  getDifficultes, getProgressionParMatiere, getExercicesRecommandes,
  getRevisionDuJour, getDashboardRecommandation
} from './engine/recommend.js';
import {
  load, markLessonRead, getXpForNextLevel, recordExamen, resetAll,
  setProgrammeVersion, BADGES
} from './store.js';
import { escapeHtml, renderCodeBlock } from './components/codeEditor.js';

const DIFFICULTE_LABELS = { facile: 'Facile', moyen: 'Moyen', difficile: 'Difficile', bts: 'Niveau BTS' };
const TYPE_LABELS = {
  'qcm': 'QCM', 'vrai-faux': 'Vrai / Faux', 'reponse-courte': 'Réponse courte',
  'trouver-erreur': "Trouver l'erreur", 'corriger-code': 'Corriger le code',
  'completer-code': 'Compléter le code', 'lire-code': 'Lire le code', 'programmation': 'Programmation'
};

// ---------------------------------------------------------------- Helpers --
function mdInline(text) {
  if (!text) return '';
  return escapeHtml(text).replace(/`([^`]+)`/g, '<code>$1</code>');
}
function mdParagraphs(arr) {
  return (arr || []).map(p => `<p>${mdInline(p)}</p>`).join('');
}
function bucketClass(score) {
  if (score < 40) return 'mastery-red';
  if (score < 65) return 'mastery-orange';
  if (score < 85) return 'mastery-yellow';
  return 'mastery-green';
}
function progressBar(percent) {
  const p = Math.max(0, Math.min(100, percent || 0));
  return `<div class="progress-bar"><div class="progress-bar__fill ${bucketClass(p)}" style="width:${p}%"></div></div>`;
}
function notFound(message, href, label) {
  return `<section class="page"><p class="card__empty">${escapeHtml(message)}</p><a class="btn btn--primary" href="${href}">${escapeHtml(label)}</a></section>`;
}
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function buildDailyActivity(attempts, days) {
  const result = [];
  const today = new Date();
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const iso = d.toISOString().slice(0, 10);
    const count = attempts.filter(a => a.date.slice(0, 10) === iso).length;
    result.push({ date: iso, count });
  }
  return result;
}
function renderBadgesMini(s) {
  return `<div class="badges-mini">${BADGES.map(b => {
    const earned = s.badges.includes(b.id);
    return `<span class="badge-chip ${earned ? 'badge-chip--earned' : 'badge-chip--locked'}" title="${escapeHtml(b.label)}${earned ? '' : ' (à débloquer)'}">${b.label.split(' ')[0]}</span>`;
  }).join('')}</div>`;
}

// --------------------------------------------------------------- Dashboard --
function renderDashboard(container) {
  const s = load();
  const rec = getDashboardRecommandation();
  const difficultes = getDifficultes().filter(d => d.seen).slice(0, 3);
  const progressionMatieres = getProgressionParMatiere();
  const overall = progressionMatieres.length
    ? Math.round(progressionMatieres.reduce((a, b) => a + b.progression, 0) / progressionMatieres.length)
    : 0;
  const lastLesson = s.lastLessonId ? getLesson(s.lastLessonId) : null;
  const firstLesson = LESSONS[0];
  const versionLabel = PROGRAMME_VERSIONS.find(v => v.id === s.programmeVersion)?.label || '';

  container.innerHTML = `
    <section class="page page--dashboard">
      <h1 class="page__title">👋 Bonjour !</h1>
      <p class="page__subtitle">Continue ta progression vers le BTS SIO — ${escapeHtml(versionLabel)}.</p>

      <div class="dashboard-grid">
        <a class="card card--action" href="#/lecons/${(lastLesson || firstLesson).id}">
          <div class="card__eyebrow">📚 Continuer mes révisions</div>
          <div class="card__title">${escapeHtml((lastLesson || firstLesson).titre)}</div>
          <div class="card__meta">${lastLesson ? 'Reprendre la leçon' : 'Commencer ici'}</div>
        </a>

        ${rec ? `
        <a class="card card--action" href="#/session?ids=${getExercicesRecommandes(rec.competence, 4).map(e => e.id).join(',')}&title=${encodeURIComponent(rec.titre)}">
          <div class="card__eyebrow">🎯 Révision recommandée</div>
          <div class="card__title">${escapeHtml(rec.titre)}</div>
          <div class="card__meta">${rec.label.emoji} ${escapeHtml(rec.label.label)} — ${rec.score}%</div>
        </a>` : ''}

        <div class="card">
          <div class="card__eyebrow">❌ Mes difficultés</div>
          ${difficultes.length
            ? `<ul class="mini-list">${difficultes.map(d => `<li>${d.label.emoji} ${escapeHtml(d.titre)} — ${d.score}%</li>`).join('')}</ul>`
            : `<p class="card__empty">Fais quelques exercices pour voir apparaître ici tes points à travailler.</p>`}
          <a class="card__link" href="#/difficultes">Voir tout →</a>
        </div>

        <div class="card">
          <div class="card__eyebrow">📊 Ma progression</div>
          ${progressBar(overall)}
          <div class="card__meta">${overall}% du contenu disponible maîtrisé</div>
        </div>

        <div class="card">
          <div class="card__eyebrow">🔥 Série actuelle</div>
          <div class="card__streak">${s.streak.current} jour${s.streak.current > 1 ? 's' : ''} de suite</div>
          <div class="card__meta">Record personnel : ${s.streak.longest} jours</div>
        </div>

        <div class="card">
          <div class="card__eyebrow">🏆 Badges</div>
          ${renderBadgesMini(s)}
        </div>
      </div>
    </section>`;
}

// ----------------------------------------------------------------- Leçons --
function lessonCard(l, s) {
  const done = !!s.lessonsRead[l.id];
  const m = s.mastery[l.competence];
  const score = m ? m.score : 0;
  return `<a class="lesson-card ${done ? 'lesson-card--done' : ''}" href="#/lecons/${l.id}">
    <div class="lesson-card__title">${escapeHtml(l.titre)}</div>
    <div class="lesson-card__meta">
      <span class="badge badge--${l.difficulte}">${DIFFICULTE_LABELS[l.difficulte]}</span>
      ${done ? `<span class="lesson-card__score">${score}%</span>` : '<span class="lesson-card__new">Non lu</span>'}
    </div>
  </a>`;
}

function renderLeconsListe(container) {
  const s = load();
  const versionsOptions = PROGRAMME_VERSIONS.map(v =>
    `<option value="${v.id}" ${v.id === s.programmeVersion ? 'selected' : ''}>${escapeHtml(v.label)}</option>`).join('');

  const parcoursHtml = PARCOURS.map(p => {
    const lessons = getLessonsByParcours(p.id);
    const byNiveau = {};
    lessons.forEach(l => { (byNiveau[l.niveau] = byNiveau[l.niveau] || []).push(l); });
    const niveauxHtml = p.niveaux.map(niv => {
      const lecons = byNiveau[niv.n] || [];
      return `<div class="niveau-block">
        <div class="niveau-block__header">Niveau ${niv.n} — ${escapeHtml(niv.nom)}</div>
        ${lecons.length
          ? `<div class="lesson-cards">${lecons.map(l => lessonCard(l, s)).join('')}</div>`
          : `<p class="niveau-block__empty">Contenu à venir.</p>`}
      </div>`;
    }).join('');
    return `<section class="parcours-section">
      <h2>${escapeHtml(p.nom)}</h2>
      <p class="parcours-section__desc">${escapeHtml(p.description)}</p>
      ${niveauxHtml}
    </section>`;
  }).join('');

  const autresMatieres = MATIERES.filter(m => !PARCOURS.some(p => p.matiereId === m.id));
  const autresHtml = `<section class="parcours-section">
    <h2>Autres matières du référentiel</h2>
    <div class="lesson-cards">${autresMatieres.map(m => `
      <div class="lesson-card lesson-card--empty">
        <div class="lesson-card__title">${escapeHtml(m.nom)}</div>
        <div class="lesson-card__meta"><span class="lesson-card__new">Contenu à venir</span></div>
      </div>`).join('')}</div>
  </section>`;

  container.innerHTML = `
    <section class="page page--lecons">
      <div class="page__header-row">
        <h1 class="page__title">📚 Leçons</h1>
        <select id="version-select" class="select">${versionsOptions}</select>
      </div>
      ${parcoursHtml}
      ${autresHtml}
    </section>`;

  container.querySelector('#version-select').addEventListener('change', (e) => {
    setProgrammeVersion(e.target.value);
    renderLeconsListe(container);
  });
}

function renderLeconDetail(container, lessonId) {
  const lesson = getLesson(lessonId);
  if (!lesson) { container.innerHTML = notFound('Leçon introuvable.', '#/lecons', 'Retour aux leçons'); return; }
  markLessonRead(lesson.id);

  const parcoursLessons = lesson.parcoursId ? getLessonsByParcours(lesson.parcoursId) : [];
  const idx = parcoursLessons.findIndex(l => l.id === lesson.id);
  const prev = idx > 0 ? parcoursLessons[idx - 1] : null;
  const next = idx >= 0 && idx < parcoursLessons.length - 1 ? parcoursLessons[idx + 1] : null;

  container.innerHTML = `
    <article class="page page--lecon">
      <a class="back-link" href="#/lecons">← Retour aux leçons</a>
      <div class="lecon-header">
        <span class="badge badge--${lesson.difficulte}">${DIFFICULTE_LABELS[lesson.difficulte]}</span>
        <h1 class="page__title">${escapeHtml(lesson.titre)}</h1>
      </div>

      <section class="lecon-section">
        <h2>🎯 Objectif</h2>
        <p>${mdInline(lesson.objectif)}</p>
      </section>

      <section class="lecon-section">
        <h2>💡 Explication</h2>
        ${mdParagraphs(lesson.explication)}
      </section>

      <section class="lecon-section lecon-section--retenir">
        <h2>📌 À retenir</h2>
        <ul>${lesson.aRetenir.map(pt => `<li>${mdInline(pt)}</li>`).join('')}</ul>
      </section>

      <section class="lecon-section">
        <h2>💻 Exemple</h2>
        ${renderCodeBlock(lesson.exemple.code, lesson.exemple.langage)}
      </section>

      <section class="lecon-section">
        <h2>🔍 Exemple expliqué</h2>
        <ul class="explained-list">${lesson.exempleExplique.map(pt => `<li>${mdInline(pt)}</li>`).join('')}</ul>
      </section>

      <section class="lecon-section lecon-section--erreurs">
        <h2>⚠️ Erreurs fréquentes</h2>
        <ul>${lesson.erreursFrequentes.map(pt => `<li>${mdInline(pt)}</li>`).join('')}</ul>
      </section>

      <section class="lecon-section lecon-section--astuce">
        <h2>🧠 Astuce</h2>
        <p>${mdInline(lesson.astuce)}</p>
      </section>

      <section class="lecon-section">
        <h2>🧪 Mini-test &amp; exercices de fin de leçon</h2>
        <div id="lecon-exercices"></div>
      </section>

      <div class="lecon-nav">
        ${prev ? `<a class="btn" href="#/lecons/${prev.id}">← ${escapeHtml(prev.titre)}</a>` : '<span></span>'}
        ${next ? `<a class="btn btn--primary" href="#/lecons/${next.id}">${escapeHtml(next.titre)} →</a>` : ''}
      </div>
    </article>`;

  const exWrap = container.querySelector('#lecon-exercices');
  lesson.exercicesIds.forEach(id => {
    const exo = getExercise(id);
    if (!exo) return;
    const div = document.createElement('div');
    div.className = 'lecon-exercice';
    exWrap.appendChild(div);
    renderExercise(exo, div, {});
  });
}

// -------------------------------------------------------------- Exercices --
function renderExercicesListe(container, initialParams) {
  const filters = getFilterOptions();
  const state = {
    q: initialParams.get('q') || '',
    matiere: initialParams.get('matiere') || '',
    langage: initialParams.get('langage') || '',
    niveau: initialParams.get('niveau') || '',
    type: initialParams.get('type') || ''
  };

  container.innerHTML = `
    <section class="page page--exercices">
      <h1 class="page__title">📝 Exercices</h1>
      <div class="exercices-search">
        <input type="search" id="ex-search" class="input-text input-text--search" placeholder="Rechercher : boucle for, JOIN, héritage, classes C#..." value="${escapeHtml(state.q)}">
      </div>
      <div class="exercices-filters">
        <select id="f-matiere"><option value="">Toutes les matières</option>${filters.matieres.map(m => `<option value="${m}" ${state.matiere === m ? 'selected' : ''}>${escapeHtml(getMatiere(m)?.nom || m)}</option>`).join('')}</select>
        <select id="f-langage"><option value="">Tous les langages</option>${filters.langages.map(l => `<option value="${l}" ${state.langage === l ? 'selected' : ''}>${l.toUpperCase()}</option>`).join('')}</select>
        <select id="f-niveau"><option value="">Tous les niveaux</option>${filters.niveaux.map(n => `<option value="${n}" ${state.niveau === n ? 'selected' : ''}>${DIFFICULTE_LABELS[n] || n}</option>`).join('')}</select>
        <select id="f-type"><option value="">Tous les types</option>${filters.types.map(t => `<option value="${t}" ${state.type === t ? 'selected' : ''}>${TYPE_LABELS[t] || t}</option>`).join('')}</select>
      </div>
      <p class="exercices-count" id="ex-count"></p>
      <div class="exercices-results" id="ex-results"></div>
    </section>`;

  const resultsEl = container.querySelector('#ex-results');
  const countEl = container.querySelector('#ex-count');

  function matches(e) {
    if (state.matiere && e.matiere !== state.matiere) return false;
    if (state.langage && e.langage !== state.langage) return false;
    if (state.niveau && e.difficulte !== state.niveau) return false;
    if (state.type && e.type !== state.type) return false;
    if (state.q) {
      const hay = (e.enonce + ' ' + e.competence + ' ' + (e.langage || '')).toLowerCase();
      if (!hay.includes(state.q.toLowerCase())) return false;
    }
    return true;
  }

  function renderResults() {
    const filtered = EXERCISES.filter(matches);
    countEl.textContent = `${filtered.length} exercice${filtered.length !== 1 ? 's' : ''}`;
    if (!filtered.length) {
      resultsEl.innerHTML = `<p class="card__empty">Aucun exercice ne correspond à ces critères. Essaie d'élargir ta recherche.</p>`;
      return;
    }
    resultsEl.innerHTML = filtered.map(e => `
      <div class="exercise-card" data-id="${e.id}">
        <div class="exercise-card__meta">
          <span class="badge badge--${e.difficulte}">${DIFFICULTE_LABELS[e.difficulte]}</span>
          <span class="badge badge--type">${TYPE_LABELS[e.type]}</span>
          ${e.langage ? `<span class="badge badge--langage">${e.langage.toUpperCase()}</span>` : ''}
        </div>
        <div class="exercise-card__enonce">${mdInline(e.enonce)}</div>
        <button class="btn btn--outline exercise-card__toggle">Faire l'exercice</button>
        <div class="exercise-card__panel"></div>
      </div>`).join('');

    resultsEl.querySelectorAll('.exercise-card').forEach(card => {
      const btn = card.querySelector('.exercise-card__toggle');
      const panel = card.querySelector('.exercise-card__panel');
      btn.addEventListener('click', () => {
        if (panel.classList.contains('exercise-card__panel--open')) {
          panel.classList.remove('exercise-card__panel--open');
          panel.innerHTML = '';
          btn.textContent = "Faire l'exercice";
          return;
        }
        renderExercise(getExercise(card.dataset.id), panel, {});
        panel.classList.add('exercise-card__panel--open');
        btn.textContent = 'Masquer';
      });
    });
  }

  container.querySelector('#ex-search').addEventListener('input', e => { state.q = e.target.value; renderResults(); });
  container.querySelector('#f-matiere').addEventListener('change', e => { state.matiere = e.target.value; renderResults(); });
  container.querySelector('#f-langage').addEventListener('change', e => { state.langage = e.target.value; renderResults(); });
  container.querySelector('#f-niveau').addEventListener('change', e => { state.niveau = e.target.value; renderResults(); });
  container.querySelector('#f-type').addEventListener('change', e => { state.type = e.target.value; renderResults(); });

  renderResults();
}

// ------------------------------------------------------------- Difficultés --
function renderDifficultes(container) {
  const list = getDifficultes();
  container.innerHTML = `
    <section class="page page--difficultes">
      <h1 class="page__title">❌ Mes difficultés</h1>
      <p class="page__subtitle">Classées de la moins maîtrisée à la mieux maîtrisée, à partir de tes résultats réels aux exercices.</p>
      <div class="difficultes-list">
        ${list.map(d => `
          <div class="difficulte-row">
            <div class="difficulte-row__main">
              <div class="difficulte-row__title">${d.label.emoji} ${escapeHtml(d.titre)}</div>
              ${progressBar(d.score)}
            </div>
            <div class="difficulte-row__score">${d.seen ? d.score + '%' : 'Pas encore travaillé'}</div>
            <a class="btn btn--outline" href="#/session?ids=${getExercicesRecommandes(d.competence, 5).map(e => e.id).join(',')}&title=${encodeURIComponent(d.titre)}">S'entraîner</a>
          </div>`).join('')}
      </div>
    </section>`;
}

// ----------------------------------------------------------- Révision jour --
function renderRevisionDuJour(container) {
  const session = getRevisionDuJour();
  if (!session) { container.innerHTML = notFound('Rien à réviser pour le moment.', '#/lecons', 'Parcourir les leçons'); return; }
  const allIds = session.blocks.flatMap(b => (b.exercices || []).map(e => e.id));

  container.innerHTML = `
    <section class="page page--revision">
      <h1 class="page__title">🧠 Révision du jour</h1>
      <p class="page__subtitle">⏱️ Durée estimée : ${session.dureeTotale} min</p>
      <div class="revision-blocks">
        ${session.blocks.map(b => `
          <div class="revision-block">
            <div class="revision-block__duree">${b.duree} min</div>
            <div class="revision-block__title">${escapeHtml(b.titre)}</div>
            ${b.type === 'lecon'
              ? (session.cible.lessonId ? `<a class="revision-block__link" href="#/lecons/${session.cible.lessonId}">${escapeHtml(session.cible.titre)} →</a>` : '')
              : `<div class="revision-block__count">${(b.exercices || []).length} exercice(s)</div>`}
          </div>`).join('')}
      </div>
      ${allIds.length
        ? `<a class="btn btn--primary btn--large" href="#/session?ids=${allIds.join(',')}&title=${encodeURIComponent('Révision du jour')}">Commencer la séance</a>`
        : `<p class="card__empty">Pas assez d'exercices disponibles sur cette compétence pour le moment.</p>`}
    </section>`;
}

// -------------------------------------------------------------- Statistiques --
function renderStatistiques(container) {
  const s = load();
  const successRate = s.totalAttempts ? Math.round((s.totalCorrect / s.totalAttempts) * 100) : 0;
  const minutes = Math.round(s.totalTimeMs / 60000);
  const progressionMatieres = getProgressionParMatiere();
  const difficultes = getDifficultes().filter(d => d.seen);
  const meilleures = difficultes.slice(-3).reverse();
  const aAmeliorer = difficultes.slice(0, 3);
  const daily = buildDailyActivity(s.attempts, 14);
  const maxCount = Math.max(1, ...daily.map(d => d.count));

  container.innerHTML = `
    <section class="page page--stats">
      <h1 class="page__title">📊 Mes statistiques</h1>
      <div class="stats-grid">
        <div class="stat-card"><div class="stat-card__value">${s.totalAttempts}</div><div class="stat-card__label">Exercices réalisés</div></div>
        <div class="stat-card"><div class="stat-card__value">${s.totalCorrect}</div><div class="stat-card__label">Bonnes réponses</div></div>
        <div class="stat-card"><div class="stat-card__value">${successRate}%</div><div class="stat-card__label">Taux de réussite</div></div>
        <div class="stat-card"><div class="stat-card__value">${minutes} min</div><div class="stat-card__label">Temps passé</div></div>
      </div>

      <h2 class="section-title">Progression par matière</h2>
      <div class="matiere-bars">
        ${progressionMatieres.length ? progressionMatieres.map(pm => `
          <div class="matiere-bar">
            <div class="matiere-bar__label">${escapeHtml(pm.matiere.nom)}</div>
            ${progressBar(pm.progression)}
            <div class="matiere-bar__value">${pm.progression}%</div>
          </div>`).join('') : '<p class="card__empty">Pas encore de données.</p>'}
      </div>

      <h2 class="section-title">Activité des 14 derniers jours</h2>
      <div class="activity-chart">
        ${daily.map(d => `<div class="activity-bar" style="height:${Math.max(4, Math.round((d.count / maxCount) * 100))}%" title="${d.date} — ${d.count} exercice(s)"></div>`).join('')}
      </div>

      <div class="stats-columns">
        <div>
          <h2 class="section-title">Meilleures notions</h2>
          ${meilleures.length ? `<ul class="mini-list">${meilleures.map(d => `<li>${d.label.emoji} ${escapeHtml(d.titre)} — ${d.score}%</li>`).join('')}</ul>` : '<p class="card__empty">Pas encore de données.</p>'}
        </div>
        <div>
          <h2 class="section-title">Notions à améliorer</h2>
          ${aAmeliorer.length ? `<ul class="mini-list">${aAmeliorer.map(d => `<li>${d.label.emoji} ${escapeHtml(d.titre)} — ${d.score}%</li>`).join('')}</ul>` : '<p class="card__empty">Pas encore de données.</p>'}
        </div>
      </div>

      <button class="btn btn--danger-outline" id="reset-btn">Réinitialiser ma progression</button>
    </section>`;

  container.querySelector('#reset-btn').addEventListener('click', () => {
    if (confirm('Cette action efface définitivement ta progression sur cet appareil. Continuer ?')) {
      resetAll();
      location.hash = '#/';
    }
  });
}

// ------------------------------------------------------------- Objectif BTS --
function renderObjectifBTS(container) {
  const s = load();
  const progressionMatieres = getProgressionParMatiere();
  const overall = progressionMatieres.length
    ? Math.round(progressionMatieres.reduce((a, b) => a + b.progression, 0) / progressionMatieres.length)
    : 0;
  const competencesTotal = getDifficultes().length;
  const competencesMaitrisees = getDifficultes().filter(d => d.score >= 85).length;
  const niveauEstime = s.totalAttempts >= 5 ? (overall / 100 * 20).toFixed(1) : null;

  const blocsHtml = BLOCS.map(bloc => {
    const matieresBloc = MATIERES.filter(m => m.blocId === bloc.id);
    const pms = progressionMatieres.filter(pm => matieresBloc.some(m => m.id === pm.matiere.id));
    const prog = pms.length ? Math.round(pms.reduce((a, b) => a + b.progression, 0) / pms.length) : null;
    return `<div class="bloc-card">
      <div class="bloc-card__title">${escapeHtml(bloc.nom)}</div>
      ${prog !== null ? progressBar(prog) + `<div class="bloc-card__value">${prog}%</div>` : '<p class="card__empty">Contenu pas encore ajouté pour ce bloc.</p>'}
    </div>`;
  }).join('');

  const examens = s.examens.slice(-5).reverse();

  container.innerHTML = `
    <section class="page page--objectif">
      <h1 class="page__title">🎯 Objectif BTS</h1>

      <div class="objectif-niveau">
        <div class="objectif-niveau__value">${niveauEstime !== null ? niveauEstime + ' / 20' : '— / 20'}</div>
        <div class="objectif-niveau__label">Niveau actuel estimé</div>
        <p class="objectif-niveau__disclaimer">⚠️ Indicateur pédagogique basé sur tes résultats aux exercices de cette plateforme — ce n'est en aucun cas une prédiction de ta note réelle au BTS.</p>
      </div>

      <h2 class="section-title">Progression par bloc de compétences</h2>
      <div class="blocs-grid">${blocsHtml}</div>

      <div class="objectif-stats">
        <div class="stat-card"><div class="stat-card__value">${competencesMaitrisees} / ${competencesTotal}</div><div class="stat-card__label">Compétences maîtrisées (≥85%)</div></div>
        <div class="stat-card"><div class="stat-card__value">${s.examens.length}</div><div class="stat-card__label">Examens blancs passés</div></div>
      </div>

      <h2 class="section-title">Derniers examens blancs</h2>
      ${examens.length
        ? `<ul class="mini-list">${examens.map(ex => `<li>${ex.date} — ${escapeHtml(ex.matiere)} — ${ex.score}/${ex.total}</li>`).join('')}</ul>`
        : `<p class="card__empty">Aucun examen blanc passé. <a href="#/examens">En lancer un →</a></p>`}

      <p class="objectif-note">ℹ️ La numérotation exacte des épreuves du BTS SIO a été révisée par l'arrêté du 8 juillet 2024 (applicable depuis la session 2025) ; certaines sources n'ont pas encore adopté la nouvelle numérotation. Vérifie toujours le libellé et le coefficient exacts auprès de ton établissement ou du référentiel officiel avant d'en tirer des conclusions.</p>
    </section>`;
}

// ------------------------------------------------------------ Examens blancs --
function renderExamens(container) {
  const s = load();
  const filters = getFilterOptions();
  const matieresDispo = filters.matieres.map(id => getMatiere(id)).filter(Boolean);

  container.innerHTML = `
    <section class="page page--examens">
      <h1 class="page__title">🗒️ Examens blancs</h1>
      <p class="page__subtitle">Les corrections restent masquées pendant l'examen et s'affichent toutes à la fin, avec ton score.</p>

      <div class="examen-form">
        <div class="form-group">
          <label for="exam-type">Type d'examen</label>
          <select id="exam-type">
            <option value="mini">Mini examen (5 questions, toutes matières)</option>
            <option value="matiere">Examen d'une matière</option>
            <option value="slam">Examen SLAM (programmation + bases de données)</option>
            <option value="complet">Examen complet</option>
          </select>
        </div>
        <div class="form-group" id="exam-matiere-group" style="display:none;">
          <label for="exam-matiere">Matière</label>
          <select id="exam-matiere">${matieresDispo.map(m => `<option value="${m.id}">${escapeHtml(m.nom)}</option>`).join('')}</select>
        </div>
        <div class="form-group form-group--inline">
          <label><input type="checkbox" id="exam-timer-toggle"> Chronométré</label>
          <input type="number" id="exam-timer-minutes" min="1" value="15" style="display:none;">
          <span id="exam-timer-unit" style="display:none;">minutes</span>
        </div>
        <button class="btn btn--primary" id="exam-start">Lancer l'examen</button>
      </div>

      <h2 class="section-title">Historique</h2>
      ${s.examens.length
        ? `<ul class="mini-list">${s.examens.slice().reverse().map(ex => `<li>${ex.date} — ${escapeHtml(ex.matiere)} — ${ex.score}/${ex.total}</li>`).join('')}</ul>`
        : '<p class="card__empty">Aucun examen blanc passé pour le moment.</p>'}
    </section>`;

  const typeSel = container.querySelector('#exam-type');
  const matiereGroup = container.querySelector('#exam-matiere-group');
  const timerToggle = container.querySelector('#exam-timer-toggle');
  const timerMinutes = container.querySelector('#exam-timer-minutes');
  const timerUnit = container.querySelector('#exam-timer-unit');

  typeSel.addEventListener('change', () => {
    matiereGroup.style.display = typeSel.value === 'matiere' ? 'block' : 'none';
  });
  timerToggle.addEventListener('change', () => {
    const show = timerToggle.checked ? 'inline-block' : 'none';
    timerMinutes.style.display = show;
    timerUnit.style.display = show;
  });

  container.querySelector('#exam-start').addEventListener('click', () => {
    let pool = [];
    let matiereLabel = 'Mixte';
    if (typeSel.value === 'mini') {
      pool = shuffle(EXERCISES).slice(0, 5);
    } else if (typeSel.value === 'matiere') {
      const mId = container.querySelector('#exam-matiere').value;
      pool = shuffle(EXERCISES.filter(e => e.matiere === mId)).slice(0, 8);
      matiereLabel = getMatiere(mId)?.nom || mId;
    } else if (typeSel.value === 'slam') {
      pool = shuffle(EXERCISES.filter(e => e.matiere === 'slam-prog' || e.matiere === 'slam-bdd')).slice(0, 10);
      matiereLabel = 'SLAM';
    } else {
      pool = shuffle(EXERCISES).slice(0, 15);
      matiereLabel = 'Complet';
    }
    if (!pool.length) { alert("Pas assez d'exercices disponibles pour ce choix pour le moment."); return; }
    const ids = pool.map(e => e.id).join(',');
    let url = `#/session?ids=${ids}&title=${encodeURIComponent('Examen blanc — ' + matiereLabel)}&exam=1&matiere=${encodeURIComponent(matiereLabel)}`;
    if (timerToggle.checked) url += `&timer=${timerMinutes.value}`;
    location.hash = url;
  });
}

// --------------------------------------------------------------------- Session --
function renderSession(container, params) {
  const ids = (params.get('ids') || '').split(',').filter(Boolean);
  const title = params.get('title') || 'Séance';
  const isExam = params.get('exam') === '1';
  const matiereLabel = params.get('matiere') || 'Mixte';
  const timerMinutes = params.get('timer') ? parseInt(params.get('timer'), 10) : null;

  if (!ids.length) {
    container.innerHTML = notFound('Aucun exercice disponible pour cette sélection.', '#/exercices', 'Parcourir les exercices');
    return;
  }

  let idx = 0;
  const results = [];
  let timerInterval = null;
  let remainingSeconds = timerMinutes ? timerMinutes * 60 : null;

  container.innerHTML = `
    <section class="page page--session">
      <div class="session__top">
        <h1 class="page__title">${escapeHtml(title)}</h1>
        ${remainingSeconds !== null ? '<div class="session__timer" id="session-timer"></div>' : ''}
      </div>
      <p class="session__progress" id="session-progress"></p>
      <div class="session__exercise" id="session-exercise"></div>
    </section>`;

  const progressEl = container.querySelector('#session-progress');
  const exerciseEl = container.querySelector('#session-exercise');
  const timerEl = container.querySelector('#session-timer');

  function updateTimerDisplay() {
    const m = Math.floor(remainingSeconds / 60);
    const sec = remainingSeconds % 60;
    timerEl.textContent = `⏱️ ${m}:${sec.toString().padStart(2, '0')}`;
  }

  if (remainingSeconds !== null) {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
      remainingSeconds--;
      updateTimerDisplay();
      if (remainingSeconds <= 0) {
        clearInterval(timerInterval);
        showRecap(true);
      }
    }, 1000);
  }

  function showCurrent() {
    if (idx >= ids.length) { showRecap(false); return; }
    progressEl.textContent = `Exercice ${idx + 1} / ${ids.length}`;
    const exo = getExercise(ids[idx]);
    if (!exo) { idx++; showCurrent(); return; }
    renderExercise(exo, exerciseEl, {
      examMode: isExam,
      onComplete: (correct) => {
        results.push({ id: exo.id, correct });
        const nextBtn = document.createElement('button');
        nextBtn.className = 'btn btn--primary session__next';
        nextBtn.textContent = idx === ids.length - 1 ? 'Voir le récapitulatif' : 'Exercice suivant →';
        nextBtn.addEventListener('click', () => { idx++; showCurrent(); });
        exerciseEl.appendChild(nextBtn);
      }
    });
  }

  function showRecap(timeUp) {
    if (timerInterval) clearInterval(timerInterval);
    const score = results.filter(r => r.correct).length;
    if (isExam) {
      recordExamen({ id: Date.now(), date: new Date().toISOString().slice(0, 10), score, total: results.length, matiere: matiereLabel });
    }
    progressEl.textContent = 'Séance terminée';
    if (timerEl) timerEl.textContent = '⏱️ Temps écoulé';

    let detailHtml = '';
    if (isExam) {
      detailHtml = `<div class="session__recap-detail">${results.map(r => {
        const exo = getExercise(r.id);
        return `<div class="recap-row recap-row--${r.correct ? 'ok' : 'ko'}">
          <div class="recap-row__title">${r.correct ? '✅' : '❌'} ${mdInline(exo.enonce)}</div>
          <div class="recap-row__explication">${mdInline(exo.explication)}</div>
        </div>`;
      }).join('')}</div>`;
    }

    exerciseEl.innerHTML = `
      <div class="session__recap">
        <div class="session__recap-score">${score} / ${results.length} bonnes réponses</div>
        ${timeUp ? '<p class="session__recap-note">Temps écoulé — seules les questions traitées comptent dans le score.</p>' : ''}
        ${detailHtml}
        <div class="session__recap-actions">
          <a class="btn btn--primary" href="#/difficultes">Voir mes difficultés</a>
          <a class="btn" href="#/">Retour à l'accueil</a>
        </div>
      </div>`;
  }

  showCurrent();
}

// ------------------------------------------------------------- Shell / routeur --
function updateNavActive(path) {
  document.querySelectorAll('#sidebar a[data-route]').forEach(a => {
    const route = a.dataset.route;
    const active = route === '/' ? path === '/' : path.startsWith(route);
    a.classList.toggle('is-active', active);
  });
}

function refreshHeader() {
  const s = load();
  const { level, current, needed } = getXpForNextLevel(s.xp);
  const tag = document.getElementById('programme-version-tag');
  if (tag) tag.textContent = PROGRAMME_VERSIONS.find(v => v.id === s.programmeVersion)?.label || '';
  const statsEl = document.getElementById('topbar-stats');
  if (statsEl) {
    statsEl.innerHTML = `
      <span class="topbar__streak" title="Série de jours de révision">🔥 ${s.streak.current}</span>
      <span class="topbar__level" title="Niveau (XP)">Niv. ${level}</span>
      <span class="topbar__xp-bar" title="${current} / ${needed} XP avant le niveau ${level + 1}">${progressBar(Math.round((current / needed) * 100))}</span>`;
  }
}

function parseHash() {
  const hash = location.hash.slice(1) || '/';
  const [path, qs] = hash.split('?');
  return { path, params: new URLSearchParams(qs || '') };
}

function router() {
  const { path, params } = parseHash();
  updateNavActive(path);
  const view = document.getElementById('view');
  window.scrollTo(0, 0);

  if (path === '/') return renderDashboard(view);
  if (path === '/lecons') return renderLeconsListe(view);
  if (path.startsWith('/lecons/')) return renderLeconDetail(view, decodeURIComponent(path.slice('/lecons/'.length)));
  if (path === '/exercices') return renderExercicesListe(view, params);
  if (path === '/difficultes') return renderDifficultes(view);
  if (path === '/revision') return renderRevisionDuJour(view);
  if (path === '/stats') return renderStatistiques(view);
  if (path === '/objectif') return renderObjectifBTS(view);
  if (path === '/examens') return renderExamens(view);
  if (path === '/session') return renderSession(view, params);
  return renderDashboard(view);
}

window.addEventListener('hashchange', router);
window.addEventListener('btssio:update', refreshHeader);

window.addEventListener('DOMContentLoaded', () => {
  router();
  refreshHeader();

  const menuBtn = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  if (menuBtn && sidebar && backdrop) {
    const closeMenu = () => { sidebar.classList.remove('sidebar--open'); backdrop.classList.remove('backdrop--visible'); };
    menuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('sidebar--open');
      backdrop.classList.toggle('backdrop--visible');
    });
    backdrop.addEventListener('click', closeMenu);
    sidebar.addEventListener('click', (e) => { if (e.target.tagName === 'A') closeMenu(); });
  }
});
