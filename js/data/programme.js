// ============================================================================
// programme.js — Métadonnées du référentiel BTS SIO
// ----------------------------------------------------------------------------
// Ce fichier NE CONTIENT AUCUN COURS NI EXERCICE. Il décrit uniquement la
// structure officielle du diplôme (années, matières, blocs de compétences)
// afin que le reste de l'application (leçons, exercices, filtres, page
// "Objectif BTS") puisse s'y référencer sans dupliquer l'information.
//
// Sources consultées (à re-vérifier à chaque rentrée, un lien ne remplace pas
// le texte réglementaire) :
//  - Arrêté du 8 juillet 2024 modifiant l'arrêté du 29 avril 2019 (applicable
//    à compter de la session d'examen 2025) — legifrance.gouv.fr
//  - Référentiel BTS SIO — enqdip.sup.adc.education.fr
//
// IMPORTANT : la numérotation exacte des épreuves (E1, E4, E5... ou U3, U4,
// U5...) varie selon les sources consultées après la réforme de juillet 2024,
// certaines n'ayant pas encore été mises à jour. Les BLOCS DE COMPÉTENCES et
// les MATIÈRES ci-dessous sont solidement attestés ; le champ `epreuve` est
// volontairement laissé indicatif — vérifie le libellé exact et le
// coefficient auprès de ton établissement / du référentiel PDF officiel
// avant de t'y fier pour ta stratégie de révision.
// ============================================================================

export const PROGRAMME_VERSIONS = [
  {
    id: '2025-2026',
    label: 'Programme 2025-2026',
    note: "Référentiel issu de l'arrêté du 8 juillet 2024, applicable depuis la session d'examen 2025."
  },
  {
    id: '2026-2027',
    label: 'Programme 2026-2027',
    note: "Aucune évolution officielle du référentiel n'est confirmée à ce jour pour cette session. Cette version est prête à recevoir les mises à jour dès qu'un texte officiel sera publié."
  }
];

export const DEFAULT_PROGRAMME_VERSION = '2025-2026';

// Blocs de compétences professionnels (communs aux deux options sauf mention contraire)
export const BLOCS = [
  {
    id: 'bloc1',
    nom: 'Bloc 1 — Support et mise à disposition de services informatiques',
    commun: true
  },
  {
    id: 'bloc2-slam',
    nom: "Bloc 2 (SLAM) — Conception et développement d'applications",
    commun: false,
    option: 'SLAM'
  },
  {
    id: 'bloc2-sisr',
    nom: 'Bloc 2 (SISR) — Administration des systèmes et réseaux',
    commun: false,
    option: 'SISR'
  },
  {
    id: 'bloc3',
    nom: 'Bloc 3 — Cybersécurité des services informatiques',
    commun: true
  }
];

// Matières — chaque matière référence un bloc quand elle est professionnelle.
export const MATIERES = [
  {
    id: 'slam-prog',
    nom: 'SLAM — Programmation & algorithmique',
    type: 'professionnelle',
    blocId: 'bloc2-slam',
    couleur: '#4C46D6'
  },
  {
    id: 'slam-bdd',
    nom: 'SLAM — Bases de données',
    type: 'professionnelle',
    blocId: 'bloc2-slam',
    couleur: '#2E7D6B'
  },
  {
    id: 'cejm',
    nom: 'Culture économique, juridique et managériale (CEJM)',
    type: 'générale',
    blocId: null,
    couleur: '#B5762B'
  },
  {
    id: 'anglais',
    nom: 'Anglais',
    type: 'générale',
    blocId: null,
    couleur: '#B5762B'
  },
  {
    id: 'maths',
    nom: "Mathématiques pour l'informatique",
    type: 'générale',
    blocId: null,
    couleur: '#B5762B'
  },
  {
    id: 'culture-generale',
    nom: 'Culture générale et expression',
    type: 'générale',
    blocId: null,
    couleur: '#B5762B'
  },
  {
    id: 'cybersecurite',
    nom: 'Cybersécurité',
    type: 'professionnelle',
    blocId: 'bloc3',
    couleur: '#C6483A'
  },
  {
    id: 'web',
    nom: 'Développement Web',
    type: 'professionnelle',
    blocId: 'bloc2-slam',
    couleur: '#D97706'
  },
  {
    id: 'gestion-projet',
    nom: 'Gestion de projet et Git',
    type: 'professionnelle',
    blocId: 'bloc2-slam',
    couleur: '#6B5CA5'
  }
];

export function getMatiere(id) {
  return MATIERES.find(m => m.id === id) || null;
}

export function getBloc(id) {
  return BLOCS.find(b => b.id === id) || null;
}

