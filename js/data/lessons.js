// ============================================================================
// lessons.js — Contenu pédagogique (leçons)
// ----------------------------------------------------------------------------
// Chaque leçon suit la structure imposée : Objectif / Explication / À retenir /
// Exemple / Exemple expliqué / Erreurs fréquentes / Astuce / Exercices.
//
// ⚠️ CONTENU RÉEL, PAS UN PLACEHOLDER — couvre désormais le parcours C#
// niveaux 1 à 4 (débutant → collections), un avant-goût des niveaux 6
// (exceptions) et 7 (C# + bases de données), et le parcours SQL complet
// (niveaux 1 à 4). Les niveaux C# 5 (POO, un avant-goût seulement) et 8
// (niveau BTS, couvert par des exercices `difficulte: 'bts'` répartis sur
// plusieurs compétences plutôt qu'une leçon dédiée) restent partiels. Voir
// README.md pour la marche à suivre pour compléter le reste du programme
// sans toucher au code de l'interface.
//
// Schéma d'une leçon :
// {
//   id, matiere, parcoursId, niveau, ordre, titre, competence, difficulte,
//   annees: [...], objectif, explication: [paragraphes...],
//   aRetenir: [points...], exemple: { langage, code },
//   exempleExplique: [paragraphes...], erreursFrequentes: [points...],
//   astuce, exercicesIds: [...]
// }
// ============================================================================

