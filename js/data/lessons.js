// ============================================================================
// lessons.js — Contenu pédagogique (leçons)
// ----------------------------------------------------------------------------
// Chaque leçon suit la structure imposée : Objectif / Explication / À retenir /
// Exemple / Exemple expliqué / Erreurs fréquentes / Astuce / Exercices.
//
// ⚠️ CONTENU RÉEL, PAS UN PLACEHOLDER — couvre le parcours C# niveaux 1 à 4
// (débutant → collections), un avant-goût des niveaux 6 (exceptions) et 7
// (C# + bases de données), le parcours SQL complet (niveaux 1 à 4), les 6
// thèmes officiels de CEJM (un point d'entrée par thème), les 6 modules de
// l'unité de Maths pour l'informatique (un point d'entrée par module), et
// l'essentiel du programme d'Anglais et de Culture générale (vocabulaire
// IT, temps verbaux, oral, synthèse, écriture personnelle).
//
// Le niveau C# 5 (POO, un seul avant-goût) et le niveau 8 ("niveau BTS",
// couvert par des exercices `difficulte: 'bts'` répartis sur plusieurs
// compétences plutôt qu'une leçon dédiée) restent partiels. Pour CEJM et
// Maths, chaque thème/module n'a qu'UNE leçon de départ, pas une couverture
// exhaustive (un vrai thème CEJM représente plusieurs semaines de cours).
// Voir README.md pour la marche à suivre pour approfondir sans toucher au
// code de l'interface.
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
  },

  // -------------------------------------------------------------- CEJM --
  {
    id: 'cejm-theme1-agents-economiques',
    matiere: 'cejm',
    parcoursId: 'cejm',
    niveau: 1,
    ordre: 1,
    titre: "Les agents économiques et les formes juridiques de l'entreprise",
    competence: 'cejm.agents-economiques',
    difficulte: 'facile',
    annees: ['2025-2026', '2026-2027'],
    objectif: "Identifier les grands agents économiques et savoir distinguer les principales formes juridiques d'entreprise.",
    explication: [
      "L'activité économique met en relation plusieurs types d'acteurs, appelés agents économiques : les ménages (qui consomment et fournissent leur travail), les entreprises (qui produisent des biens et services), l'État et les administrations publiques (qui régulent et redistribuent), et les banques (qui financent). Ces agents échangent en permanence sur des marchés.",
      "Un marché met en relation une offre (ce que les entreprises proposent) et une demande (ce que les ménages et autres agents veulent acquérir). Le prix résulte en théorie de la rencontre entre l'offre et la demande.",
      "Créer une entreprise suppose de choisir une forme juridique, qui détermine notamment la responsabilité de l'entrepreneur sur les dettes de l'entreprise. L'entreprise individuelle (EI) ne crée pas de personne morale distincte : l'entrepreneur est responsable sur son patrimoine (avec un statut protecteur pour la résidence principale). Les sociétés (SARL, SAS, SA...) créent une personne morale distincte : la responsabilité des associés est en principe limitée à leurs apports.",
      "SARL (société à responsabilité limitée) et SAS (société par actions simplifiée) sont les formes les plus courantes pour les petites et moyennes entreprises : la SAS offre plus de liberté dans la rédaction des statuts, la SARL est plus encadrée par la loi mais souvent perçue comme plus rassurante pour les créanciers."
    ],
    aRetenir: [
      '4 grands agents économiques : ménages, entreprises, État/administrations, banques',
      'Un marché = rencontre entre une offre et une demande',
      'Entreprise individuelle : pas de personne morale distincte, responsabilité sur le patrimoine personnel (résidence principale protégée)',
      "Société (SARL, SAS, SA...) : personne morale distincte, responsabilité des associés limitée à leurs apports (en principe)"
    ],
    exemple: {
      langage: null,
      code:
`Ilhan crée seul son entreprise de développement web.

S'il choisit l'entreprise individuelle, ses biens personnels
(hors résidence principale) peuvent être engagés en cas de
dettes professionnelles.

S'il crée une SASU (SAS à associé unique), c'est le patrimoine
de la société qui est engagé, pas le sien en principe.`
    },
    exempleExplique: [
      "Le choix EI vs SASU change la nature du risque : en EI, l'entrepreneur reste engagé sur son propre patrimoine ; en société, il limite en principe son risque à ce qu'il a apporté au capital.",
      "\"SASU\" est une SAS à un seul associé : les règles de souplesse de la SAS s'appliquent même à un entrepreneur seul."
    ],
    erreursFrequentes: [
      "Confondre entreprise individuelle et société : dans une société, il existe une personne morale (l'entreprise elle-même) distincte de la personne physique qui l'a créée.",
      "Croire que la responsabilité limitée protège TOUJOURS l'associé : en pratique, les banques demandent souvent une caution personnelle du dirigeant, ce qui limite cette protection.",
      "Oublier que \"agents économiques\" est une catégorie large : l'État est un agent économique au même titre qu'une entreprise ou un ménage."
    ],
    astuce: "Pour retenir la différence entreprise individuelle / société, pense à la notion de \"personne morale\" : une société est une personne juridique à part entière, avec son propre patrimoine, distincte de son ou ses créateurs.",
    exercicesIds: ['ex-cejm-agents-qcm-1', 'ex-cejm-agents-vf-1']
  },
  {
    id: 'cejm-theme4-rgpd',
    matiere: 'cejm',
    parcoursId: 'cejm',
    niveau: 4,
    ordre: 1,
    titre: "L'impact du numérique : RGPD et protection des données personnelles",
    competence: 'cejm.rgpd',
    difficulte: 'moyen',
    annees: ['2025-2026', '2026-2027'],
    objectif: "Comprendre les grands principes du RGPD et les obligations qu'il impose aux entreprises qui traitent des données personnelles.",
    explication: [
      "Le RGPD (Règlement Général sur la Protection des Données) est un texte européen entré en application en mai 2018. Il encadre la façon dont les entreprises et organisations collectent, utilisent et conservent les données personnelles (toute information permettant d'identifier une personne : nom, email, adresse IP...).",
      "Principes clés : la collecte de données doit avoir une finalité précise et légitime (principe de minimisation : on ne collecte que ce qui est nécessaire), les personnes doivent donner un consentement libre et éclairé pour certains traitements, et les données ne doivent pas être conservées indéfiniment.",
      "Le RGPD donne des droits aux personnes concernées : droit d'accès (savoir quelles données sont détenues sur soi), droit de rectification, droit à l'effacement (\"droit à l'oubli\"), et droit à la portabilité (récupérer ses données dans un format réutilisable).",
      "Pour une organisation qui manipule beaucoup de données, la nomination d'un DPO (délégué à la protection des données) est souvent obligatoire. Les entreprises doivent tenir un registre des traitements et signaler certaines violations de données à la CNIL sous 72 heures."
    ],
    aRetenir: [
      'RGPD = règlement européen encadrant les données personnelles, en application depuis mai 2018',
      'Principes : finalité précise, minimisation, consentement, durée de conservation limitée',
      "Droits des personnes : accès, rectification, effacement, portabilité",
      'DPO = délégué à la protection des données ; violation de données à signaler à la CNIL sous 72h'
    ],
    exemple: {
      langage: null,
      code:
`Une entreprise de e-commerce collecte l'email de ses clients
pour leur envoyer la confirmation de commande.

Si elle veut ensuite utiliser ces mêmes emails pour de la
publicité, elle doit recueillir un consentement séparé et
explicite pour cette nouvelle finalité — elle ne peut pas
réutiliser librement une donnée collectée pour un autre usage.`
    },
    exempleExplique: [
      "La confirmation de commande est une finalité légitime : l'email est nécessaire pour exécuter le contrat de vente.",
      "L'usage publicitaire est une finalité DIFFÉRENTE : le principe de finalité du RGPD impose de ne pas détourner une donnée de l'usage pour lequel elle a été collectée sans nouveau consentement."
    ],
    erreursFrequentes: [
      "Croire que le RGPD interdit toute collecte de données : il l'encadre, il ne l'interdit pas, à condition de respecter ses principes.",
      "Confondre consentement et simple information : informer un client qu'on collecte ses données n'équivaut pas à recueillir son consentement explicite quand celui-ci est requis.",
      "Penser que le RGPD ne concerne que les grandes entreprises : il s'applique à toute organisation, quelle que soit sa taille, dès qu'elle traite des données personnelles de résidents européens."
    ],
    astuce: "Pour vérifier qu'un traitement de données respecte le RGPD, pose-toi la question : \"Pourquoi je collecte cette donnée précise, et est-ce que j'en ai vraiment besoin ?\" Si tu ne peux pas répondre clairement, il y a probablement un problème.",
    exercicesIds: ['ex-cejm-rgpd-qcm-1', 'ex-cejm-rgpd-reponse-1']
  },

  // -------------------------------------------------------------- Maths --
  {
    id: 'maths-numeration',
    matiere: 'maths',
    parcoursId: 'maths',
    niveau: 1,
    ordre: 1,
    titre: 'Les systèmes de numération : bases 2, 10 et 16',
    competence: 'maths.numeration',
    difficulte: 'moyen',
    annees: ['2025-2026', '2026-2027'],
    objectif: 'Savoir convertir un nombre entre les bases 10 (décimale), 2 (binaire) et 16 (hexadécimale).',
    explication: [
      "Le système décimal (base 10) utilise 10 chiffres (0 à 9). Un ordinateur, lui, ne manipule que deux états électriques (courant ou pas de courant) : il travaille donc naturellement en base 2, le binaire, avec seulement deux chiffres (0 et 1).",
      "Dans un nombre binaire, chaque position représente une puissance de 2 (au lieu d'une puissance de 10). Par exemple, `1011` en binaire vaut 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8 + 0 + 2 + 1 = 11 en décimal.",
      "L'hexadécimal (base 16) utilise 16 symboles : 0 à 9, puis A, B, C, D, E, F pour représenter 10 à 15. Très utilisé en informatique (adresses mémoire, couleurs web comme #FF0000) car un groupe de 4 bits correspond exactement à 1 chiffre hexadécimal.",
      "Pour convertir du décimal vers le binaire, on effectue des divisions successives par 2 et on lit les restes de bas en haut. Pour convertir du binaire vers l'hexadécimal, on regroupe les bits 4 par 4 (en partant de la droite) et on convertit chaque groupe."
    ],
    aRetenir: [
      'Décimal (base 10) : 10 chiffres, 0-9. Binaire (base 2) : 2 chiffres, 0-1. Hexadécimal (base 16) : 16 symboles, 0-9 puis A-F',
      "Chaque position d'un nombre en base b représente une puissance de b",
      '1 chiffre hexadécimal = exactement 4 bits (un demi-octet)',
      'Décimal → binaire : divisions successives par 2, lire les restes de bas en haut'
    ],
    exemple: {
      langage: null,
      code:
`Convertir 25 (décimal) en binaire :

25 ÷ 2 = 12 reste 1
12 ÷ 2 = 6  reste 0
6  ÷ 2 = 3  reste 0
3  ÷ 2 = 1  reste 1
1  ÷ 2 = 0  reste 1

En lisant les restes de bas en haut : 25 = 11001 en binaire.`
    },
    exempleExplique: [
      "On divise 25 par 2 de façon répétée jusqu'à obtenir un quotient de 0, en notant le reste à chaque étape.",
      "Le résultat se lit en remontant : le DERNIER reste obtenu est le chiffre binaire de poids fort (le plus à gauche).",
      "Vérification : 1×2⁴ + 1×2³ + 0×2² + 0×2¹ + 1×2⁰ = 16 + 8 + 0 + 0 + 1 = 25. ✓"
    ],
    erreursFrequentes: [
      "Lire les restes dans le mauvais sens : il faut les lire de BAS EN HAUT (du dernier calculé au premier), pas l'inverse.",
      "Oublier qu'un chiffre hexadécimal correspond à exactement 4 bits, pas 8 (8 bits = 2 chiffres hexadécimaux, soit un octet).",
      "Confondre la VALEUR d'un chiffre et sa POSITION : dans `101`, le 1 de gauche vaut 2² = 4, pas juste \"1\"."
    ],
    astuce: "Pour vérifier rapidement une conversion décimal→binaire, refais le calcul dans l'autre sens (binaire→décimal) en sommant les puissances de 2 correspondant aux bits à 1 : si tu retombes sur le nombre de départ, ta conversion est juste.",
    exercicesIds: ['ex-maths-numeration-qcm-1', 'ex-maths-numeration-reponse-1', 'ex-maths-numeration-completer-1']
  },
  {
    id: 'maths-booleen',
    matiere: 'maths',
    parcoursId: 'maths',
    niveau: 2,
    ordre: 1,
    titre: 'Le calcul booléen et les tables de vérité',
    competence: 'maths.booleen',
    difficulte: 'moyen',
    annees: ['2025-2026', '2026-2027'],
    objectif: 'Savoir construire une table de vérité et appliquer les opérateurs logiques ET, OU, NON.',
    explication: [
      "Le calcul booléen manipule des valeurs qui ne peuvent prendre que deux états : VRAI (1) ou FAUX (0) — exactement comme le type `bool` en programmation. C'est la base du fonctionnement des circuits électroniques et des conditions dans un programme.",
      "Trois opérateurs de base : ET (noté ∧ ou AND) est vrai seulement si LES DEUX opérandes sont vraies ; OU (noté ∨ ou OR) est vrai si AU MOINS UNE des opérandes est vraie ; NON (noté ¬ ou NOT) inverse la valeur.",
      "Une table de vérité liste tous les cas possibles des entrées et le résultat de l'opération pour chaque cas. Pour deux variables A et B, il y a 2² = 4 combinaisons possibles.",
      "Ces opérateurs se retrouvent directement en programmation : `&&` (ET), `||` (OU), `!` (NON) en C#, ou `AND`/`OR` en SQL. Comprendre la table de vérité aide à prévoir le résultat d'une condition complexe comme `if (a && !b)`."
    ],
    aRetenir: [
      'ET (AND) : vrai seulement si les deux entrées sont vraies',
      'OU (OR) : vrai si au moins une entrée est vraie',
      'NON (NOT) : inverse la valeur',
      'n variables → 2ⁿ lignes dans la table de vérité'
    ],
    exemple: {
      langage: null,
      code:
`Table de vérité de A ET B :

A | B | A ET B
0 | 0 |   0
0 | 1 |   0
1 | 0 |   0
1 | 1 |   1`
    },
    exempleExplique: [
      "Il y a 2² = 4 lignes car on a 2 variables (A et B), chacune pouvant valoir 0 ou 1.",
      "La colonne résultat vaut 1 UNIQUEMENT sur la dernière ligne, celle où A ET B valent tous les deux 1 : c'est exactement la définition de l'opérateur ET.",
      "Sur les trois autres lignes, au moins une des deux variables vaut 0, donc le résultat de ET est 0."
    ],
    erreursFrequentes: [
      "Confondre ET et OU : ET est plus \"exigeant\" (il faut que tout soit vrai), OU est plus \"permissif\" (il suffit qu'une seule chose soit vraie).",
      "Oublier une ligne dans la table de vérité : avec n variables, il faut toujours 2ⁿ lignes, jamais moins.",
      "Appliquer NON à toute une expression sans faire attention aux parenthèses (¬(A ET B) n'est pas la même chose que ¬A ET ¬B)."
    ],
    astuce: "Pour ne plus confondre ET/OU, pense à des phrases de la vie réelle : \"j'irai à la fête SI il fait beau ET si j'ai fini mes devoirs\" (ET, les deux conditions sont obligatoires) contre \"j'irai à la fête si il fait beau OU si mes amis y vont\" (OU, une seule suffit).",
    exercicesIds: ['ex-maths-bool-qcm-1', 'ex-maths-bool-completer-1']
  },

  // ------------------------------------------------------------ Anglais --
  {
    id: 'anglais-vocabulaire-it',
    matiere: 'anglais',
    parcoursId: 'anglais',
    niveau: 1,
    ordre: 1,
    titre: "IT vocabulary — Le vocabulaire professionnel de l'informatique",
    competence: 'anglais.vocabulaire-it',
    difficulte: 'facile',
    annees: ['2025-2026', '2026-2027'],
    objectif: "Connaître le vocabulaire anglais de base utilisé au quotidien dans le développement informatique.",
    explication: [
      "Une grande partie du vocabulaire technique informatique est directement en anglais, même en contexte francophone : 'bug', 'debug', 'deploy', 'framework'... Bien connaître ces termes est essentiel pour lire la documentation technique, très majoritairement en anglais.",
      "Quelques termes essentiels : 'a bug' (un bogue), 'to debug' (déboguer), 'to fix' (corriger), 'to deploy' (déployer), 'a release' (une version publiée), 'the backend' (la partie serveur), 'the frontend' (la partie visible par l'utilisateur), 'a framework' (un cadre de développement), 'a library' (une bibliothèque logicielle).",
      "Attention aux faux-amis courants : 'to support' ne veut pas dire seulement 'supporter' (endurer) mais surtout 'prendre en charge', 'assister techniquement' ; 'eventually' ne veut PAS dire 'éventuellement' (possiblement) mais 'finalement', 'à terme'.",
      "En contexte professionnel, on utilise des verbes précis pour décrire une action de développement : 'to implement a feature' (implémenter une fonctionnalité), 'to refactor code' (restructurer du code sans changer son comportement), 'to merge a branch' (fusionner une branche)."
    ],
    aRetenir: [
      'bug / to debug / to fix / to deploy / a release',
      'the backend (serveur) vs the frontend (interface utilisateur)',
      'a framework (cadre de développement) vs a library (bibliothèque)',
      "Faux-ami : 'eventually' = finalement (pas 'éventuellement') ; 'to support' = prendre en charge"
    ],
    exemple: {
      langage: null,
      code:
`"We found a critical bug in production, so the team had to
fix it and deploy a hotfix eventually."

→ "Nous avons trouvé un bogue critique en production, donc
l'équipe a dû le corriger et déployer un correctif d'urgence,
au final."`
    },
    exempleExplique: [
      "\"a critical bug\" : un bogue grave, qui a un impact important.",
      "\"in production\" : sur l'environnement réellement utilisé par les utilisateurs finaux, par opposition à un environnement de test.",
      "\"a hotfix\" : un correctif urgent, déployé rapidement pour régler un problème critique.",
      "\"eventually\" est bien traduit par \"au final\"/\"finalement\" ici, pas par \"éventuellement\"."
    ],
    erreursFrequentes: [
      "Traduire 'eventually' par 'éventuellement' : faux-ami classique, le sens réel est 'finalement', 'à terme'.",
      "Confondre 'backend' et 'frontend' : le frontend est ce que l'utilisateur voit et manipule, le backend est la logique et les données côté serveur, invisibles pour l'utilisateur.",
      "Utiliser 'library' et 'framework' comme des synonymes : une bibliothèque, on l'appelle depuis son propre code ; un framework impose sa structure et appelle ton code."
    ],
    astuce: "Pour retenir 'eventually' = finalement, associe-le à 'event' : un événement qui finit par arriver, au bout d'un moment — pas une possibilité incertaine.",
    exercicesIds: ['ex-anglais-vocab-qcm-1', 'ex-anglais-vocab-vf-1']
  },
  {
    id: 'anglais-present-tenses',
    matiere: 'anglais',
    parcoursId: 'anglais',
    niveau: 2,
    ordre: 1,
    titre: 'Present simple vs Present continuous',
    competence: 'anglais.present',
    difficulte: 'facile',
    annees: ['2025-2026', '2026-2027'],
    objectif: 'Savoir choisir entre le present simple et le present continuous selon le contexte.',
    explication: [
      "Le PRESENT SIMPLE (`I work`, `she works`) décrit une habitude, une vérité générale ou un fait durable. Attention à la terminaison en '-s' à la 3e personne du singulier (he/she/it works).",
      "Le PRESENT CONTINUOUS (`I am working`, `she is working`) décrit une action EN TRAIN de se dérouler au moment où l'on parle, ou une situation temporaire. Il se construit avec `to be` (am/is/are) + verbe en `-ing`.",
      "Comparaison : \"I work as a developer\" (fait durable, ma profession) contre \"I am working on a bug right now\" (action précise, en ce moment même).",
      "Certains verbes d'état (\"stative verbs\" comme `know`, `like`, `understand`, `believe`) ne s'utilisent presque jamais au continuous, même pour une situation actuelle : on dit \"I understand the problem\", jamais \"I am understanding the problem\"."
    ],
    aRetenir: [
      "Present simple : habitude / vérité générale — 3e pers. sing. + 's' (he works)",
      'Present continuous : action en cours maintenant — be + verbe-ing (she is working)',
      'Mots-clés du simple : always, usually, every day. Mots-clés du continuous : now, at the moment, currently',
      'Les verbes d\'état (know, like, understand...) restent au present simple, même pour parler du moment présent'
    ],
    exemple: {
      langage: null,
      code:
`Usually, I test my code every day before deploying. Right
now, I am testing a new feature that isn't working yet.`
    },
    exempleExplique: [
      "\"Usually... every day\" indique une habitude régulière : present simple (\"I test\").",
      "\"Right now\" indique un moment précis, en cours : present continuous (\"I am testing\").",
      "\"isn't working\" : même verbe 'work', mais ici décrit une situation temporaire actuelle, donc continuous."
    ],
    erreursFrequentes: [
      "Oublier le 's' à la 3e personne du singulier au present simple : \"she work\" est incorrect, il faut \"she works\".",
      "Mettre un verbe d'état comme 'know' au continuous : \"I am knowing\" n'existe pas en anglais correct.",
      "Utiliser le present simple pour une action clairement en cours : il faut \"he is writing\", pas \"he writes\", pour \"regarde, il est en train d'écrire du code\"."
    ],
    astuce: "Demande-toi : est-ce que je décris quelque chose de VRAI EN GÉNÉRAL (simple) ou quelque chose qui se passe SOUS MES YEUX MAINTENANT (continuous) ? La présence de 'right now' ou 'at the moment' est un indice fort pour le continuous.",
    exercicesIds: ['ex-anglais-present-qcm-1', 'ex-anglais-present-completer-1']
  },

  // --------------------------------------------------- Culture générale --
  {
    id: 'cg-synthese',
    matiere: 'culture-generale',
    parcoursId: 'culture-generale',
    niveau: 1,
    ordre: 1,
    titre: "L'analyse de corpus : comprendre et interpréter les documents",
    competence: 'cg.synthese',
    difficulte: 'moyen',
    annees: ['2025-2026', '2026-2027'],
    objectif: "Comprendre le fonctionnement actuel de l'analyse de corpus (première partie de l'épreuve de Culture générale et expression depuis sa réforme).",
    explication: [
      "Depuis l'arrêté du 13 juillet 2023 (appliqué à partir de la session 2025), l'épreuve de Culture générale et expression a changé de format. Ce n'est plus une \"synthèse\" au sens classique : la première partie s'appelle désormais l'ANALYSE DE CORPUS, notée sur 10 points (sur 20 au total), et porte sur un corpus resserré de 2 à 3 documents (au lieu de 4 auparavant), pour une épreuve écrite ramenée à 3 heures.",
      "Concrètement, il ne s'agit plus de rédiger un texte de synthèse continu, mais de répondre à 2 à 4 QUESTIONS portant sur le corpus : une question peut porter sur un seul document (compréhension, reformulation, interprétation), sur deux documents à la fois (confrontation), ou sur l'ensemble du corpus (dégager le thème commun, les points de convergence et de divergence).",
      "Changement important : l'interprétation personnelle, nuancée et argumentée, est désormais AU CŒUR de l'exercice — ce n'est plus une reformulation neutre et impersonnelle comme dans l'ancienne synthèse. Il est même possible de citer de brefs passages du corpus à l'appui d'une réponse. Une introduction et une conclusion standardisées ne sont plus attendues : on peut aller directement au cœur de chaque réponse.",
      "Ce qui reste vrai malgré la réforme : il faut toujours confronter les documents entre eux plutôt que les traiter isolément dès qu'une question porte sur plusieurs d'entre eux, et ne jamais négliger un document du corpus."
    ],
    aRetenir: [
      "Depuis la session 2025 : \"analyse de corpus\", pas \"synthèse\" — 2 à 3 documents, épreuve de 3h, notée sur 10 points",
      "2 à 4 questions à traiter : sur 1 document, sur 2 documents (confrontation), ou sur tout le corpus",
      "L'interprétation personnelle nuancée et argumentée est centrale — ce n'est plus un exercice neutre",
      "Introduction/conclusion standardisées non attendues ; de brèves citations du corpus sont autorisées"
    ],
    exemple: {
      langage: null,
      code:
`Réponse faible (traite les documents isolément) :
"Le document 1 dit que... Le document 2 dit que..."

Réponse attendue (confronte et interprète) :
"Si les deux documents s'accordent sur [idée commune], le
document 2 nuance cependant la position du document 1 en
soulignant que [nuance] — ce qui invite à se demander si..."`
    },
    exempleExplique: [
      "La première formulation résume chaque document séparément, sans les croiser : c'est un résumé juxtaposé, pas une réponse à une question de confrontation.",
      "La seconde formulation confronte les documents ET propose une interprétation personnelle nuancée, exactement ce qui est attendu depuis la réforme."
    ],
    erreursFrequentes: [
      "Utiliser encore la méthode de l'ancienne synthèse (plan thématique rédigé, ton neutre, avis interdit) : ce n'est plus le format actuel de l'épreuve depuis la session 2025.",
      "Traiter les documents un par un sur une question de confrontation, au lieu de croiser explicitement leurs idées.",
      "Rester purement descriptif alors qu'une interprétation personnelle argumentée est justement ce qui est noté."
    ],
    astuce: "Si tu utilises un manuel ou une fiche plus ancienne qui parle de \"synthèse\" avec plan thématique obligatoire et interdiction de tout avis personnel, méfie-toi : elle décrit probablement le format d'avant la réforme. Vérifie toujours la date de la ressource.",
    exercicesIds: ['ex-cg-synthese-qcm-1', 'ex-cg-synthese-vf-1']
  },
  {
    id: 'cg-ecriture-personnelle',
    matiere: 'culture-generale',
    parcoursId: 'culture-generale',
    niveau: 2,
    ordre: 1,
    titre: "L'essai argumenté : construire une réflexion personnelle",
    competence: 'cg.ecriture-personnelle',
    difficulte: 'moyen',
    annees: ['2025-2026', '2026-2027'],
    objectif: "Comprendre l'objectif et la méthode de l'essai argumenté, seconde partie de l'épreuve de Culture générale et expression.",
    explication: [
      "La seconde partie de l'épreuve (notée sur 10 points, comme l'analyse de corpus) est un essai : chaque candidat a le choix ENTRE DEUX SUJETS pour rédiger un texte structuré, argumentatif et personnel, en lien avec le thème annuel national.",
      "Contrairement à l'analyse de corpus, qui reste ancrée dans l'interprétation des documents fournis, l'essai est une réflexion autonome : tu mobilises ta culture générale, tes lectures, l'actualité, sans être limité aux documents du corpus étudié.",
      "Une bonne argumentation combine plusieurs types d'arguments : des exemples concrets et précis (tirés de sa culture générale, de l'actualité, d'œuvres...), et un raisonnement logique qui relie chaque idée à la question posée.",
      "La structure classique reste : une introduction qui présente la question et annonce le plan, des paragraphes qui développent chacun UNE idée principale illustrée par un exemple, et une conclusion qui répond clairement à la question posée. Nuancer sa position (\"certes... cependant...\") montre une réflexion plus mature qu'une position uniquement tranchée."
    ],
    aRetenir: [
      "Choix entre DEUX sujets proposés, en lien avec le thème annuel national",
      "Réflexion autonome : pas limitée aux documents du corpus, contrairement à l'analyse de corpus",
      "Chaque paragraphe = UNE idée principale + un exemple précis qui l'illustre",
      "Structure : introduction (annonce la question et le plan), développement, conclusion (répond clairement)"
    ],
    exemple: {
      langage: null,
      code:
`Paragraphe faible :
"Les réseaux sociaux sont mauvais pour les jeunes. Ils
passent trop de temps dessus. C'est un problème."

Paragraphe solide :
"Si les réseaux sociaux permettent de rester connecté à ses
proches, comme le montre leur usage massif pendant les
confinements sanitaires, ils peuvent aussi favoriser un usage
excessif chez les plus jeunes, au point que plusieurs pays
envisagent aujourd'hui d'en limiter l'accès avant un certain
âge."`
    },
    exempleExplique: [
      "Le premier paragraphe affirme sans exemple précis ni nuance : c'est une opinion, pas un raisonnement argumenté.",
      "Le second paragraphe nuance (\"si... mais\"), s'appuie sur un exemple concret et une donnée d'actualité : c'est un vrai développement argumenté."
    ],
    erreursFrequentes: [
      "Répondre par une opinion sans exemple ni justification : une affirmation seule n'est jamais un argument suffisant.",
      "Traiter plusieurs idées dans un même paragraphe : un paragraphe = une idée, clairement développée et illustrée.",
      "Rester sur une position uniquement tranchée sans jamais nuancer : cela donne souvent une impression de réflexion superficielle."
    ],
    astuce: "Avant de rédiger un paragraphe, résume-le en une seule phrase (\"Ce paragraphe démontre que...\") : si tu n'arrives pas à la formuler clairement, c'est que l'idée n'est pas encore assez précise.",
    exercicesIds: ['ex-cg-ecriture-qcm-1', 'ex-cg-ecriture-vf-1']
  },
  {
    id: 'cg-theme-vrai-faux',
    matiere: 'culture-generale',
    parcoursId: 'culture-generale',
    niveau: 3,
    ordre: 1,
    titre: 'Le thème 2026-2027 : "Le vrai du faux"',
    competence: 'cg.theme-vrai-faux',
    difficulte: 'moyen',
    annees: ['2026-2027'],
    objectif: "Connaître la problématique officielle du thème national de l'année et ses grands axes de réflexion, pour aborder efficacement le corpus comme l'essai.",
    explication: [
      "Le thème national de Culture générale et expression pour la session 2027 (donc pour l'année scolaire 2026-2027) est \"Le vrai du faux\". Il a été publié au Bulletin officiel de l'enseignement supérieur le 1er avril 2026, dans le cadre fixé par l'arrêté du 13 juillet 2023.",
      "La problématique officielle part d'un constat : notre époque a de plus en plus de mal à distinguer le vrai du faux, submergée par des manipulations de discours et surtout d'images, qui peuvent aller jusqu'à fabriquer des documents, des témoignages, voire des univers entièrement artificiels.",
      "Deux grands axes de réflexion se dégagent. Un axe d'actualité et numérique : désinformation, fake news, deepfakes, manipulation de l'image, rôle de l'intelligence artificielle dans la production de faux contenus. Un axe plus culturel et esthétique : la fiction, l'illusion artistique (le trompe-l'œil, la contrefaçon), qui interroge ce que le faux peut révéler de vrai — un tableau très réaliste ou un roman peuvent \"mentir\" tout en disant quelque chose de vrai sur le monde.",
      "Point de nuance essentiel : le thème n'invite pas seulement à dénoncer le faux comme une menace. Il invite aussi à se demander ce que le faux peut avoir de fécond ou de révélateur (le plaisir de la fiction, la vérité que peut révéler une illusion réussie). Réduire sa réflexion à \"le faux c'est mal, il faut lutter contre\" appauvrirait ce qui est attendu."
    ],
    aRetenir: [
      'Thème officiel : "Le vrai du faux" — session 2027, année scolaire 2026-2027',
      'Axe actualité/numérique : désinformation, fake news, deepfakes, intelligence artificielle',
      "Axe culturel/esthétique : fiction, illusion artistique, trompe-l'œil, contrefaçon",
      'Le faux n\'est pas systématiquement à condamner : il peut aussi révéler une forme de vérité (art, fiction)'
    ],
    exemple: {
      langage: null,
      code:
`Anecdote antique souvent citée sur ce thème (rapportée par
Pline l'Ancien) :

Le peintre grec Zeuxis aurait peint des raisins si
ressemblants que des oiseaux tentèrent de venir les picorer.
Mais Zeuxis se désola : s'il avait aussi bien réussi l'enfant
qui figurait sur la même toile, les oiseaux auraient dû avoir
peur de lui et s'enfuir.`
    },
    exempleExplique: [
      "L'anecdote illustre la puissance de l'illusion picturale (le trompe-l'œil) : une imitation si parfaite qu'elle trompe la perception, jusqu'à tromper des oiseaux eux-mêmes.",
      "Mais elle sert aussi à nuancer : Zeuxis juge son propre travail imparfait précisément parce que l'illusion n'est pas totale sur l'enfant — ce qui interroge la notion de mimésis (l'art comme imitation du réel) déjà théorisée par Aristote, et le plaisir particulier que procure une illusion réussie."
    ],
    erreursFrequentes: [
      "Réduire le thème au seul axe numérique (fake news, IA) en oubliant complètement l'axe culturel et esthétique (fiction, art, illusion) tout aussi central dans la problématique officielle.",
      "Traiter le \"faux\" comme une catégorie uniquement négative, sans jamais interroger ce qu'il peut avoir de créateur ou de révélateur.",
      "Confondre les notions : désinformation (intention de tromper), fiction (accord implicite sur l'irréel, sans intention de tromper) et erreur (absence d'intention) ne sont pas la même chose face au \"faux\"."
    ],
    astuce: "Pour chaque document ou exemple que tu étudies sur ce thème, pose-toi systématiquement deux questions : \"en quoi est-ce faux (ou vrai) ?\" ET \"qu'est-ce que ce faux (ou ce vrai) révèle ?\" — la seconde question est souvent celle qui apporte la vraie valeur ajoutée dans une copie.",
    exercicesIds: ['ex-cg-theme-qcm-1', 'ex-cg-theme-vf-1', 'ex-cg-theme-reponse-1']
  },

  // -------------------------------------------------------- CEJM (suite) --
  {
    id: 'cejm-theme2-regulation',
    matiere: 'cejm',
    parcoursId: 'cejm',
    niveau: 2,
    ordre: 1,
    titre: 'La régulation de l\'activité économique : l\'État et la concurrence',
    competence: 'cejm.regulation',
    difficulte: 'moyen',
    annees: ['2025-2026', '2026-2027'],
    objectif: "Comprendre pourquoi et comment l'État intervient dans l'économie, notamment pour réguler la concurrence.",
    explication: [
      "Le marché ne s'autorégule pas toujours parfaitement : l'État intervient pour corriger certains dysfonctionnements (défaillances de marché) — par exemple quand une entreprise abuse d'une position dominante, ou quand une activité génère des effets négatifs sur des tiers sans que le marché n'en tienne compte spontanément.",
      "Le droit de la concurrence interdit notamment les ENTENTES (accords entre entreprises concurrentes pour fausser le jeu du marché, par exemple en fixant des prix communs) et l'ABUS DE POSITION DOMINANTE (une entreprise qui détient une part de marché très importante et en abuse pour évincer ses concurrents).",
      "En France, l'Autorité de la concurrence contrôle notamment les opérations de concentration (fusions, rachats) qui pourraient réduire excessivement la concurrence sur un marché, et peut infliger de lourdes amendes en cas d'entente ou d'abus constaté.",
      "Au niveau européen, la Commission européenne joue un rôle similaire pour les marchés qui dépassent les frontières d'un seul État membre."
    ],
    aRetenir: [
      "L'État intervient pour corriger les défaillances de marché (positions dominantes, effets négatifs non pris en compte)",
      'Entente illégale : accord entre concurrents pour fausser la concurrence (ex : fixer des prix ensemble)',
      'Abus de position dominante : une entreprise en position de force en abuse pour évincer ses concurrents',
      "L'Autorité de la concurrence (France) et la Commission européenne contrôlent le respect de ces règles"
    ],
    exemple: {
      langage: null,
      code:
`Plusieurs fabricants d'un même produit se réunissent
secrètement et décident ensemble d'augmenter leurs prix de
10% le même mois, sans qu'aucun ne se fasse concurrence sur
ce point.

Ceci constitue une entente illicite, sanctionnable par
l'Autorité de la concurrence, même si chaque entreprise
reste juridiquement indépendante.`
    },
    exempleExplique: [
      "Le problème n'est pas que les prix augmentent (les entreprises restent libres de fixer leurs prix), mais que cette hausse résulte d'un ACCORD CONCERTÉ plutôt que d'une décision indépendante de chaque entreprise.",
      "C'est justement cette absence de concurrence réelle entre elles qui constitue l'infraction : le consommateur n'a plus le choix d'un prix plus bas ailleurs."
    ],
    erreursFrequentes: [
      "Croire qu'une entreprise en position dominante est automatiquement en infraction : la position dominante n'est pas interdite en soi, seul son ABUS l'est.",
      "Confondre un simple alignement des prix (qui peut arriver naturellement sur un marché concurrentiel) avec une entente organisée entre concurrents.",
      "Penser que seule une loi nationale encadre la concurrence : le droit européen s'applique dès que le marché concerné dépasse les frontières d'un seul pays."
    ],
    astuce: "Pour repérer une entente illicite dans un cas pratique, cherche un mot-clé : une CONCERTATION ou un ACCORD entre concurrents. Sans coordination entre eux, il n'y a pas d'entente, même si leurs comportements se ressemblent.",
    exercicesIds: ['ex-cejm-regulation-qcm-1', 'ex-cejm-regulation-vf-1']
  },
  {
    id: 'cejm-theme3-organisation',
    matiere: 'cejm',
    parcoursId: 'cejm',
    niveau: 3,
    ordre: 1,
    titre: "L'organisation de l'entreprise : production et création de valeur",
    competence: 'cejm.organisation',
    difficulte: 'moyen',
    annees: ['2025-2026', '2026-2027'],
    objectif: "Comprendre comment une entreprise organise sa production et crée de la valeur.",
    explication: [
      "Produire, c'est combiner des ressources (facteurs de production) pour créer des biens ou des services. Les deux grands facteurs de production sont le TRAVAIL (les salariés) et le CAPITAL (les machines, locaux, outils informatiques...).",
      "La chaîne de valeur décrit l'ensemble des activités qui, de la conception à la vente, contribuent à créer de la valeur pour le client final. Elle comprend des activités principales (production, logistique, commercialisation) et des activités de soutien (ressources humaines, système d'information, achats).",
      "Une entreprise peut choisir de réaliser elle-même une activité (INTERNALISATION) ou de la confier à un prestataire extérieur (EXTERNALISATION / sous-traitance). Par exemple, externaliser l'hébergement de ses serveurs auprès d'un prestataire cloud plutôt que de gérer ses propres data centers.",
      "La productivité mesure l'efficacité de la production : elle rapporte une quantité produite aux ressources utilisées pour la produire."
    ],
    aRetenir: [
      'Facteurs de production : travail (salariés) et capital (machines, outils, y compris informatiques)',
      'Chaîne de valeur : activités principales (production, logistique, vente) + activités de soutien (RH, système d\'information)',
      'Internalisation (faire soi-même) vs externalisation (sous-traiter à un prestataire)',
      'Productivité = quantité produite rapportée aux ressources utilisées'
    ],
    exemple: {
      langage: null,
      code:
`Une entreprise de développement logiciel choisit d'externaliser
l'hébergement de ses applications chez un fournisseur cloud
plutôt que d'acheter et de maintenir ses propres serveurs.

Elle internalise en revanche le développement du code, jugé
au cœur de son savoir-faire.`
    },
    exempleExplique: [
      "L'hébergement (infrastructure) est externalisé car ce n'est pas le cœur de métier de l'entreprise, et un spécialiste du cloud peut le faire plus efficacement.",
      "Le développement du code reste interne car c'est précisément la compétence clé de cette entreprise : l'externaliser ferait perdre le contrôle sur ce qui fait sa valeur."
    ],
    erreursFrequentes: [
      "Penser que l'externalisation est toujours la meilleure option : elle fait perdre en contrôle direct et peut créer une dépendance envers le prestataire.",
      "Confondre facteur travail et facteur capital : le salarié qui utilise un ordinateur EST le facteur travail, l'ordinateur lui-même est le facteur capital.",
      "Oublier que les activités de soutien (comme le système d'information) participent aussi à la création de valeur, même si elles ne sont pas directement visibles par le client."
    ],
    astuce: "Pour décider si une activité doit être internalisée ou externalisée, demande-toi : \"est-ce au cœur de notre savoir-faire distinctif, ou un spécialiste externe pourrait-il le faire aussi bien, voire mieux, pour moins cher ?\"",
    exercicesIds: ['ex-cejm-organisation-qcm-1', 'ex-cejm-organisation-reponse-1']
  },
  {
    id: 'cejm-theme5-travail',
    matiere: 'cejm',
    parcoursId: 'cejm',
    niveau: 5,
    ordre: 1,
    titre: 'Les mutations du travail : contrats et relations sociales',
    competence: 'cejm.travail',
    difficulte: 'moyen',
    annees: ['2025-2026', '2026-2027'],
    objectif: 'Connaître les principaux types de contrats de travail et les grands principes du droit du travail.',
    explication: [
      "Le CDI (contrat à durée indéterminée) est la forme normale et générale du contrat de travail en France : il n'a pas de date de fin prévue. Le CDD (contrat à durée déterminée) ne peut être utilisé que pour des cas précis prévus par la loi (remplacement d'un salarié absent, surcroît temporaire d'activité...), pour une durée limitée.",
      "Le salarié est lié à son employeur par un LIEN DE SUBORDINATION juridique : l'employeur peut lui donner des directives, contrôler son travail et le sanctionner en cas de manquement. C'est ce lien qui distingue un salarié d'un travailleur indépendant.",
      "Le droit du travail encadre notamment la durée du travail (35h/semaine en principe, heures supplémentaires possibles), les congés payés, et les conditions de rupture du contrat (démission, licenciement, rupture conventionnelle).",
      "Le travail évolue avec le numérique : télétravail, statut d'auto-entrepreneur, plateformes numériques (avec des débats sur la qualification de leurs travailleurs) sont des sujets de mutation actuelle du monde du travail."
    ],
    aRetenir: [
      'CDI : forme normale et générale du contrat de travail, sans date de fin',
      'CDD : cas précis prévus par la loi, durée limitée',
      'Lien de subordination : ce qui distingue juridiquement un salarié d\'un indépendant',
      'Durée légale du travail : 35h/semaine en principe (heures supplémentaires possibles)'
    ],
    exemple: {
      langage: null,
      code:
`Une entreprise de développement recrute un développeur pour
remplacer une salariée en congé maternité pendant 6 mois.

Elle doit obligatoirement utiliser un CDD, en précisant le
motif exact (remplacement) et la durée, et non un CDI, car
le poste n'a pas vocation à durer indéfiniment.`
    },
    exempleExplique: [
      "Le motif \"remplacement d'une salariée absente\" est un des cas légalement autorisés pour recourir à un CDD.",
      "Utiliser un CDI serait possible juridiquement, mais l'entreprise choisit le CDD car elle sait que le besoin est temporaire et lié à une durée précise."
    ],
    erreursFrequentes: [
      "Croire qu'une entreprise peut utiliser un CDD librement, pour n'importe quelle raison : la loi encadre strictement les motifs autorisés.",
      "Confondre lien de subordination et simple relation contractuelle : un client qui donne des consignes précises à un prestataire freelance ne crée pas forcément un lien de subordination juridique.",
      "Penser que 35h/semaine est une limite absolue impossible à dépasser : des heures supplémentaires restent possibles, encadrées par la loi et les accords collectifs."
    ],
    astuce: "Pour distinguer salarié et indépendant dans un cas pratique, cherche qui a le pouvoir de direction : si une personne reçoit des ORDRES précis et peut être SANCTIONNÉE en cas de non-respect, le lien de subordination — donc le salariat — est probablement caractérisé.",
    exercicesIds: ['ex-cejm-travail-qcm-1', 'ex-cejm-travail-vf-1']
  },
  {
    id: 'cejm-theme6-strategie',
    matiere: 'cejm',
    parcoursId: 'cejm',
    niveau: 6,
    ordre: 1,
    titre: 'Les choix stratégiques de l\'entreprise : croissance et gouvernance',
    competence: 'cejm.strategie',
    difficulte: 'difficile',
    annees: ['2025-2026', '2026-2027'],
    objectif: "Connaître les grandes options de croissance d'une entreprise et les enjeux de sa gouvernance.",
    explication: [
      "Une entreprise peut croître de façon INTERNE (en développant elle-même de nouvelles capacités) ou EXTERNE (en rachetant ou fusionnant avec une autre entreprise). La croissance externe est souvent plus rapide, mais plus risquée (intégration de deux cultures d'entreprise différentes, coût élevé du rachat).",
      "Une entreprise peut aussi s'allier avec d'autres (partenariat, joint-venture) pour partager les risques et les compétences sur un projet commun, sans forcément fusionner.",
      "La gouvernance d'entreprise désigne l'ensemble des règles et des acteurs qui encadrent la direction de l'entreprise : le dirigeant, le conseil d'administration (qui contrôle et oriente les grandes décisions), et les actionnaires (qui apportent le capital).",
      "Un enjeu actuel de la gouvernance est la prise en compte d'intérêts au-delà des seuls actionnaires : salariés, clients, environnement — on parle de responsabilité sociétale des entreprises (RSE)."
    ],
    aRetenir: [
      'Croissance interne (développement propre) vs croissance externe (rachat, fusion)',
      'Alliance stratégique / partenariat : coopérer sans fusionner',
      'Gouvernance : dirigeant, conseil d\'administration, actionnaires',
      'RSE : prendre en compte d\'autres parties prenantes que les seuls actionnaires (salariés, environnement, société)'
    ],
    exemple: {
      langage: null,
      code:
`Une PME de développement web souhaite proposer une nouvelle
offre de cybersécurité.

Option 1 (croissance interne) : elle forme ses développeurs
actuels et recrute progressivement des experts en sécurité.

Option 2 (croissance externe) : elle rachète une petite
entreprise déjà spécialisée en cybersécurité.`
    },
    exempleExplique: [
      "L'option 1 est plus lente mais moins risquée financièrement, et permet de garder une culture d'entreprise homogène.",
      "L'option 2 est plus rapide (l'expertise est acquise immédiatement) mais implique un coût de rachat et un risque d'intégration entre les deux équipes."
    ],
    erreursFrequentes: [
      "Penser que la croissance externe est toujours supérieure car plus rapide : elle comporte des risques spécifiques (intégration, coût, parfois échec du rapprochement).",
      "Confondre alliance stratégique et croissance externe : dans une alliance, les entreprises restent juridiquement indépendantes, contrairement à une fusion ou un rachat.",
      "Réduire la gouvernance aux seuls actionnaires : le conseil d'administration et, de plus en plus, d'autres parties prenantes (RSE) jouent aussi un rôle."
    ],
    astuce: "Pour distinguer croissance interne et externe dans un cas pratique, pose-toi la question : \"l'entreprise développe-t-elle une ressource elle-même, ou l'acquiert-elle en intégrant une autre structure déjà existante ?\"",
    exercicesIds: ['ex-cejm-strategie-qcm-1', 'ex-cejm-strategie-reponse-1']
  },

  // ------------------------------------------------------- Maths (suite) --
  {
    id: 'maths-suites',
    matiere: 'maths',
    parcoursId: 'maths',
    niveau: 3,
    ordre: 1,
    titre: 'Les suites numériques : arithmétiques et géométriques',
    competence: 'maths.suites',
    difficulte: 'moyen',
    annees: ['2025-2026', '2026-2027'],
    objectif: 'Savoir reconnaître une suite arithmétique ou géométrique et calculer un terme.',
    explication: [
      "Une suite numérique associe à chaque entier naturel n un nombre réel, noté u_n (le terme de rang n). Une suite peut être définie explicitement (formule donnant u_n directement) ou par récurrence (chaque terme dépend du précédent).",
      "Une suite ARITHMÉTIQUE passe d'un terme au suivant en AJOUTANT toujours la même valeur, appelée raison r : u_(n+1) = u_n + r. Le terme général s'écrit u_n = u_0 + n×r.",
      "Une suite GÉOMÉTRIQUE passe d'un terme au suivant en MULTIPLIANT toujours par la même valeur, appelée raison q : u_(n+1) = u_n × q. Le terme général s'écrit u_n = u_0 × q^n.",
      "En informatique, les suites modélisent par exemple une croissance régulière de données (arithmétique) ou une croissance exponentielle comme une capacité de stockage qui double régulièrement (géométrique)."
    ],
    aRetenir: [
      'Suite arithmétique : on ADDITIONNE la raison r à chaque étape ; u_n = u_0 + n×r',
      'Suite géométrique : on MULTIPLIE par la raison q à chaque étape ; u_n = u_0 × q^n',
      'Suite croissante : arithmétique si r > 0, géométrique si q > 1 (pour des termes positifs)',
      'Pour reconnaître le type : différence constante → arithmétique, quotient constant → géométrique'
    ],
    exemple: {
      langage: null,
      code:
`Suite : 3, 7, 11, 15, 19...

7 - 3 = 4
11 - 7 = 4
15 - 11 = 4

La différence est constante (r = 4) : suite arithmétique de
raison 4 et de premier terme u_0 = 3.

u_n = 3 + 4n`
    },
    exempleExplique: [
      "On calcule la différence entre chaque terme consécutif : elle vaut toujours 4, ce qui confirme qu'il s'agit d'une suite arithmétique.",
      "La formule u_n = u_0 + n×r permet de calculer directement n'importe quel terme : par exemple, u_10 = 3 + 4×10 = 43."
    ],
    erreursFrequentes: [
      "Confondre le test d'une suite arithmétique (différence constante) et celui d'une suite géométrique (quotient constant).",
      "Se tromper d'indice de départ : selon l'énoncé, une suite peut commencer à u_0 ou à u_1, ce qui décale la formule du terme général.",
      "Oublier que la raison peut être négative (suite décroissante) ou, pour une géométrique, comprise entre 0 et 1 (suite qui tend vers 0)."
    ],
    astuce: "Pour retenir la différence : arithmétique → on ADDITIONNE, géométrique → on MULTIPLIE (pense à une croissance \"géométrique\", donc rapide et multiplicative).",
    exercicesIds: ['ex-maths-suites-qcm-1', 'ex-maths-suites-reponse-1']
  },
  {
    id: 'maths-graphes',
    matiere: 'maths',
    parcoursId: 'maths',
    niveau: 4,
    ordre: 1,
    titre: "Les graphes et l'ordonnancement de tâches",
    competence: 'maths.graphes',
    difficulte: 'difficile',
    annees: ['2025-2026', '2026-2027'],
    objectif: "Comprendre le vocabulaire de base des graphes et l'utilité d'un graphe pour ordonnancer des tâches.",
    explication: [
      "Un graphe est composé de SOMMETS (les nœuds) reliés par des ARÊTES. En informatique, les graphes modélisent énormément de situations : un réseau informatique, les pages d'un site web reliées par des liens, ou l'enchaînement de tâches d'un projet.",
      "Un graphe ORIENTÉ a des liaisons qui n'ont de sens que dans une seule direction (on parle d'ARCS plutôt que d'arêtes) — par exemple, une tâche B qui ne peut commencer qu'après la fin d'une tâche A.",
      "L'ordonnancement de tâches (méthode PERT ou MPM) utilise un graphe orienté pour représenter les dépendances entre tâches, et calculer la durée totale minimale du projet ainsi que le CHEMIN CRITIQUE : la suite de tâches qui, si elle prend du retard, retarde tout le projet.",
      "Le chemin critique est le chemin le plus LONG en durée entre le début et la fin du projet — c'est celui qui détermine la durée totale minimale."
    ],
    aRetenir: [
      'Graphe = sommets (nœuds) + arêtes (liaisons). Graphe orienté : les liaisons (arcs) ont un sens',
      'PERT / MPM : méthodes d\'ordonnancement de tâches basées sur un graphe orienté',
      'Le chemin critique est le chemin le plus LONG en durée : il détermine la durée minimale totale du projet',
      'Retarder une tâche du chemin critique retarde tout le projet ; hors chemin critique, ce n\'est pas systématique'
    ],
    exemple: {
      langage: null,
      code:
`Projet avec 3 tâches :
A (3 jours) doit être terminée avant que B (5 jours) commence.
C (2 jours) se déroule en parallèle, indépendamment.

Chemin A → B : 3 + 5 = 8 jours
Chemin C : 2 jours

Le chemin critique est A → B (8 jours) : c'est lui qui fixe
la durée totale du projet, pas C.`
    },
    exempleExplique: [
      "Même si C prend du retard (tant qu'il reste sous 8 jours), la durée totale du projet ne change pas, car ce n'est pas le chemin le plus long.",
      "Un seul jour de retard sur A ou sur B décale en revanche la fin du projet d'autant : c'est pour cela qu'on l'appelle \"critique\"."
    ],
    erreursFrequentes: [
      "Croire que le chemin critique est le chemin le plus COURT : c'est l'inverse, c'est le chemin le plus LONG en durée qui est critique.",
      "Oublier qu'une tâche peut avoir plusieurs prédécesseurs ou successeurs dans un graphe d'ordonnancement complexe.",
      "Confondre graphe orienté et non orienté : un lien de dépendance entre tâches ('A avant B') est nécessairement orienté."
    ],
    astuce: "Pour trouver le chemin critique, calcule la durée totale de CHAQUE chemin possible du début à la fin du projet, et retiens le plus long : c'est presque toujours une question d'addition, pas de calcul complexe.",
    exercicesIds: ['ex-maths-graphes-qcm-1', 'ex-maths-graphes-reponse-1']
  },
  {
    id: 'maths-matrices',
    matiere: 'maths',
    parcoursId: 'maths',
    niveau: 5,
    ordre: 1,
    titre: 'Le calcul matriciel : notions de base',
    competence: 'maths.matrices',
    difficulte: 'difficile',
    annees: ['2025-2026', '2026-2027'],
    objectif: 'Savoir représenter des données sous forme de matrice et effectuer une addition et une multiplication simples.',
    explication: [
      "Une matrice est un tableau de nombres organisé en lignes et en colonnes. On note sa taille m×n (m lignes, n colonnes). Elle permet de représenter de façon compacte des données liées entre elles.",
      "Pour ADDITIONNER deux matrices, elles doivent avoir EXACTEMENT la même taille : on additionne simplement les valeurs situées à la même position.",
      "Pour MULTIPLIER deux matrices A (m×n) et B (n×p), le nombre de COLONNES de A doit être égal au nombre de LIGNES de B. Le résultat est une matrice m×p.",
      "En informatique, les matrices interviennent par exemple dans le traitement d'images (une image est une matrice de pixels) ou les graphes (une matrice d'adjacence représente les connexions entre sommets)."
    ],
    aRetenir: [
      'Une matrice m×n a m lignes et n colonnes',
      'Addition de matrices : seulement si elles ont la même taille, terme à terme',
      'Multiplication A×B : possible seulement si (colonnes de A) = (lignes de B)',
      'Le résultat de A(m×n) × B(n×p) est une matrice de taille m×p'
    ],
    exemple: {
      langage: null,
      code:
`A = [1 2]      B = [5 6]
    [3 4]          [7 8]

A + B = [1+5  2+6] = [6  8]
        [3+7  4+8]   [10 12]`
    },
    exempleExplique: [
      "A et B ont toutes les deux la taille 2×2 : l'addition est donc possible.",
      "Chaque case du résultat additionne simplement les deux valeurs situées à la même position dans A et dans B (en haut à gauche : 1 + 5 = 6)."
    ],
    erreursFrequentes: [
      "Essayer d'additionner deux matrices de tailles différentes : l'addition n'est possible QUE si les deux matrices ont exactement la même taille.",
      "Confondre l'ordre dans une multiplication de matrices : A×B n'est en général PAS égal à B×A.",
      "Se tromper dans les conditions de compatibilité pour multiplier : il faut (colonnes de A) = (lignes de B), pas l'inverse."
    ],
    astuce: "Pour vérifier si A×B est possible, écris les deux tailles côte à côte, par exemple (2×3) et (3×4) : si les deux nombres du milieu sont identiques, la multiplication est possible, et le résultat a la taille des deux nombres extérieurs (ici 2×4).",
    exercicesIds: ['ex-maths-matrices-qcm-1', 'ex-maths-matrices-vf-1']
  },
  {
    id: 'maths-ensembles',
    matiere: 'maths',
    parcoursId: 'maths',
    niveau: 6,
    ordre: 1,
    titre: 'Éléments de la théorie des ensembles',
    competence: 'maths.ensembles',
    difficulte: 'moyen',
    annees: ['2025-2026', '2026-2027'],
    objectif: 'Connaître le vocabulaire de base des ensembles et savoir utiliser union, intersection et complémentaire.',
    explication: [
      "Un ensemble est une collection d'éléments distincts, sans ordre ni répétition, souvent noté entre accolades : E = {1, 2, 3}. L'appartenance d'un élément se note x ∈ E.",
      "L'UNION de deux ensembles A ∪ B contient tous les éléments qui sont dans A OU dans B (ou les deux). L'INTERSECTION A ∩ B ne contient que les éléments qui sont dans A ET dans B en même temps.",
      "Le COMPLÉMENTAIRE d'un ensemble A, par rapport à un ensemble de référence, contient tous les éléments de cet ensemble de référence qui ne sont PAS dans A.",
      "Ces notions correspondent directement aux opérateurs logiques ET, OU, NON vus en calcul booléen, et se retrouvent en programmation dans des collections comme `HashSet<T>` en C#."
    ],
    aRetenir: [
      'x ∈ E signifie "x appartient à l\'ensemble E"',
      'Union (A ∪ B) : éléments dans A OU dans B (correspond à l\'opérateur logique OU)',
      'Intersection (A ∩ B) : éléments dans A ET dans B (correspond à l\'opérateur logique ET)',
      'Complémentaire : tout ce qui n\'est PAS dans l\'ensemble (correspond à l\'opérateur logique NON)'
    ],
    exemple: {
      langage: null,
      code:
`A = {1, 2, 3, 4}
B = {3, 4, 5, 6}

A ∪ B = {1, 2, 3, 4, 5, 6}
A ∩ B = {3, 4}`
    },
    exempleExplique: [
      "L'union rassemble TOUS les éléments présents dans au moins un des deux ensembles, sans les répéter.",
      "L'intersection ne garde que les éléments COMMUNS aux deux ensembles : seuls 3 et 4 apparaissent à la fois dans A et dans B."
    ],
    erreursFrequentes: [
      "Répéter un élément commun dans l'union : un ensemble ne contient jamais deux fois le même élément.",
      "Confondre union et intersection : l'union est plus \"large\" (OU), l'intersection est plus \"restrictive\" (ET).",
      "Oublier que l'ordre des éléments n'a pas d'importance dans un ensemble, contrairement à une liste ou un tableau en programmation."
    ],
    astuce: "Fais le lien avec ce que tu connais déjà : union = OU, intersection = ET. Les diagrammes de Venn (deux cercles qui se chevauchent) aident énormément à visualiser ces deux notions.",
    exercicesIds: ['ex-maths-ensembles-qcm-1', 'ex-maths-ensembles-completer-1']
  },

  // ----------------------------------------------------- Anglais (suite) --
  {
    id: 'anglais-oral',
    matiere: 'anglais',
    parcoursId: 'anglais',
    niveau: 3,
    ordre: 1,
    titre: "S'exprimer à l'oral : l'entretien professionnel et la présentation",
    competence: 'anglais.oral',
    difficulte: 'moyen',
    annees: ['2025-2026', '2026-2027'],
    objectif: "Connaître les expressions clés pour se présenter et répondre aux questions courantes d'un entretien en anglais.",
    explication: [
      "Un entretien professionnel en anglais commence souvent par \"Tell me about yourself\". Il faut structurer sa réponse : formation actuelle, expérience (même un stage), compétences techniques, motivation — en restant concis (moins de 2 minutes).",
      "Des questions reviennent presque systématiquement : \"What are your strengths/weaknesses?\", \"Why do you want to work here?\", \"Where do you see yourself in 5 years?\". Préparer des réponses structurées à l'avance aide énormément.",
      "Pour parler d'une expérience passée, on utilise souvent le PRESENT PERFECT (\"I have worked on...\") pour une expérience sans date précise, ou le PAST SIMPLE (\"I worked on... last year\") quand on précise le moment.",
      "Pour une présentation orale, structurer son discours avec des connecteurs clairs aide la compréhension : \"First...\", \"Then...\", \"As a result...\", \"To conclude...\"."
    ],
    aRetenir: [
      'Structurer sa présentation : formation, expérience, compétences, motivation — en restant concis',
      'Questions classiques : strengths/weaknesses, why this company, where in 5 years',
      'Present perfect (I have worked on...) = sans date précise ; Past simple (I worked... last year) = moment précisé',
      'Connecteurs de présentation : First, Then, As a result, To conclude'
    ],
    exemple: {
      langage: null,
      code:
`"I have worked on a school project where I developed a small
web application in C#. Last year, I did a two-week internship
in a local IT company, where I helped the team fix bugs and
write documentation."`
    },
    exempleExplique: [
      "\"I have worked on a school project\" : present perfect, car aucune date précise n'est donnée.",
      "\"Last year, I did a two-week internship\" : past simple, car un moment précis (\"last year\") est mentionné."
    ],
    erreursFrequentes: [
      "Répondre \"Tell me about yourself\" en récitant tout son CV dans le détail : il faut sélectionner l'essentiel et rester concis.",
      "Utiliser systématiquement le past simple même sans date précise : sans moment précisé, le present perfect est souvent plus naturel.",
      "Ne préparer aucune réponse aux questions classiques : ces questions sont quasiment certaines de tomber, les anticiper change beaucoup la confiance à l'oral."
    ],
    astuce: "Prépare et entraîne-toi à voix haute sur trois réponses clés avant tout entretien en anglais : \"Tell me about yourself\", \"What are your strengths?\" et \"Why this company?\" — elles couvrent une grande partie des entretiens réels.",
    exercicesIds: ['ex-anglais-oral-qcm-1', 'ex-anglais-oral-completer-1']
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