// Parcours structurés (chemins d'apprentissage progressifs à l'intérieur d'une matière)
export const PARCOURS = [
  {
    id: 'csharp',
    nom: '💻 Apprendre C#',
    matiereId: 'slam-prog',
    description: "Parcours progressif du débutant au niveau BTS, pensé pour renforcer les bases avant d'attaquer les exercices type examen.",
    niveaux: [
      { n: 1, nom: 'Débutant — variables, types, conditions' },
      { n: 2, nom: 'Boucles' },
      { n: 3, nom: 'Méthodes' },
      { n: 4, nom: 'Collections' },
      { n: 5, nom: 'Programmation orientée objet' },
      { n: 6, nom: 'C# avancé' },
      { n: 7, nom: 'C# + bases de données' },
      { n: 8, nom: 'Niveau BTS' }
    ]
  },
  {
    id: 'sql',
    nom: '🗄️ Apprendre SQL',
    matiereId: 'slam-bdd',
    description: 'Des fondamentaux (tables, clés) à la conception (MCD/MLD), en passant par les requêtes.',
    niveaux: [
      { n: 1, nom: 'Fondamentaux : tables, clés, contraintes' },
      { n: 2, nom: 'Interroger une table' },
      { n: 3, nom: 'Croiser plusieurs tables' },
      { n: 4, nom: 'Agréger et filtrer' },
      { n: 5, nom: 'Modifier les données' },
      { n: 6, nom: 'Requêtes avancées' },
      { n: 7, nom: "Conception d'une base de données" },
      { n: 8, nom: 'Fiabilité et transactions' }
    ]
  },
  {
    id: 'cejm',
    nom: '💼 CEJM',
    matiereId: 'cejm',
    description: "Culture économique, juridique et managériale — 6 thèmes nationaux communs à plusieurs BTS tertiaires.",
    niveaux: [
      { n: 1, nom: "Thème 1 — L'intégration de l'entreprise dans son environnement" },
      { n: 2, nom: "Thème 2 — La régulation de l'activité économique" },
      { n: 3, nom: "Thème 3 — L'organisation de l'entreprise" },
      { n: 4, nom: "Thème 4 — L'impact du numérique" },
      { n: 5, nom: "Thème 5 — Les mutations du travail" },
      { n: 6, nom: "Thème 6 — Les choix stratégiques" },
      { n: 7, nom: 'Méthodologie CEJM' }
    ]
  },
  {
    id: 'maths',
    nom: "📐 Mathématiques pour l'informatique",
    matiereId: 'maths',
    description: "Les modules de l'unité U21, en priorisant ceux qui reviennent le plus souvent à l'épreuve (logique booléenne, numération).",
    niveaux: [
      { n: 1, nom: 'Systèmes de numération (bases)' },
      { n: 2, nom: 'Calcul booléen et logique' },
      { n: 3, nom: 'Suites numériques' },
      { n: 4, nom: 'Graphes et ordonnancement' },
      { n: 5, nom: 'Calcul matriciel' },
      { n: 6, nom: 'Éléments de la théorie des ensembles' }
    ]
  },
  {
    id: 'anglais',
    nom: '🇬🇧 Anglais',
    matiereId: 'anglais',
    description: "Vocabulaire professionnel de l'informatique et bases grammaticales utiles pour lire la documentation technique et communiquer à l'écrit/l'oral.",
    niveaux: [
      { n: 1, nom: "Vocabulaire professionnel de l'informatique" },
      { n: 2, nom: 'Grammaire : les temps essentiels' },
      { n: 3, nom: "S'exprimer à l'oral (entretien, présentation)" }
    ]
  },
  {
    id: 'culture-generale',
    nom: '📖 Culture générale et expression',
    matiereId: 'culture-generale',
    description: "Méthodologie de l'analyse de corpus et de l'essai argumenté, et thème national de l'année (\"Le vrai du faux\", session 2027).",
    niveaux: [
      { n: 1, nom: "L'analyse de corpus" },
      { n: 2, nom: "L'essai argumenté" },
      { n: 3, nom: 'Thème 2026-2027 — Le vrai du faux' },
      { n: 4, nom: 'Expression écrite' }
    ]
  },
  {
    id: 'gestion-projet',
    nom: '🛠️ Gestion de projet et Git',
    matiereId: 'gestion-projet',
    description: "De Git aux méthodes agiles, pour organiser et versionner un projet SLAM comme en entreprise.",
    niveaux: [
      { n: 1, nom: 'Git : les bases' },
      { n: 2, nom: 'Git et GitHub' },
      { n: 3, nom: 'Branches et conflits' },
      { n: 4, nom: 'Travail collaboratif' },
      { n: 5, nom: 'Méthodes agiles' },
      { n: 6, nom: 'Cahier des charges et planning' }
    ]
  },
  {
    id: 'cybersecurite',
    nom: '🔐 Cybersécurité',
    matiereId: 'cybersecurite',
    description: "Bloc 3 du référentiel : protéger les données, sécuriser les usages et les applications développées.",
    niveaux: [
      { n: 1, nom: 'Menaces et principes de sécurité (DIC)' },
      { n: 2, nom: 'Identification, authentification et droits' },
      { n: 3, nom: 'Sécurité des données et des échanges' },
      { n: 4, nom: 'Sécurité des applications web' },
      { n: 5, nom: 'Sécurisation des équipements et des usages' },
      { n: 6, nom: 'Identité numérique' }
    ]
  },
  {
    id: 'web',
    nom: '🌐 Développement Web',
    matiereId: 'web',
    description: "De HTML/CSS à la communication client-serveur (HTTP, JSON, Fetch), pour construire une vraie application web.",
    niveaux: [
      { n: 1, nom: 'HTML' },
      { n: 2, nom: 'CSS' },
      { n: 3, nom: 'JavaScript' },
      { n: 4, nom: 'Web dynamique et API' },
      { n: 5, nom: 'Back-end' },
      { n: 6, nom: 'Sécurité web' },
      { n: 7, nom: 'Qualité et référencement' },
      { n: 8, nom: 'Projet web' }
    ]
  }
];

export function getParcours(id) {
  return PARCOURS.find(p => p.id === id) || null;
}
