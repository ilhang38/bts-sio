# RéviSIO — Plateforme de révision BTS SIO SLAM

Site statique (HTML/CSS/JS, sans dépendance externe, sans étape de build) pour
réviser le BTS SIO avec une priorité sur la spécialité SLAM et sur C#.

## Ce qui est réellement implémenté dans cette v1

Le cahier des charges initial décrit une plateforme couvrant l'intégralité du
programme du BTS SIO. Le construire en entier représenterait plusieurs mois
de travail (rédaction de cours, banque de milliers d'exercices). Cette v1 est
volontairement **honnête sur son périmètre** : elle livre une architecture
complète et fonctionnelle, avec un contenu réel (pas du remplissage) sur un
sous-ensemble représentatif :

- **Parcours 💻 Apprendre C#** : leçons complètes pour les niveaux 1
  (variables, conditions), 2 (for, while/do-while), 3 (méthodes), 4
  (tableaux, List<T>, Dictionary), un avant-goût du niveau 5 (classes et
  objets), 6 (exceptions try/catch) et 7 (connexion à une base de données,
  requêtes paramétrées). Le niveau 8 ("niveau BTS") n'est pas une notion à
  part : c'est de la difficulté transversale, déjà présente via des
  exercices `difficulte: 'bts'` répartis sur plusieurs compétences
  (ex. `ex-csharp-methode-prog-bts-1`).
- **Parcours 🗄️ Apprendre SQL** : complet, les 4 niveaux prévus (SELECT,
  JOIN, GROUP BY/agrégats, INSERT/UPDATE/DELETE).
- **46 exercices** couvrant les 8 types demandés (QCM simple/multiple,
  vrai/faux, réponse courte, trouver l'erreur, corriger le code, compléter le
  code, lire le code, programmation), à plusieurs niveaux de difficulté.
- **Tous les moteurs fonctionnent réellement** sur ces données : suivi des
  erreurs, calcul de maîtrise par compétence, répétition espacée (façon
  Leitner), recommandations adaptatives, révision du jour, statistiques,
  examens blancs chronométrés, XP/niveaux/séries/badges — rien n'est simulé
  ou câblé en dur pour la démo, tout est calculé depuis `localStorage`.
- **CEJM, Anglais, Maths, Culture générale** : présentes dans le référentiel
  (`js/data/programme.js`) mais sans leçon pour l'instant → affichées comme
  "Contenu à venir", pas de fausses données.

## Limites connues (assumées, avec piste d'évolution)

- **Pas d'exécution réelle de code dans le navigateur.** Les exercices
  "programmation" et "corriger le code" font une **vérification structurelle**
  (présence de mots-clés/motifs attendus via des expressions régulières), pas
  une compilation C# réelle — c'est annoncé clairement à l'étudiant dans
  l'interface, et le corrigé complet est toujours affiché pour comparaison.
  Pour une vraie exécution plus tard, la piste la plus réaliste est un
  service d'exécution de code tiers (ex. Judge0, Piston) appelé en API depuis
  le front — cela demande un backend/une clé API, donc un choix délibéré à
  faire plus tard, pas ajouté ici pour garder le site 100% statique.
- **Pas de génération automatique de nouveaux exercices par IA.** Le moteur
  de recommandation (`js/engine/recommend.js`) fait de la **sélection
  intelligente** dans la banque existante (triée par compétence et
  difficulté croissante selon le score réel de l'étudiant), pas de la
  génération. La section 23 du cahier des charges ("IA / système d'aide")
  est un point d'extension prévu mais non branché : `js/engine/` est
  l'endroit naturel où ajouter un appel à une API d'IA plus tard (indice →
  explication → correction complète, comme demandé).
- **Numérotation des épreuves du BTS SIO.** L'arrêté du 8 juillet 2024
  (applicable depuis la session 2025) a fait évoluer la numérotation des
  épreuves professionnelles, et les sources publiques ne sont pas encore
  toutes alignées dessus. Les **blocs de compétences et matières** utilisés
  dans l'app sont solidement attestés ; la page "Objectif BTS" affiche un
  avertissement invitant à vérifier le libellé exact des épreuves auprès de
  l'établissement plutôt que d'inventer un numérotage qui pourrait être faux.
- **Progression 2025-2026 vs 2026-2027** : le sélecteur de version existe
  (`js/data/programme.js` → `PROGRAMME_VERSIONS`) et chaque leçon/exercice
  porte un champ `annees`, mais aucune différence officielle entre les deux
  sessions n'est confirmée à ce jour — la structure est prête à recevoir une
  mise à jour dès qu'un texte officiel sera publié.

## Architecture

```
index.html              Coquille de l'app (topbar, sidebar, zone #view)
css/style.css            Toute la présentation
js/
  app.js                 Routage (hash-based) + rendu de chaque page
  store.js                Persistance localStorage + calculs de progression
  data/
    programme.js          Métadonnées du référentiel (années, matières, blocs, parcours)
    lessons.js             Contenu des leçons
    exercises.js            Banque d'exercices
  engine/
    exerciseEngine.js      Rendu + correction des 8 types d'exercices
    recommend.js            Difficultés, progression par matière, recommandations
  components/
    codeEditor.js           Coloration syntaxique + éditeur de code (sans dépendance)
```

Le contenu pédagogique (`js/data/`) ne connaît rien de l'interface, et
l'interface (`js/app.js`, `css/`) ne contient aucun texte de cours — c'est ce
qui permet d'ajouter du contenu sans toucher au code, et inversement.

## Ajouter une leçon

Ouvrir `js/data/lessons.js` et ajouter un objet au tableau `LESSONS` :

```js
{
  id: 'csharp-n4-tableaux',              // unique, kebab-case
  matiere: 'slam-prog',                   // doit exister dans MATIERES (programme.js)
  parcoursId: 'csharp',                   // doit exister dans PARCOURS (programme.js)
  niveau: 4, ordre: 1,                    // position dans le parcours
  titre: 'Les tableaux',
  competence: 'csharp.tableaux',          // tag utilisé pour le suivi de maîtrise — un par notion
  difficulte: 'moyen',                    // facile | moyen | difficile | bts
  annees: ['2025-2026', '2026-2027'],
  objectif: '...', explication: ['§1', '§2'], aRetenir: ['...'],
  exemple: { langage: 'csharp', code: '...' },
  exempleExplique: ['...'], erreursFrequentes: ['...'], astuce: '...',
  exercicesIds: ['ex-...', 'ex-...']      // 2 à 3 exercices liés (voir ci-dessous)
}
```

## Ajouter un exercice

Dans `js/data/exercises.js`, ajouter un objet à `EXERCISES`. Champs communs à
tous les types : `id`, `matiere`, `chapitre` (id de leçon ou `null`),
`competence`, `langage` (`'csharp'`, `'sql'` ou `null`), `difficulte`, `type`,
`enonce`, `annees`, `explication`. Puis, selon `type` :

| type              | champs spécifiques |
|-------------------|--------------------|
| `qcm`              | `multiple` (bool), `options: [{id, texte}]`, `correctes: [id...]` |
| `vrai-faux`        | `correct` (bool) |
| `reponse-courte`   | `reponsesAcceptees: [string...]` |
| `lire-code`        | `code`, `question`, `reponsesAcceptees` |
| `trouver-erreur`   | `code`, `ligneErreur` (numéro de ligne, 1-indexé) |
| `completer-code`   | `template` (avec `{{1}}`, `{{2}}`...), `trous: [{id, accepte:[...]}]` |
| `corriger-code`    | `codeInitial`, `solution`, `verif: [{regex, label}]` |
| `programmation`    | `codeDepart`, `solution`, `criteres: [{regex, label}]` |

Aucune inscription ailleurs n'est nécessaire : les filtres de la page
Exercices, les compétences suivies dans "Mes difficultés" et le moteur de
recommandation lisent tous directement ce tableau.

## Ajouter une matière ou un parcours

Tout se passe dans `js/data/programme.js` (`MATIERES`, `PARCOURS`, `BLOCS`).
Une matière sans leçon associée s'affiche automatiquement comme "Contenu à
venir" — jamais de contenu inventé pour combler le vide.

## Déploiement sur GitHub Pages

1. Créer un dépôt (ou un dossier dans un dépôt existant) et y copier tout le
   contenu de ce dossier tel quel.
2. Dans les paramètres du dépôt → Pages, choisir la branche et le dossier
   racine (`/`).
3. C'est tout : aucune étape de build, le site est déjà prêt à être servi
   (routage 100% côté client via `location.hash`, donc pas de souci de 404
   sur les liens profonds).

La progression de l'étudiant est stockée uniquement dans le `localStorage`
de son navigateur (rien n'est envoyé à un serveur) — elle est donc propre à
un appareil/navigateur donné, sans compte ni synchronisation.
