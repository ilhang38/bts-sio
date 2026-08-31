// ============================================================================
// store.js — Persistance locale (localStorage) et calculs de progression
// ----------------------------------------------------------------------------
// Toute la mémoire de l'application (résultats aux exercices, maîtrise par
// compétence, XP, séries, badges) vit dans une seule clé localStorage. Rien
// n'est envoyé sur un serveur : c'est un site 100% statique, comme l'exige
// l'architecture demandée.
//
// Boîtes de répétition espacée (façon Leitner) :
//   box 1 → à revoir demain        (1 jour)
//   box 2 → à revoir dans 3 jours
//   box 3 → à revoir dans 7 jours
//   box 4 → à revoir dans 14 jours
//   box 5 → maîtrisé               (30 jours)
// Une bonne réponse fait avancer d'une boîte, une erreur ramène à la boîte 1.
// ============================================================================

const STORAGE_KEY = 'btssio_v1';
const BOX_INTERVALS_DAYS = [1, 3, 7, 14, 30]; // index 0 = box 1

const BADGES = [
  { id: 'premiere-lecon', label: '🏆 Première leçon terminée', check: s => Object.keys(s.lessonsRead || {}).length >= 1 },
  { id: 'serie-7', label: '🔥 7 jours de révision', check: s => s.streak.longest >= 7 },
  { id: 'cent-exercices', label: '💻 100 exercices réalisés', check: s => s.totalAttempts >= 100 },
  { id: 'expert-sql', label: '🗄️ Expert SQL', check: s => (s.mastery['sql.select']?.score || 0) >= 85 && (s.mastery['sql.join']?.score || 0) >= 85 },
  { id: 'premier-examen', label: '🎯 Premier examen blanc terminé', check: s => (s.examens || []).length >= 1 }
];

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function daysBetween(iso1, iso2) {
  const a = new Date(iso1 + 'T00:00:00');
  const b = new Date(iso2 + 'T00:00:00');
  return Math.round((b - a) / 86400000);
}

function defaultState() {
  return {
    version: 1,
    createdAt: todayISO(),
    programmeVersion: '2025-2026',
    lastLessonId: null,
    lessonsRead: {},          // { lessonId: isoDateFirstRead }
    streak: { current: 0, longest: 0, lastDate: null },
    xp: 0,
    totalAttempts: 0,
    totalCorrect: 0,
    totalTimeMs: 0,
    badges: [],
    examens: [],              // [{ id, date, score, total, matiere }]
    attempts: [],             // historique borné (dernier 300) des tentatives
    mastery: {}               // { competence: { score, history:[bool], box, nextReview, lastSeen } }
  };
}

export function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    // fusion défensive avec les valeurs par défaut (ajout de nouvelles clés plus tard sans casser une sauvegarde existante)
    return Object.assign(defaultState(), parsed);
  } catch (e) {
    console.error('Lecture localStorage impossible, réinitialisation.', e);
    return defaultState();
  }
}

function save(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Écriture localStorage impossible (quota dépassé ?).', e);
  }
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('btssio:update'));
  }
}

export function setProgrammeVersion(versionId) {
  const s = load();
  s.programmeVersion = versionId;
  save(s);
}

export function markLessonRead(lessonId) {
  const s = load();
  if (!s.lessonsRead[lessonId]) {
    s.lessonsRead[lessonId] = todayISO();
  }
  s.lastLessonId = lessonId;
  touchStreak(s);
  save(s);
}

function touchStreak(s) {
  const today = todayISO();
  if (s.streak.lastDate === today) return; // déjà comptabilisé aujourd'hui
  if (s.streak.lastDate && daysBetween(s.streak.lastDate, today) === 1) {
    s.streak.current += 1;
  } else {
    s.streak.current = 1;
  }
  s.streak.lastDate = today;
  s.streak.longest = Math.max(s.streak.longest, s.streak.current);
}

function updateMastery(s, competence, correct) {
  const m = s.mastery[competence] || { score: 0, history: [], box: 1, nextReview: todayISO(), lastSeen: null };
  m.history.push(correct);
  if (m.history.length > 10) m.history.shift();
  const successCount = m.history.filter(Boolean).length;
  m.score = Math.round((successCount / m.history.length) * 100);
  m.box = correct ? Math.min(m.box + 1, 5) : 1;
  const interval = BOX_INTERVALS_DAYS[m.box - 1];
  const next = new Date();
  next.setDate(next.getDate() + interval);
  m.nextReview = next.toISOString().slice(0, 10);
  m.lastSeen = todayISO();
  s.mastery[competence] = m;
}

function checkBadges(s) {
  BADGES.forEach(b => {
    if (!s.badges.includes(b.id) && b.check(s)) {
      s.badges.push(b.id);
    }
  });
}

/**
 * Enregistre le résultat d'une tentative d'exercice et met à jour toute la
 * progression (maîtrise, XP, série, badges). Retourne le nouvel état pour
 * affichage immédiat (ex: "+10 XP").
 */
export function recordAttempt({ exerciseId, competence, matiere, type, difficulte, correct, timeMs }) {
  const s = load();
  touchStreak(s);

  s.attempts.push({
    exerciseId, competence, matiere, type, difficulte, correct,
    timeMs: timeMs || 0,
    date: new Date().toISOString()
  });
  if (s.attempts.length > 300) s.attempts.shift();

  s.totalAttempts += 1;
  if (correct) s.totalCorrect += 1;
  s.totalTimeMs += (timeMs || 0);

  const xpGain = correct ? 10 : 2;
  s.xp += xpGain;

  updateMastery(s, competence, correct);
  checkBadges(s);
  save(s);
  return { state: s, xpGain };
}

export function recordExamen(examen) {
  const s = load();
  s.examens.push(examen);
  checkBadges(s);
  save(s);
}

export function getMasteryFor(competence) {
  const s = load();
  return s.mastery[competence] || { score: 0, history: [], box: 1, nextReview: todayISO(), lastSeen: null };
}

export function getLevel(xp) {
  // 100 xp par niveau, progression simple et lisible
  return Math.floor(xp / 100) + 1;
}

export function getXpForNextLevel(xp) {
  const level = getLevel(xp);
  const floor = (level - 1) * 100;
  const ceil = level * 100;
  return { current: xp - floor, needed: ceil - floor, level };
}

export function masteryLabel(score) {
  if (score < 40) return { emoji: '🔴', label: 'À découvrir' };
  if (score < 65) return { emoji: '🟠', label: "En cours d'apprentissage" };
  if (score < 85) return { emoji: '🟡', label: 'À renforcer' };
  return { emoji: '🟢', label: 'Maîtrisé' };
}

export function isDue(competence) {
  const s = load();
  const m = s.mastery[competence];
  if (!m) return false; // jamais vu → pas "à réviser", plutôt "à découvrir"
  return m.nextReview <= todayISO();
}

export function resetAll() {
  localStorage.removeItem(STORAGE_KEY);
}

export { todayISO, BADGES };
