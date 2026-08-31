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
    description: 'Modélisation et manipulation des données, du SELECT simple aux jointures.',
    niveaux: [
      { n: 1, nom: 'Interroger une table' },
      { n: 2, nom: 'Croiser plusieurs tables' },
      { n: 3, nom: 'Agréger et filtrer' },
      { n: 4, nom: 'Modifier les données' }
    ]
  }
];

export function getParcours(id) {
  return PARCOURS.find(p => p.id === id) || null;
}