export const LESSONS = [
  // ---------------------------------------------------------------- C# N1 --
  {
    id: 'csharp-n1-variables',
    matiere: 'slam-prog',
    parcoursId: 'csharp',
    niveau: 1,
    ordre: 1,
    titre: 'Les variables et les types de données',
    competence: 'csharp.variables',
    difficulte: 'facile',
    annees: ['2025-2026', '2026-2027'],
    objectif: 'Comprendre ce qu\'est une variable, savoir choisir le bon type et déclarer une variable correctement en C#.',
    explication: [
      "Une variable, c'est une boîte étiquetée dans la mémoire de l'ordinateur : elle a un nom, elle contient une valeur, et cette valeur peut changer au cours du programme.",
      "En C#, contrairement à certains langages, on doit annoncer dès le départ QUEL TYPE de donnée la boîte va contenir : un nombre entier, un nombre à virgule, du texte, un booléen (vrai/faux)... C'est ce qu'on appelle le typage statique.",
      "Les types de base à connaître : `int` (nombre entier, ex: 12, -5), `double` (nombre décimal, ex: 3.14), `string` (texte, toujours entre guillemets doubles), `bool` (vrai/faux, uniquement `true` ou `false`), `char` (un seul caractère, entre guillemets simples, ex: 'A').",
      "Déclarer une variable, c'est écrire : `type nomDeLaVariable = valeur;`. Le point-virgule à la fin est obligatoire, c'est lui qui dit à C# \"cette instruction est terminée\"."
    ],
    aRetenir: [
      '`int` = entier, `double` = décimal, `string` = texte, `bool` = vrai/faux, `char` = un caractère',
      'Syntaxe : type nom = valeur ;',
      'Un texte est toujours entre guillemets doubles " ", un caractère entre guillemets simples \' \'',
      "Le nom d'une variable ne peut pas commencer par un chiffre et ne doit pas contenir d'espace (on utilise le camelCase : `ageEtudiant`)",
      'On peut convertir un type en un autre : `Convert.ToInt32(texte)`, `Convert.ToString(nombre)`, `Convert.ToDouble(texte)`'
    ],
    exemple: {
      langage: 'csharp',
      code:
`int age = 19;
double moyenne = 14.5;
string prenom = "Ilhan";
bool aValideBTS1 = true;

Console.WriteLine(prenom + " a " + age + " ans.");
Console.WriteLine("Moyenne : " + moyenne);`
    },
    exempleExplique: [
      "Ligne 1 : on crée une variable `age` de type `int` (entier) et on lui donne la valeur 19.",
      "Ligne 2 : `moyenne` est un `double` car une moyenne a des décimales.",
      "Ligne 3 : `prenom` est un `string`, donc la valeur est entre guillemets doubles.",
      "Ligne 4 : `aValideBTS1` est un `bool`, sa valeur est `true` sans guillemets (ce n'est pas du texte, c'est un mot-clé du langage).",
      "Ligne 6-7 : `Console.WriteLine` affiche du texte dans la console. Le symbole `+` entre un texte et une variable colle les deux ensemble (on appelle ça la concaténation)."
    ],
    erreursFrequentes: [
      'Oublier le point-virgule à la fin de la ligne → erreur de compilation.',
      'Mettre un texte sans guillemets : `string ville = Paris;` est une erreur, il faut `"Paris"`.',
      'Confondre `=` (affectation, "je mets cette valeur dans la variable") et `==` (comparaison, "est-ce que c\'est égal ?"), utilisée plus tard dans les conditions.',
      "Déclarer une variable `int` et essayer d'y mettre un nombre à virgule (`int prix = 19.99;`) → erreur, il faut `double`."
    ],
    astuce: "Pour choisir le type, pose-toi la question : est-ce que ça peut avoir une virgule (double), est-ce du texte même court (string), est-ce que ça ne peut être que oui/non (bool) ? Dans le doute entre int et double, si tu ne sais pas si un jour il y aura une décimale (ex : une moyenne, un prix), pars sur `double`.",
    exercicesIds: ['ex-csharp-var-qcm-1', 'ex-csharp-var-vf-1', 'ex-csharp-var-completer-1']
  },
  {
    id: 'csharp-n1-conditions',
    matiere: 'slam-prog',
    parcoursId: 'csharp',
    niveau: 1,
    ordre: 2,
    titre: 'Les conditions : if, else, else if, switch',
    competence: 'csharp.conditions',
    difficulte: 'facile',
    annees: ['2025-2026', '2026-2027'],
    objectif: "Savoir faire exécuter un bloc de code seulement si une condition est vraie, et gérer plusieurs cas possibles.",
    explication: [
      "Une condition permet à un programme de prendre une décision : \"SI telle chose est vraie, ALORS je fais ceci, SINON je fais autre chose\".",
      "En C#, la syntaxe de base est : `if (condition) { instructions }`. Les parenthèses contiennent une expression qui vaut `true` ou `false`. Les accolades délimitent le bloc de code à exécuter.",
      "On peut enchaîner avec `else` (sinon) pour définir ce qui se passe quand la condition est fausse, et `else if` pour tester une deuxième condition si la première est fausse.",
      "Les opérateurs de comparaison utilisés dans les conditions : `==` (égal à), `!=` (différent de), `>` (supérieur), `<` (inférieur), `>=` (supérieur ou égal), `<=` (inférieur ou égal). On peut combiner plusieurs conditions avec `&&` (ET logique) et `||` (OU logique).",
      "Quand on doit comparer une même variable à beaucoup de valeurs possibles, `switch` est souvent plus lisible qu'une longue suite de `else if`."
    ],
    aRetenir: [
      'if (condition) { ... } else { ... }',
      '`==` compare, `=` affecte — ne jamais les confondre',
      '`&&` = ET (les deux doivent être vraies), `||` = OU (au moins une doit être vraie)',
      'switch (variable) { case valeur: ... break; default: ... }',
      "Ne pas oublier `break;` à la fin de chaque `case`, sinon l'exécution continue dans le cas suivant."
    ],
    exemple: {
      langage: 'csharp',
      code:
`int note = 14;

if (note >= 16)
{
    Console.WriteLine("Félicitations, mention !");
}
else if (note >= 10)
{
    Console.WriteLine("Admis(e).");
}
else
{
    Console.WriteLine("Non admis(e).");
}`
    },
    exempleExplique: [
      "La première condition testée est `note >= 16`. Comme `note` vaut 14, c'est faux : on passe à la suivante.",
      "`else if (note >= 10)` : 14 est bien supérieur ou égal à 10, donc c'est vrai. Le programme affiche \"Admis(e).\" et s'arrête là, il ne regarde même pas le `else`.",
      "Le `else` final ne s'exécute que si AUCUNE des conditions précédentes n'était vraie."
    ],
    erreursFrequentes: [
      'Écrire `if (note = 10)` au lieu de `if (note == 10)` : un seul `=` affecte la valeur au lieu de la comparer, et ne compile même pas pour un `bool` attendu.',
      "Oublier que dans un `if / else if / else`, dès qu'une condition est vraie, les suivantes ne sont plus testées.",
      "Dans un `switch`, oublier `break;` : le code du `case` suivant s'exécute aussi (comportement souvent non voulu, sauf si fait exprès)."
    ],
    astuce: "Pour ne pas confondre `=` et `==`, dis-toi que `=` c'est une flèche qui donne une valeur (\"je donne 10 à note\"), et `==` c'est une balance qui compare (\"est-ce que note pèse la même chose que 10 ?\").",
    exercicesIds: ['ex-csharp-cond-qcm-1', 'ex-csharp-cond-erreur-1', 'ex-csharp-cond-lire-1']
  },

  // ---------------------------------------------------------------- C# N2 --
  {
    id: 'csharp-n2-boucle-for',
    matiere: 'slam-prog',
    parcoursId: 'csharp',
    niveau: 2,
    ordre: 1,
    titre: 'La boucle for',
    competence: 'csharp.boucles.for',
    difficulte: 'moyen',
    annees: ['2025-2026', '2026-2027'],
    objectif: "Savoir répéter une instruction un nombre de fois connu à l'avance grâce à la boucle for.",
    explication: [
      "Une boucle sert à répéter un bloc d'instructions sans avoir à les recopier. La boucle `for` est utilisée quand on connaît (ou qu'on peut calculer) le nombre de répétitions à l'avance.",
      "Syntaxe : `for (initialisation; condition; incrémentation) { instructions }`.",
      "L'initialisation ne s'exécute qu'une seule fois, au tout début (en général on crée un compteur : `int i = 0`). La condition est vérifiée AVANT chaque tour de boucle : tant qu'elle est vraie, la boucle continue. L'incrémentation s'exécute APRÈS chaque tour (souvent `i++`, qui veut dire \"ajoute 1 à i\").",
      "Le déroulé exact pour `for (int i = 0; i < 5; i++)` : i vaut 0 → on entre dans la boucle → à la fin du tour, i devient 1 → on revérifie la condition → etc., jusqu'à ce que i vaille 5 (la condition devient fausse, on sort)."
    ],
    aRetenir: [
      'for (int i = 0; i < n; i++) { ... } exécute le bloc n fois (i prend les valeurs 0, 1, ..., n-1)',
      '`i++` équivaut à `i = i + 1`',
      "La condition est testée AVANT chaque tour, pas après",
      "Une boucle peut être imbriquée dans une autre (boucle dans une boucle) pour parcourir par exemple un tableau à deux dimensions"
    ],
    exemple: {
      langage: 'csharp',
      code:
`for (int i = 1; i <= 5; i++)
{
    Console.WriteLine("Tour numéro " + i);
}`
    },
    exempleExplique: [
      "`int i = 1` : on crée le compteur i et on part de 1 (et non de 0, car on veut afficher \"Tour numéro 1\" en premier).",
      "`i <= 5` : la boucle continue tant que i est inférieur ou égal à 5.",
      "`i++` : après chaque affichage, i augmente de 1.",
      "Résultat affiché : Tour numéro 1, Tour numéro 2, Tour numéro 3, Tour numéro 4, Tour numéro 5 — puis la boucle s'arrête car i vaudrait 6, et 6 <= 5 est faux."
    ],
    erreursFrequentes: [
      "Erreur du décalage de 1 (\"off-by-one\") : utiliser `i <= n` alors qu'on voulait n répétitions en partant de 0 (dans ce cas c'est `i < n` qu'il faut).",
      "Modifier la variable de boucle `i` à l'intérieur du bloc : ça casse le comptage et peut créer une boucle infinie.",
      "Oublier que la boucle `for` classique ne fonctionne bien que si le nombre de répétitions est connu ou calculable — sinon, `while` est plus adapté (voir la leçon suivante)."
    ],
    astuce: "Pour ne plus te tromper entre `i < n` et `i <= n`, retiens : si tu veux exactement n répétitions en partant de i = 0, utilise `i < n`. Si tu pars de i = 1 et veux aller jusqu'à n inclus, utilise `i <= n`.",
    exercicesIds: ['ex-csharp-for-qcm-1', 'ex-csharp-for-completer-1', 'ex-csharp-for-prog-1']
  },
  {
    id: 'csharp-n2-while',
    matiere: 'slam-prog',
    parcoursId: 'csharp',
    niveau: 2,
    ordre: 2,
    titre: 'Les boucles while et do...while',
    competence: 'csharp.boucles.while',
    difficulte: 'moyen',
    annees: ['2025-2026', '2026-2027'],
    objectif: "Savoir répéter un bloc d'instructions tant qu'une condition est vraie, quand le nombre de répétitions n'est pas connu à l'avance.",
    explication: [
      "`while` répète un bloc TANT QUE une condition reste vraie. Contrairement au `for`, on ne sait pas forcément à l'avance combien de tours il y aura.",
      "Syntaxe : `while (condition) { instructions }`. La condition est vérifiée AVANT chaque tour : si elle est fausse dès le début, le bloc ne s'exécute jamais.",
      "`do { instructions } while (condition);` fonctionne presque pareil, mais la condition est vérifiée APRÈS le bloc : le bloc s'exécute donc TOUJOURS au moins une fois, même si la condition est fausse dès le départ. C'est très utile pour demander une saisie à l'utilisateur au moins une fois (par exemple un menu).",
      "Il faut impérativement que quelque chose, à l'intérieur de la boucle, finisse par rendre la condition fausse — sinon on obtient une boucle infinie qui bloque le programme."
    ],
    aRetenir: [
      'while (condition) { ... } : condition vérifiée avant, peut ne jamais s\'exécuter',
      'do { ... } while (condition); : condition vérifiée après, s\'exécute au moins une fois',
      'Toujours vérifier qu\'une variable utilisée dans la condition est modifiée dans le bloc',
      'while est adapté quand on ne connaît pas le nombre de répétitions à l\'avance (ex : demander une saisie jusqu\'à ce qu\'elle soit valide)'
    ],
    exemple: {
      langage: 'csharp',
      code:
`int code;
do
{
    Console.WriteLine("Entrez le code (1234) :");
    code = Convert.ToInt32(Console.ReadLine());
}
while (code != 1234);

Console.WriteLine("Code correct !");`
    },
    exempleExplique: [
      "Le bloc `do { ... }` s'exécute une première fois quoi qu'il arrive : on demande le code à l'utilisateur.",
      "`while (code != 1234)` : tant que ce que l'utilisateur a tapé est différent de 1234, on recommence — on redemande le code.",
      "Dès que l'utilisateur tape 1234, la condition devient fausse, la boucle s'arrête, et \"Code correct !\" s'affiche."
    ],
    erreursFrequentes: [
      "Oublier de faire évoluer la variable testée dans la condition → boucle infinie qui bloque le programme.",
      "Utiliser `while` alors qu'on connaît déjà le nombre exact de répétitions (dans ce cas, `for` est plus lisible).",
      "Confondre `do...while` et `while` : avec `do...while`, le bloc s'exécute TOUJOURS au moins une fois, même si la condition est fausse dès le départ."
    ],
    astuce: "Avant d'écrire une boucle `while`, demande-toi toujours : \"Qu'est-ce qui, dans mon bloc, va un jour rendre cette condition fausse ?\" Si tu ne sais pas répondre, ta boucle risque d'être infinie.",
    exercicesIds: ['ex-csharp-while-vf-1', 'ex-csharp-while-erreur-1']
  },

  // ---------------------------------------------------------------- C# N3 --
  {
    id: 'csharp-n3-methodes',
    matiere: 'slam-prog',
    parcoursId: 'csharp',
    niveau: 3,
    ordre: 1,
    titre: 'Créer et utiliser des méthodes',
    competence: 'csharp.methodes',
    difficulte: 'moyen',
    annees: ['2025-2026', '2026-2027'],
    objectif: "Savoir écrire une méthode réutilisable, avec des paramètres et une valeur de retour, pour éviter de dupliquer du code.",
    explication: [
      "Une méthode est un bloc de code nommé, qu'on peut appeler (exécuter) autant de fois qu'on veut depuis différents endroits du programme. Elle évite de recopier le même code plusieurs fois.",
      "Syntaxe générale : `typeDeRetour NomDeLaMethode(type param1, type param2) { instructions return valeur; }`.",
      "Si la méthode ne renvoie rien, son type de retour est `void` (et il n'y a pas de `return valeur;`, ou juste `return;` pour sortir plus tôt).",
      "Les paramètres sont les informations qu'on donne à la méthode entre parenthèses au moment de l'appel. Une variable créée à l'intérieur d'une méthode (y compris ses paramètres) n'existe QUE dans cette méthode : c'est sa portée (scope)."
    ],
    aRetenir: [
      'static double NomMethode(double a, double b) { return a + b; }',
      "`void` = la méthode ne renvoie aucune valeur",
      "`return` arrête immédiatement la méthode et renvoie une valeur à l'endroit où elle a été appelée",
      "Une méthode peut avoir plusieurs paramètres, séparés par des virgules",
      "Une variable déclarée dans une méthode n'existe que dans cette méthode (portée locale)"
    ],
    exemple: {
      langage: 'csharp',
      code:
`static double CalculerMoyenne(double note1, double note2)
{
    double moyenne = (note1 + note2) / 2;
    return moyenne;
}

static void Main()
{
    double resultat = CalculerMoyenne(12, 16);
    Console.WriteLine("Moyenne : " + resultat);
}`
    },
    exempleExplique: [
      "`CalculerMoyenne` prend deux paramètres `note1` et `note2`, tous les deux de type `double`.",
      "À l'intérieur, une variable locale `moyenne` est calculée, puis renvoyée grâce à `return moyenne;`.",
      "Dans `Main`, l'appel `CalculerMoyenne(12, 16)` déclenche l'exécution de la méthode avec note1 = 12 et note2 = 16 ; la valeur renvoyée (14) est stockée dans `resultat`.",
      "Le type de retour annoncé (`double`) doit correspondre au type de ce qui est réellement renvoyé par `return`."
    ],
    erreursFrequentes: [
      "Déclarer une méthode `double` mais oublier le `return` → erreur de compilation (\"not all code paths return a value\").",
      "Vouloir utiliser à l'extérieur une variable qui a été déclarée à l'intérieur d'une méthode → elle n'existe plus, erreur de compilation.",
      "Se tromper dans l'ordre ou le type des arguments passés à l'appel par rapport aux paramètres attendus."
    ],
    astuce: "Écris toujours la signature de ta méthode en premier (type de retour, nom, paramètres) et demande-toi \"qu'est-ce que je reçois, qu'est-ce que je dois renvoyer ?\" avant même d'écrire le corps de la méthode.",
    exercicesIds: ['ex-csharp-methode-completer-1', 'ex-csharp-methode-prog-1', 'ex-csharp-methode-qcm-1']
  },

  // ---------------------------------------------------------------- C# N5 --
  {
    id: 'csharp-n5-classes',
    matiere: 'slam-prog',
    parcoursId: 'csharp',
    niveau: 5,
    ordre: 1,
    titre: 'Les classes et les objets',
    competence: 'csharp.poo.classes',
    difficulte: 'difficile',
    annees: ['2025-2026', '2026-2027'],
    objectif: "Comprendre la différence entre une classe et un objet, et savoir créer une classe avec attributs, constructeur et méthodes.",
    explication: [
      "Une classe est un plan, un modèle : elle décrit quelles informations (attributs) et quels comportements (méthodes) auront les objets créés à partir d'elle. Un objet est une instance concrète de cette classe.",
      "Analogie : la classe `Voiture` est le plan de fabrication ; chaque voiture qui sort de l'usine (avec sa propre couleur, son propre kilométrage) est un objet, une instance de cette classe.",
      "On déclare les attributs (les données de l'objet) et les méthodes (ce que l'objet sait faire) à l'intérieur de la classe. Le constructeur est une méthode spéciale, portant le même nom que la classe, exécutée automatiquement à la création d'un objet avec `new`.",
      "L'encapsulation consiste à rendre les attributs `private` (accessibles uniquement depuis l'intérieur de la classe) et à fournir des méthodes ou propriétés `public` pour les lire ou les modifier de façon contrôlée."
    ],
    aRetenir: [
      "classe = modèle, objet = instance créée avec `new NomClasse(...)`",
      "Un attribut décrit une donnée de l'objet, une méthode décrit une action possible",
      "Le constructeur porte le même nom que la classe et sert à initialiser les attributs",
      "`private` = accessible seulement dans la classe, `public` = accessible de partout (encapsulation)",
      "On accède aux membres d'un objet avec un point : `monObjet.MaMethode()`"
    ],
    exemple: {
      langage: 'csharp',
      code:
`class Etudiant
{
    private string nom;
    private double moyenne;

    public Etudiant(string nom, double moyenne)
    {
        this.nom = nom;
        this.moyenne = moyenne;
    }

    public bool EstAdmis()
    {
        return moyenne >= 10;
    }
}

// Utilisation :
Etudiant e1 = new Etudiant("Ilhan", 13.5);
Console.WriteLine(e1.EstAdmis());`
    },
    exempleExplique: [
      "`private string nom;` et `private double moyenne;` sont les attributs de la classe : chaque objet `Etudiant` aura son propre nom et sa propre moyenne.",
      "Le constructeur `public Etudiant(string nom, double moyenne)` porte le même nom que la classe. `this.nom = nom;` veut dire \"l'attribut nom DE CET OBJET reçoit la valeur du paramètre nom\" — le `this` sert à distinguer l'attribut du paramètre qui porte le même nom.",
      "`EstAdmis()` est une méthode publique qui renvoie `true` ou `false` selon la moyenne de l'objet.",
      "`new Etudiant(\"Ilhan\", 13.5)` crée un objet concret : le constructeur s'exécute avec nom = \"Ilhan\" et moyenne = 13.5. Ensuite `e1.EstAdmis()` appelle la méthode sur cet objet précis."
    ],
    erreursFrequentes: [
      "Oublier `this.` quand le paramètre du constructeur porte le même nom que l'attribut : `nom = nom;` sans `this.` ne fait rien (le paramètre s'affecte à lui-même).",
      "Rendre tous les attributs `public` par facilité, ce qui casse l'encapsulation et permet de mettre des valeurs incohérentes depuis l'extérieur.",
      "Confondre la classe (le plan, écrit une fois) et l'objet (créé autant de fois que nécessaire avec `new`)."
    ],
    astuce: "Pour vérifier que tu as compris la différence classe/objet, essaie de repérer dans ton énoncé BTS le mot \"chaque\" : \"chaque client a un nom et un solde\" → c'est la classe qui décrit ça, et il y aura un objet PAR client réel.",
    exercicesIds: ['ex-csharp-classes-qcm-1', 'ex-csharp-classes-lire-1']
  },

  // ------------------------------------------------------------------ SQL --
  {
    id: 'sql-n1-select',
    matiere: 'slam-bdd',
    parcoursId: 'sql',
    niveau: 1,
    ordre: 1,
    titre: 'La requête SELECT',
    competence: 'sql.select',
    difficulte: 'facile',
    annees: ['2025-2026', '2026-2027'],
    objectif: "Savoir écrire une requête SELECT pour extraire des données d'une table, avec filtre et tri.",
    explication: [
      "`SELECT` est l'instruction SQL qui permet d'extraire des données d'une ou plusieurs tables d'une base de données.",
      "Structure de base : `SELECT colonnes FROM table WHERE condition ORDER BY colonne;`. On peut utiliser `*` pour sélectionner toutes les colonnes.",
      "`WHERE` filtre les lignes selon une condition (comme un `if` mais appliqué à chaque ligne de la table). On y retrouve les mêmes opérateurs qu'en programmation : `=`, `<>` (différent en SQL), `>`, `<`, `AND`, `OR`.",
      "`ORDER BY colonne ASC` (croissant, par défaut) ou `ORDER BY colonne DESC` (décroissant) trie le résultat."
    ],
    aRetenir: [
      'SELECT colonne1, colonne2 FROM table;',
      'WHERE condition filtre les lignes AVANT affichage',
      "En SQL, l'égalité s'écrit `=` (un seul signe, pas `==`), et la différence `<>` ou `!=` selon les SGBD",
      'ORDER BY colonne DESC trie du plus grand au plus petit',
      "Les valeurs texte sont entre guillemets simples ('Paris'), pas doubles"
    ],
    exemple: {
      langage: 'sql',
      code:
`SELECT nom, prenom, moyenne
FROM etudiant
WHERE moyenne >= 10
ORDER BY moyenne DESC;`
    },
    exempleExplique: [
      "On sélectionne uniquement trois colonnes (`nom`, `prenom`, `moyenne`) de la table `etudiant`, pas toutes.",
      "`WHERE moyenne >= 10` : seules les lignes des étudiants ayant une moyenne supérieure ou égale à 10 sont conservées.",
      "`ORDER BY moyenne DESC` : le résultat est trié du meilleur au moins bon."
    ],
    erreursFrequentes: [
      "Utiliser des guillemets doubles pour une valeur texte (\"Paris\") au lieu de guillemets simples ('Paris').",
      "Oublier le point-virgule à la fin de la requête.",
      "Mettre `ORDER BY` avant `WHERE` : l'ordre des clauses en SQL est fixe (SELECT ... FROM ... WHERE ... ORDER BY ...)."
    ],
    astuce: "Pense à SQL comme une phrase qui se lit presque en français : \"SELECT (choisis) ces colonnes FROM (depuis) cette table WHERE (là où) cette condition est vraie ORDER BY (trié par) cette colonne\".",
    exercicesIds: ['ex-sql-select-qcm-1', 'ex-sql-select-completer-1', 'ex-sql-select-lire-1']
  },
  {
    id: 'sql-n2-jointures',
    matiere: 'slam-bdd',
    parcoursId: 'sql',
    niveau: 2,
    ordre: 1,
    titre: 'Les jointures (JOIN)',
    competence: 'sql.join',
    difficulte: 'moyen',
    annees: ['2025-2026', '2026-2027'],
    objectif: "Comprendre pourquoi on a besoin des jointures et savoir écrire une requête avec INNER JOIN.",
    explication: [
      "Dans une base de données bien conçue, l'information est répartie sur plusieurs tables reliées par des clés étrangères (par exemple une table `commande` qui référence un `id_client` de la table `client`). Une jointure permet de recombiner ces informations dans une seule requête.",
      "`INNER JOIN` (souvent écrit juste `JOIN`) associe les lignes de deux tables quand une condition d'égalité entre leurs colonnes est vraie — en général entre une clé primaire et une clé étrangère.",
      "Syntaxe : `SELECT ... FROM tableA INNER JOIN tableB ON tableA.cle = tableB.cle_etrangere;`.",
      "Avec `INNER JOIN`, seules les lignes qui trouvent une correspondance dans les deux tables apparaissent dans le résultat. Une commande sans client associé, par exemple, ne serait pas affichée."
    ],
    aRetenir: [
      'INNER JOIN associe deux tables via une condition ON (souvent clé primaire = clé étrangère)',
      "Sans jointure, on ne peut afficher que les colonnes d'UNE seule table à la fois",
      "On peut préfixer une colonne par le nom de sa table pour lever toute ambiguïté : `client.nom`",
      "GROUP BY sert à regrouper des lignes pour calculer des agrégats (COUNT, SUM, AVG...) par groupe, et HAVING filtre APRÈS ce regroupement (alors que WHERE filtre avant)"
    ],
    exemple: {
      langage: 'sql',
      code:
`SELECT client.nom, commande.date_commande, commande.montant
FROM client
INNER JOIN commande ON client.id_client = commande.id_client
WHERE commande.montant > 100;`
    },
    exempleExplique: [
      "`FROM client INNER JOIN commande` : on combine les deux tables.",
      "`ON client.id_client = commande.id_client` : la condition de jointure — pour chaque commande, on va chercher le client dont l'identifiant correspond.",
      "`WHERE commande.montant > 100` s'applique après la jointure, sur le résultat combiné.",
      "Le résultat affiche le nom du client à côté de chacune de ses commandes de plus de 100, alors que ces informations viennent de deux tables différentes."
    ],
    erreursFrequentes: [
      "Oublier la clause `ON` : sans elle (ou avec une jointure implicite mal maîtrisée), on obtient un produit cartésien — toutes les combinaisons possibles, y compris celles qui n'ont aucun sens.",
      "Confondre clé primaire (identifiant unique d'une table) et clé étrangère (référence vers la clé primaire d'une autre table).",
      "Utiliser HAVING pour filtrer une condition qui ne dépend pas d'un agrégat — dans ce cas c'est WHERE qu'il faut utiliser, HAVING ne sert qu'après un GROUP BY."
    ],
    astuce: "Avant d'écrire une jointure, dessine (même sur un brouillon) les deux tables et trace une flèche de la clé étrangère vers la clé primaire qu'elle référence : ta clause ON, c'est exactement cette flèche traduite en SQL.",
    exercicesIds: ['ex-sql-join-qcm-1', 'ex-sql-join-erreur-1']
  },
  {
    id: 'sql-n3-agregats',
    matiere: 'slam-bdd',
    parcoursId: 'sql',
    niveau: 3,
    ordre: 1,
    titre: "Les fonctions d'agrégation et GROUP BY",
    competence: 'sql.groupby',
    difficulte: 'moyen',
    annees: ['2025-2026', '2026-2027'],
    objectif: 'Savoir utiliser les fonctions d\'agrégation (COUNT, SUM, AVG...) et regrouper des lignes avec GROUP BY.',
    explication: [
      "Une fonction d'agrégation calcule une seule valeur à partir de plusieurs lignes : `COUNT(*)` compte les lignes, `SUM(colonne)` additionne, `AVG(colonne)` calcule une moyenne, `MIN`/`MAX` donnent la plus petite/grande valeur.",
      "Utilisées seules, ces fonctions calculent sur TOUTE la table. `GROUP BY colonne` permet de calculer ces agrégats PAR GROUPE : par exemple, le nombre de commandes PAR client plutôt que le nombre total de commandes.",
      "Règle importante : dans un SELECT avec GROUP BY, chaque colonne affichée doit soit être dans le GROUP BY, soit être le résultat d'une fonction d'agrégation.",
      "Pour filtrer sur le RÉSULTAT d'un agrégat (par exemple, uniquement les clients ayant plus de 3 commandes), `WHERE` ne fonctionne pas (il filtre avant le regroupement) : il faut `HAVING`, qui filtre APRÈS le GROUP BY."
    ],
    aRetenir: [
      'COUNT(*), SUM(colonne), AVG(colonne), MIN(colonne), MAX(colonne)',
      'GROUP BY colonne calcule les agrégats par groupe, pas sur toute la table',
      'Toute colonne du SELECT doit être dans le GROUP BY ou dans une fonction d\'agrégation',
      'WHERE filtre AVANT le regroupement, HAVING filtre APRÈS (sur le résultat de l\'agrégat)'
    ],
    exemple: {
      langage: 'sql',
      code:
`SELECT id_client, COUNT(*) AS nombre_commandes
FROM commande
GROUP BY id_client
HAVING COUNT(*) > 3;`
    },
    exempleExplique: [
      "`GROUP BY id_client` regroupe toutes les lignes de la table `commande` par client.",
      "`COUNT(*)` compte, pour chaque groupe (chaque client), le nombre de commandes associées.",
      "`AS nombre_commandes` donne un nom lisible à cette colonne calculée.",
      "`HAVING COUNT(*) > 3` ne garde que les clients dont le nombre de commandes dépasse 3 — un filtre appliqué après le comptage, donc HAVING et non WHERE."
    ],
    erreursFrequentes: [
      "Utiliser `WHERE COUNT(*) > 3` au lieu de `HAVING` : erreur, car WHERE s'exécute avant que les groupes et leurs agrégats existent.",
      "Afficher une colonne qui n'est ni dans le GROUP BY ni dans une fonction d'agrégation : le SGBD ne sait pas quelle valeur choisir parmi celles du groupe.",
      "Confondre `COUNT(*)` (compte toutes les lignes) et `COUNT(colonne)` (ignore les lignes où colonne est NULL)."
    ],
    astuce: "Pose-toi la question dans l'ordre où SQL traite réellement une requête : FROM, puis WHERE (filtre les lignes), puis GROUP BY (regroupe), puis HAVING (filtre les groupes), enfin SELECT et ORDER BY.",
    exercicesIds: ['ex-sql-groupby-qcm-1', 'ex-sql-groupby-completer-1']
  },
  {
    id: 'sql-n4-modification',
    matiere: 'slam-bdd',
    parcoursId: 'sql',
    niveau: 4,
    ordre: 1,
    titre: 'INSERT, UPDATE, DELETE',
    competence: 'sql.dml',
    difficulte: 'moyen',
    annees: ['2025-2026', '2026-2027'],
    objectif: 'Savoir insérer, modifier et supprimer des données avec INSERT, UPDATE et DELETE.',
    explication: [
      "Jusqu'ici, SELECT ne fait que LIRE des données. Trois autres instructions permettent de les MODIFIER : INSERT (ajouter une ligne), UPDATE (modifier des lignes existantes), DELETE (supprimer des lignes).",
      "INSERT : `INSERT INTO table (colonne1, colonne2) VALUES (valeur1, valeur2);`. L'ordre des colonnes doit correspondre à l'ordre des valeurs.",
      "UPDATE : `UPDATE table SET colonne = nouvelle_valeur WHERE condition;`. Le `WHERE` précise QUELLES lignes modifier — sans lui, TOUTES les lignes de la table sont modifiées.",
      "DELETE : `DELETE FROM table WHERE condition;`. Même remarque vitale : un DELETE sans WHERE supprime TOUTES les lignes de la table, ce qui est presque toujours une catastrophe involontaire."
    ],
    aRetenir: [
      'INSERT INTO table (colonnes) VALUES (valeurs);',
      'UPDATE table SET colonne = valeur WHERE condition; — le WHERE est vital',
      'DELETE FROM table WHERE condition; — sans WHERE, TOUTES les lignes sont supprimées',
      'Avant d\'exécuter un UPDATE ou un DELETE, on vérifie son WHERE avec un SELECT identique pour voir quelles lignes seraient touchées'
    ],
    exemple: {
      langage: 'sql',
      code:
`UPDATE client
SET ville = 'Marseille'
WHERE id_client = 4;`
    },
    exempleExplique: [
      "`UPDATE client` désigne la table à modifier.",
      "`SET ville = 'Marseille'` indique la nouvelle valeur de la colonne `ville`.",
      "`WHERE id_client = 4` limite la modification à une seule ligne précise : sans cette clause, TOUS les clients verraient leur ville changée."
    ],
    erreursFrequentes: [
      "Exécuter un UPDATE ou un DELETE sans clause WHERE : la modification/suppression s'applique alors à TOUTES les lignes de la table.",
      "Se tromper dans l'ordre des colonnes et des valeurs dans un INSERT.",
      "Oublier les guillemets simples autour d'une valeur texte dans un INSERT ou un UPDATE."
    ],
    astuce: "Avant de valider un UPDATE ou un DELETE avec un WHERE, transforme-le mentalement en SELECT avec la même clause (`SELECT * FROM client WHERE id_client = 4;`) et vérifie que ce sont bien les lignes visées — et seulement elles.",
    exercicesIds: ['ex-sql-dml-qcm-1', 'ex-sql-dml-erreur-1']
  },

  // ------------------------------------------------------------- C# N4 --
  {
    id: 'csharp-n4-tableaux',
    matiere: 'slam-prog',
    parcoursId: 'csharp',
    niveau: 4,
    ordre: 1,
    titre: 'Les tableaux',
    competence: 'csharp.tableaux',
    difficulte: 'moyen',
    annees: ['2025-2026', '2026-2027'],
    objectif: 'Savoir déclarer, remplir et parcourir un tableau (array) en C#.',
    explication: [
      "Un tableau (array) permet de stocker plusieurs valeurs du même type sous un seul nom, chacune accessible par un indice (sa position). C'est utile pour une liste de valeurs de taille fixe et connue à l'avance : les notes d'une classe, les jours de la semaine...",
      "Déclaration : `type[] nom = new type[taille];` crée un tableau de `taille` cases, initialisées à une valeur par défaut (0 pour les nombres). On peut aussi initialiser directement : `int[] notes = { 12, 15, 9 };`.",
      "IMPORTANT : en C#, les indices commencent à 0. Le premier élément est `tableau[0]`, le dernier est `tableau[tableau.Length - 1]`. `Length` (propriété, sans parenthèses) donne le nombre total de cases.",
      "On parcourt un tableau avec `for` (quand on a besoin de l'indice) ou `foreach` (quand on veut juste chaque valeur)."
    ],
    aRetenir: [
      'type[] nom = new type[taille]; ou type[] nom = { valeur1, valeur2, ... };',
      'Le premier indice est 0, le dernier est Length - 1',
      'tableau.Length donne le nombre d\'éléments (propriété, pas une méthode)',
      'Accéder à un indice qui n\'existe pas déclenche une IndexOutOfRangeException'
    ],
    exemple: {
      langage: 'csharp',
      code:
`int[] notes = { 12, 15, 9, 18 };

for (int i = 0; i < notes.Length; i++)
{
    Console.WriteLine("Note " + i + " : " + notes[i]);
}`
    },
    exempleExplique: [
      "`notes.Length` vaut 4 : le tableau contient 4 éléments.",
      "La boucle va de i = 0 à i = 3 (elle s'arrête juste avant `notes.Length`), ce qui couvre exactement les 4 indices valides.",
      "`notes[i]` accède à la valeur stockée à la position i."
    ],
    erreursFrequentes: [
      "Confondre `notes.Length` (le NOMBRE d'éléments) avec le DERNIER indice valide, qui est `notes.Length - 1`.",
      "Écrire `i <= notes.Length` au lieu de `i < notes.Length` : ça provoque un accès hors limites au dernier tour.",
      "Vouloir faire grandir un tableau classique : sa taille est fixe une fois créé — pour ça, il faut une `List<T>` (voir la leçon suivante)."
    ],
    astuce: "Dis-toi toujours : \"le dernier indice valide, c'est Length moins 1\". Si tu hésites entre `<` et `<=` dans ta boucle, `i < tableau.Length` est presque toujours la bonne réponse.",
    exercicesIds: ['ex-csharp-tableau-qcm-1', 'ex-csharp-tableau-erreur-1', 'ex-csharp-tableau-prog-1']
  },
  {
    id: 'csharp-n4-list',
    matiere: 'slam-prog',
    parcoursId: 'csharp',
    niveau: 4,
    ordre: 2,
    titre: 'La liste générique List<T>',
    competence: 'csharp.list',
    difficulte: 'moyen',
    annees: ['2025-2026', '2026-2027'],
    objectif: 'Savoir utiliser une List<T> quand la taille des données n\'est pas connue à l\'avance.',
    explication: [
      "Un tableau a une taille FIXE, définie à sa création. Si on ne sait pas à l'avance combien d'éléments on va stocker, on utilise une `List<T>` — une collection qui peut grandir et rétrécir dynamiquement.",
      "`List<T>` vient de `System.Collections.Generic`. Le `T` est le type des éléments qu'elle contient : `List<int>`, `List<string>`, `List<Etudiant>`... On dit que c'est une collection générique.",
      "Déclaration : `List<int> notes = new List<int>();` crée une liste vide. Méthodes principales : `Add(valeur)` ajoute à la fin, `Remove(valeur)` retire la première occurrence trouvée, `Contains(valeur)` renvoie vrai/faux, `Count` donne le nombre d'éléments.",
      "On parcourt une `List<T>` comme un tableau, avec `for` (en utilisant `maListe[i]` et `maListe.Count`) ou `foreach`."
    ],
    aRetenir: [
      'List<T> : collection de taille dynamique, contrairement au tableau (taille fixe)',
      'new List<int>();  puis .Add(valeur), .Remove(valeur), .Contains(valeur)',
      'maListe.Count donne le nombre d\'éléments (équivalent de .Length pour un tableau)',
      'using System.Collections.Generic; est nécessaire en haut du fichier'
    ],
    exemple: {
      langage: 'csharp',
      code:
`List<string> prenoms = new List<string>();
prenoms.Add("Ilhan");
prenoms.Add("Sami");
prenoms.Remove("Sami");

foreach (string p in prenoms)
{
    Console.WriteLine(p);
}
Console.WriteLine("Nombre d'éléments : " + prenoms.Count);`
    },
    exempleExplique: [
      "La liste démarre vide, puis on y ajoute deux prénoms avec `Add`.",
      "`Remove(\"Sami\")` retire \"Sami\" de la liste : il ne reste que \"Ilhan\".",
      "Le `foreach` affiche chaque prénom restant, puis `Count` confirme qu'il en reste 1."
    ],
    erreursFrequentes: [
      "Oublier `using System.Collections.Generic;` : le code ne compile pas.",
      "Utiliser `.Length` au lieu de `.Count` sur une `List<T>` (c'est l'inverse pour les tableaux).",
      "Essayer d'utiliser `.Add(...)` sur un tableau classique (`int[]`) : cette méthode n'existe pas dessus."
    ],
    astuce: "Règle simple : tableau = taille fixe = `.Length`. Liste = taille qui bouge = `.Count`, `.Add`, `.Remove`. Si tu ne connais pas le nombre d'éléments à l'avance, pars directement sur une `List<T>`.",
    exercicesIds: ['ex-csharp-list-qcm-1', 'ex-csharp-list-completer-1', 'ex-csharp-list-prog-1']
  },
  {
    id: 'csharp-n4-dictionary',
    matiere: 'slam-prog',
    parcoursId: 'csharp',
    niveau: 4,
    ordre: 3,
    titre: 'Le dictionnaire Dictionary<TKey, TValue>',
    competence: 'csharp.dictionary',
    difficulte: 'difficile',
    annees: ['2025-2026', '2026-2027'],
    objectif: 'Savoir utiliser un Dictionary<TKey, TValue> pour associer une clé unique à une valeur.',
    explication: [
      "Un `Dictionary<TKey, TValue>` associe à chaque CLÉ unique une VALEUR — comme un vrai dictionnaire associe un mot à sa définition. Par exemple, un identifiant d'étudiant (clé) à son nom (valeur).",
      "Déclaration : `Dictionary<int, string> etudiants = new Dictionary<int, string>();`. Ajout : `etudiants.Add(1, \"Ilhan\");` ou `etudiants[1] = \"Ilhan\";`. Lecture : `etudiants[1]`.",
      "Accéder à une clé qui n'existe pas avec `etudiants[cle]` provoque une erreur. La méthode sûre est `TryGetValue(cle, out valeur)`, qui renvoie vrai/faux selon que la clé existe, sans planter le programme.",
      "Un `HashSet<T>` est proche d'un Dictionary, mais ne stocke QUE des clés (pas de valeur associée) et garantit l'absence de doublon — utile pour vérifier rapidement si une valeur a déjà été vue."
    ],
    aRetenir: [
      'Dictionary<TKey, TValue> associe une clé UNIQUE à une valeur',
      'Ajout : .Add(cle, valeur) ou dico[cle] = valeur ; Lecture : dico[cle]',
      'TryGetValue(cle, out valeur) évite le plantage si la clé n\'existe pas',
      'HashSet<T> : comme un Dictionary mais sans valeurs, uniquement des clés uniques'
    ],
    exemple: {
      langage: 'csharp',
      code:
`Dictionary<int, string> etudiants = new Dictionary<int, string>();
etudiants.Add(1, "Ilhan");
etudiants.Add(2, "Sami");

if (etudiants.TryGetValue(1, out string nom))
{
    Console.WriteLine("Étudiant 1 : " + nom);
}`
    },
    exempleExplique: [
      "Le dictionnaire associe l'identifiant 1 à \"Ilhan\" et 2 à \"Sami\".",
      "`TryGetValue(1, out string nom)` cherche la clé 1 : elle existe, donc la méthode renvoie `true` et place \"Ilhan\" dans `nom`.",
      "Si on avait cherché la clé 5 (inexistante), `TryGetValue` aurait renvoyé `false` sans provoquer d'erreur, et le bloc `if` ne se serait pas exécuté."
    ],
    erreursFrequentes: [
      "Ajouter deux fois la même clé avec `.Add(...)` : ça provoque une exception. Pour \"ajouter ou remplacer\", utiliser `dico[cle] = valeur;`.",
      "Accéder directement à `dico[cle]` sans être sûr que la clé existe : `TryGetValue` est plus sûr.",
      "Inverser l'ordre : c'est `Dictionary<TypeDeLaCle, TypeDeLaValeur>`, pas l'inverse."
    ],
    astuce: "Pense au Dictionary comme à un dictionnaire papier : tu cherches un MOT (la clé) pour trouver sa DÉFINITION (la valeur) — jamais l'inverse, et un mot n'a qu'une seule entrée.",
    exercicesIds: ['ex-csharp-dict-qcm-1', 'ex-csharp-dict-lire-1']
  },

  // ------------------------------------------------------------- C# N6 --
  {
    id: 'csharp-n6-exceptions',
    matiere: 'slam-prog',
    parcoursId: 'csharp',
    niveau: 6,
    ordre: 1,
    titre: 'Gérer les exceptions avec try/catch',
    competence: 'csharp.exceptions',
    difficulte: 'difficile',
    annees: ['2025-2026', '2026-2027'],
    objectif: 'Savoir anticiper et gérer une erreur d\'exécution avec try/catch, sans faire planter le programme.',
    explication: [
      "Une exception est une erreur qui survient PENDANT l'exécution du programme (pas à la compilation) : diviser par zéro, convertir un texte non numérique en nombre, accéder à un indice de tableau qui n'existe pas... Sans gestion, le programme s'arrête brutalement.",
      "Le bloc `try { ... } catch (TypeException e) { ... }` permet de \"tenter\" un code risqué, et de réagir proprement si une exception se produit au lieu de planter.",
      "On peut cibler un type précis (`FormatException`, `DivideByZeroException`, `IndexOutOfRangeException`...) ou utiliser `catch (Exception e)` pour attraper n'importe quelle exception. `e.Message` décrit l'erreur.",
      "Le bloc `finally { ... }` (optionnel) s'exécute TOUJOURS après le try/catch, qu'une exception se soit produite ou non — utile pour libérer une ressource quoi qu'il arrive."
    ],
    aRetenir: [
      'try { code risqué } catch (TypeException e) { que faire en cas d\'erreur }',
      'e.Message décrit l\'erreur survenue',
      'finally { ... } s\'exécute toujours, erreur ou pas',
      'catch (Exception e) attrape toutes les exceptions, mais cibler le type précis est une meilleure pratique'
    ],
    exemple: {
      langage: 'csharp',
      code:
`try
{
    Console.WriteLine("Entrez un nombre :");
    int nombre = Convert.ToInt32(Console.ReadLine());
    Console.WriteLine("Vous avez saisi : " + nombre);
}
catch (FormatException)
{
    Console.WriteLine("Ce n'est pas un nombre valide.");
}`
    },
    exempleExplique: [
      "Si l'utilisateur tape \"25\", la conversion réussit, le `try` s'exécute normalement et le `catch` est ignoré.",
      "Si l'utilisateur tape \"abc\", `Convert.ToInt32` déclenche une `FormatException` : l'exécution saute immédiatement au `catch`, sans planter le programme.",
      "On n'a pas nommé la variable d'exception (`catch (FormatException)` sans `e`) car on n'a pas besoin de son détail ici."
    ],
    erreursFrequentes: [
      "Mettre un `catch (Exception e)` trop large en premier : C# exige que les catch les plus précis soient placés avant les plus généraux.",
      "Utiliser try/catch pour masquer un bug au lieu de le corriger : ça doit gérer un cas anormal mais prévisible, pas cacher une erreur de logique.",
      "Oublier que le code après la ligne qui a levé l'exception, dans le même `try`, ne s'exécute jamais."
    ],
    astuce: "Bonne question pour savoir si tu as besoin d'un try/catch : \"cette instruction peut-elle échouer pour une raison que je ne contrôle pas (saisie utilisateur, fichier absent, réseau) ?\" Si oui, entoure-la.",
    exercicesIds: ['ex-csharp-except-qcm-1', 'ex-csharp-except-prog-1']
  },

  // ------------------------------------------------------------- C# N7 --
  {
    id: 'csharp-n7-bdd',
    matiere: 'slam-prog',
    parcoursId: 'csharp',
    niveau: 7,
    ordre: 1,
    titre: 'Se connecter à une base de données depuis C#',
    competence: 'csharp.bdd',
    difficulte: 'difficile',
    annees: ['2025-2026', '2026-2027'],
    objectif: 'Comprendre comment un programme C# se connecte à une base de données et exécute des requêtes SQL en toute sécurité.',
    explication: [
      "Pour dialoguer avec une base de données depuis C#, on utilise ADO.NET : une `SqlConnection` représente la connexion (chaîne de connexion précisant serveur, base, identifiants), et une `SqlCommand` représente une requête SQL à exécuter dessus.",
      "Il faut toujours OUVRIR la connexion avant de l'utiliser (`connexion.Open();`) et la FERMER après — ou mieux, utiliser `using (SqlConnection connexion = new SqlConnection(chaine)) { ... }`, qui la ferme automatiquement même en cas d'erreur.",
      "Pour un SELECT, on lit les résultats ligne par ligne avec un `SqlDataReader` (`while (reader.Read()) { ... }`). Pour un INSERT/UPDATE/DELETE, on utilise `ExecuteNonQuery()`, qui renvoie le nombre de lignes affectées.",
      "RÈGLE DE SÉCURITÉ ESSENTIELLE : ne jamais construire une requête en concaténant directement une valeur saisie par l'utilisateur. Cela expose à l'injection SQL. Il faut des REQUÊTES PARAMÉTRÉES avec `SqlParameter`, qui séparent le texte de la requête des valeurs."
    ],
    aRetenir: [
      'SqlConnection = la connexion, SqlCommand = la requête à exécuter',
      'using (SqlConnection ...) { } ferme automatiquement la connexion',
      'SELECT → SqlDataReader + while (reader.Read()) ; INSERT/UPDATE/DELETE → ExecuteNonQuery()',
      'TOUJOURS des requêtes paramétrées (SqlParameter) avec une valeur venant de l\'utilisateur : jamais de concaténation directe'
    ],
    exemple: {
      langage: 'csharp',
      code:
`string requete = "SELECT nom FROM client WHERE id_client = @id";

using (SqlConnection connexion = new SqlConnection(chaineDeConnexion))
{
    connexion.Open();
    SqlCommand commande = new SqlCommand(requete, connexion);
    commande.Parameters.AddWithValue("@id", idRecherche);

    SqlDataReader reader = commande.ExecuteReader();
    while (reader.Read())
    {
        Console.WriteLine(reader["nom"]);
    }
}`
    },
    exempleExplique: [
      "`@id` dans la requête est un paramètre nommé : un espace réservé, pas une valeur directement collée dans le texte SQL.",
      "`commande.Parameters.AddWithValue(\"@id\", idRecherche)` fournit la vraie valeur séparément — ce qui neutralise toute tentative d'injection SQL.",
      "`using (SqlConnection ...)` garantit que `connexion` sera fermée automatiquement, même si une exception survient à l'intérieur.",
      "`while (reader.Read())` avance ligne par ligne ; `reader[\"nom\"]` accède à la colonne `nom` de la ligne courante."
    ],
    erreursFrequentes: [
      "Concaténer directement une saisie utilisateur dans la requête SQL — la faille de sécurité la plus fréquente et la plus dangereuse.",
      "Oublier de fermer la connexion (sans `using`), ce qui peut épuiser les connexions disponibles sur le serveur.",
      "Confondre `ExecuteReader()` (lire des résultats, SELECT) et `ExecuteNonQuery()` (modifier des données, sans résultat à lire)."
    ],
    astuce: "Si tu vois un `+` qui colle une variable au milieu d'une requête SQL, considère que c'est une faille de sécurité jusqu'à preuve du contraire : remplace-le par un paramètre nommé et `AddWithValue`.",
    exercicesIds: ['ex-csharp-bdd-qcm-1', 'ex-csharp-bdd-erreur-1']
  }
];

export function getLesson(id) {
  return LESSONS.find(l => l.id === id) || null;
}

export function getLessonsByParcours(parcoursId) {
  return LESSONS
    .filter(l => l.parcoursId === parcoursId)
    .sort((a, b) => (a.niveau - b.niveau) || (a.ordre - b.ordre));
}

export function getLessonsByMatiere(matiereId) {
  return LESSONS.filter(l => l.matiere === matiereId);
}
