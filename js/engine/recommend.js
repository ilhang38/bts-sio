// ============================================================================
// recommend.js — Progression, difficultés et recommandations
// ----------------------------------------------------------------------------
// ⚠️ IMPORTANT (honnêteté sur ce qui est réellement implémenté) :
// Il n'y a pas de génération automatique de NOUVEAUX exercices par une IA
// (ça demanderait un service externe, voir js/data/exercises.js et la
// section "IA" du README). Ce module fait de la SÉLECTION INTELLIGENTE dans
// la banque d'exercices existante, triée par compétence et par difficulté
// croissante à partir du score réel de l'étudiant — ce qui correspond déjà à
// la boucle décrite dans le cahier des charges (facile → moyen → difficile →
// BTS, adaptation selon la réussite).
// ============================================================================

import { LESSONS } from '../data/lessons.js';
import { EXERCISES, getExercisesByCompetence } from '../data/exercises.js';
import { MATIERES } from '../data/programme.js';
import { load, masteryLabel, isDue } from '../store.js';

const DIFF_ORDER = ['facile', 'moyen', 'difficile', 'bts'];

function allCompetences() {
  const set = new Set();
  LESSONS.forEach(l => set.add(l.competence));
  EXERCISES.forEach(e => set.add(e.competence));
  return [...set];
}

function competenceMeta(competence) {
  const lesson = LESSONS.find(l => l.competence === competence);
  const exo = EXERCISES.find(e => e.competence === competence);
  return {
    competence,
    titre: lesson ? lesson.titre : competence,
    matiere: lesson ? lesson.matiere : (exo ? exo.matiere : null),
    lessonId: lesson ? lesson.id : null
  };
}

/** Liste des compétences triées de la moins maîtrisée à la mieux maîtrisée. */
export function getDifficultes() {
  const s = load();
  return allCompetences().map(c => {
    const meta = competenceMeta(c);
    const m = s.mastery[c];
    const score = m ? m.score : 0;
    return { ...meta, score, seen: !!m, label: masteryLabel(score), box: m ? m.box : 0, nextReview: m ? m.nextReview : null };
  }).sort((a, b) => a.score - b.score);
}

/** Progression agrégée par matière, calculée depuis les résultats réels aux exercices. */
export function getProgressionParMatiere() {
  const s = load();
  const competences = allCompetences();
  return MATIERES.map(mat => {
    const competencesMatiere = competences.filter(c => competenceMeta(c).matiere === mat.id);
    const lessonsMatiere = LESSONS.filter(l => l.matiere === mat.id);
    if (competencesMatiere.length === 0) return null;
    const scores = competencesMatiere.map(c => (s.mastery[c] ? s.mastery[c].score : 0));
    const progression = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
    const lessonsRead = lessonsMatiere.filter(l => s.lessonsRead[l.id]).length;
    return { matiere: mat, progression, lessonsRead, lessonsTotal: lessonsMatiere.length, competencesTotal: competencesMatiere.length };
  }).filter(Boolean);
}

/** Sélectionne jusqu'à `limit` exercices d'une compétence, en partant d'une
 * difficulté cohérente avec le score actuel puis en montant. */
export function getExercicesRecommandes(competence, limit = 4) {
  const s = load();
  const pool = getExercisesByCompetence(competence)
    .slice()
    .sort((a, b) => DIFF_ORDER.indexOf(a.difficulte) - DIFF_ORDER.indexOf(b.difficulte));
  const score = s.mastery[competence] ? s.mastery[competence].score : 0;
  let startIdx = 0;
  if (score >= 85) startIdx = Math.min(2, DIFF_ORDER.length - 1);
  else if (score >= 65) startIdx = 1;
  const ordered = pool.filter(e => DIFF_ORDER.indexOf(e.difficulte) >= startIdx)
    .concat(pool.filter(e => DIFF_ORDER.indexOf(e.difficulte) < startIdx));
  return ordered.slice(0, limit);
}

/** Construit la séance "Révision du jour" en priorisant les notions dues
 * (répétition espacée) puis, à défaut, la plus faible jamais rencontrée. */
export function getRevisionDuJour() {
  const difficultes = getDifficultes();
  if (difficultes.length === 0) return null;
  const dues = difficultes.filter(d => d.seen && isDue(d.competence));
  const cible = dues[0] || difficultes.find(d => d.seen) || difficultes[0];
  const exosCible = getExercicesRecommandes(cible.competence, 5);
  const mixte = EXERCISES.find(e => e.type === 'qcm' && e.competence !== cible.competence);

  const blocks = [
    { duree: 10, titre: 'Révision de la notion la plus fragile', type: 'lecon', cible },
    { duree: 15, titre: 'Exercices faciles', type: 'exercices', exercices: exosCible.filter(e => e.difficulte === 'facile') },
    { duree: 15, titre: 'Exercices moyens à difficiles', type: 'exercices', exercices: exosCible.filter(e => e.difficulte !== 'facile') },
    { duree: 5, titre: 'Mini-QCM de rappel', type: 'exercices', exercices: mixte ? [mixte] : [] }
  ];
  const dureeTotale = blocks.reduce((a, b) => a + b.duree, 0);
  return { cible, blocks, dureeTotale };
}

export function getDashboardRecommandation() {
  return getDifficultes().find(d => d.seen) || null;
}
