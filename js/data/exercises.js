// ============================================================================
// exercises.js — Banque d'exercices
// ----------------------------------------------------------------------------
// 8 types d'exercices sont représentés (voir moteur dans js/engine/exerciseEngine.js) :
//   qcm | vrai-faux | reponse-courte | trouver-erreur | corriger-code |
//   completer-code | lire-code | programmation
//
// Chaque exercice porte une `competence` (tag utilisé pour le suivi des
// erreurs, la progression et les recommandations). Plusieurs exercices
// partagent la même compétence à des difficultés différentes : c'est ce qui
// permet au moteur de recommandation de proposer une difficulté croissante.
// ============================================================================

export const EXERCISES = [

  // -------------------------------------------------------- C# — variables
  {
    id: 'ex-csharp-var-qcm-1',
    matiere: 'slam-prog', chapitre: 'csharp-n1-variables', competence: 'csharp.variables',
    langage: 'csharp', difficulte: 'facile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: "Quel type de donnée C# utiliser pour stocker le prix d'un article, par exemple 12.99 ?",
    options: [
      { id: 'a', texte: 'int' }, { id: 'b', texte: 'double' },
      { id: 'c', texte: 'string' }, { id: 'd', texte: 'bool' }
    ],
    correctes: ['b'],
    explication: "Un prix peut avoir des décimales : `int` ne les gère pas, `string` empêcherait tout calcul, `bool` ne stocke que vrai/faux. `double` est le bon choix."
  },
  {
    id: 'ex-csharp-var-qcm-2',
    matiere: 'slam-prog', chapitre: 'csharp-n1-variables', competence: 'csharp.variables',
    langage: 'csharp', difficulte: 'facile', type: 'qcm', multiple: true,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Parmi ces déclarations, lesquelles sont syntaxiquement correctes en C# ? (plusieurs réponses possibles)',
    options: [
      { id: 'a', texte: 'int age = 20;' },
      { id: 'b', texte: 'string ville = Lyon;' },
      { id: 'c', texte: 'bool actif = true;' },
      { id: 'd', texte: 'double moyenne = "12.5";' }
    ],
    correctes: ['a', 'c'],
    explication: "b) manque les guillemets autour de Lyon (`\"Lyon\"`). d) essaie de mettre un texte entre guillemets dans un double : `12.5` doit être écrit sans guillemets."
  },
  {
    id: 'ex-csharp-var-vf-1',
    matiere: 'slam-prog', chapitre: 'csharp-n1-variables', competence: 'csharp.variables',
    langage: 'csharp', difficulte: 'facile', type: 'vrai-faux',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'En C#, on peut changer le type d\'une variable après sa déclaration (par exemple transformer un int en string sans conversion explicite).',
    correct: false,
    explication: 'C# est fortement typé : une variable garde son type toute sa vie. Il faut une conversion explicite (`Convert.ToString(...)`, etc.) pour changer de représentation.'
  },
  {
    id: 'ex-csharp-var-completer-1',
    matiere: 'slam-prog', chapitre: 'csharp-n1-variables', competence: 'csharp.variables',
    langage: 'csharp', difficulte: 'facile', type: 'completer-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Complète les types de variables manquants.',
    template: '{{1}} prenom = "Sami";\n{{2}} age = 21;\n{{3}} moyenne = 11.75;',
    trous: [
      { id: 1, accepte: ['string'] },
      { id: 2, accepte: ['int'] },
      { id: 3, accepte: ['double'] }
    ],
    explication: '"Sami" est un texte (`string`), 21 est un entier (`int`), 11.75 a une décimale (`double`).'
  },
  {
    id: 'ex-csharp-var-corriger-1',
    matiere: 'slam-prog', chapitre: 'csharp-n1-variables', competence: 'csharp.variables',
    langage: 'csharp', difficulte: 'facile', type: 'corriger-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Ce programme ne compile pas. Corrige le code dans la zone ci-dessous.',
    codeInitial: 'int prix = 19.99;\nConsole.WriteLine(prix);',
    verif: [{ regex: /double\s+prix/, label: 'prix est déclaré en double' }],
    solution: 'double prix = 19.99;\nConsole.WriteLine(prix);',
    explication: '19.99 a une décimale : le type `int` ne peut pas la contenir. Il fallait déclarer `prix` en `double`.'
  },

  // ------------------------------------------------------- C# — conditions
  {
    id: 'ex-csharp-cond-qcm-1',
    matiere: 'slam-prog', chapitre: 'csharp-n1-conditions', competence: 'csharp.conditions',
    langage: 'csharp', difficulte: 'facile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Que teste la condition `if (age >= 18)` ?',
    options: [
      { id: 'a', texte: 'Que age vaut exactement 18' },
      { id: 'b', texte: 'Que age est supérieur ou égal à 18' },
      { id: 'c', texte: 'Que age est inférieur à 18' },
      { id: 'd', texte: 'Elle affecte la valeur 18 à age' }
    ],
    correctes: ['b'],
    explication: '`>=` est l\'opérateur "supérieur ou égal à". Il ne faut pas le confondre avec `=` (affectation) ni `==` (égalité stricte).'
  },
  {
    id: 'ex-csharp-cond-erreur-1',
    matiere: 'slam-prog', chapitre: 'csharp-n1-conditions', competence: 'csharp.conditions',
    langage: 'csharp', difficulte: 'facile', type: 'trouver-erreur',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Ce programme contient une erreur. Indique la ligne fautive.',
    code: 'int note = 8;\nif (note = 10)\n{\n    Console.WriteLine("Admis");\n}',
    ligneErreur: 2,
    explication: 'Ligne 2 : `note = 10` est une AFFECTATION (un seul `=`), pas une comparaison. Il fallait écrire `note == 10`. De plus, `if` attend une expression de type `bool`, donc ce code ne compile même pas.'
  },
  {
    id: 'ex-csharp-cond-lire-1',
    matiere: 'slam-prog', chapitre: 'csharp-n1-conditions', competence: 'csharp.conditions',
    langage: 'csharp', difficulte: 'moyen', type: 'lire-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Lis attentivement ce programme.',
    code: 'int x = 7;\nif (x % 2 == 0)\n{\n    Console.WriteLine("Pair");\n}\nelse\n{\n    Console.WriteLine("Impair");\n}',
    question: 'Que va afficher ce programme ?',
    reponsesAcceptees: ['impair'],
    explication: '`%` renvoie le reste de la division. 7 % 2 vaut 1 (pas 0), donc la condition `x % 2 == 0` est fausse : on exécute le `else`, qui affiche "Impair".'
  },
  {
    id: 'ex-csharp-cond-prog-1',
    matiere: 'slam-prog', chapitre: 'csharp-n1-conditions', competence: 'csharp.conditions',
    langage: 'csharp', difficulte: 'moyen', type: 'programmation',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Écris une méthode `Mention` qui reçoit une note (double) et renvoie une chaîne : "Félicitations" si note >= 16, "Bien" si note >= 14, "Admis" si note >= 10, sinon "Non admis".',
    codeDepart: 'static string Mention(double note)\n{\n    // ton code ici\n}',
    criteres: [
      { regex: /if\s*\(/, label: 'utilise au moins une condition if' },
      { regex: /return/, label: 'renvoie un résultat avec return' },
      { regex: />=\s*16/, label: 'teste le seuil 16' },
      { regex: />=\s*10/, label: 'teste le seuil 10' }
    ],
    solution: 'static string Mention(double note)\n{\n    if (note >= 16)\n    {\n        return "Félicitations";\n    }\n    else if (note >= 14)\n    {\n        return "Bien";\n    }\n    else if (note >= 10)\n    {\n        return "Admis";\n    }\n    else\n    {\n        return "Non admis";\n    }\n}',
    explication: "Il faut enchaîner les seuils du plus haut au plus bas avec `else if`, sinon un cas comme 17 déclencherait aussi le test `>= 10`."
  },

  // ---------------------------------------------------------- C# — for
  {
    id: 'ex-csharp-for-qcm-1',
    matiere: 'slam-prog', chapitre: 'csharp-n2-boucle-for', competence: 'csharp.boucles.for',
    langage: 'csharp', difficulte: 'facile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Combien de fois le bloc de `for (int i = 0; i < 4; i++)` s\'exécute-t-il ?',
    options: [
      { id: 'a', texte: '3 fois' }, { id: 'b', texte: '4 fois' },
      { id: 'c', texte: '5 fois' }, { id: 'd', texte: 'Une infinité de fois' }
    ],
    correctes: ['b'],
    explication: 'i prend successivement les valeurs 0, 1, 2, 3 — soit 4 tours — puis i vaut 4 et la condition `i < 4` devient fausse.'
  },
  {
    id: 'ex-csharp-for-completer-1',
    matiere: 'slam-prog', chapitre: 'csharp-n2-boucle-for', competence: 'csharp.boucles.for',
    langage: 'csharp', difficulte: 'facile', type: 'completer-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Complète cette boucle qui doit afficher les nombres de 0 à 9.',
    template: 'for ({{1}} i = 0; i {{2}} 10; i{{3}})\n{\n    Console.WriteLine(i);\n}',
    trous: [
      { id: 1, accepte: ['int'] },
      { id: 2, accepte: ['<'] },
      { id: 3, accepte: ['++'] }
    ],
    explication: 'Pour afficher 0 à 9 inclus (10 valeurs), la condition doit être `i < 10`, avec un compteur `int` incrémenté de 1 à chaque tour (`i++`).'
  },
  {
    id: 'ex-csharp-for-lire-1',
    matiere: 'slam-prog', chapitre: 'csharp-n2-boucle-for', competence: 'csharp.boucles.for',
    langage: 'csharp', difficulte: 'moyen', type: 'lire-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Cette boucle est imbriquée (une boucle dans une boucle).',
    code: 'for (int i = 1; i <= 2; i++)\n{\n    for (int j = 1; j <= 2; j++)\n    {\n        Console.Write((i * 10 + j) + " ");\n    }\n}',
    question: 'Que va afficher ce programme (dans l\'ordre) ?',
    reponsesAcceptees: ['11 12 21 22'],
    explication: 'Pour i=1 : j=1 donne 11, j=2 donne 12. Pour i=2 : j=1 donne 21, j=2 donne 22. Résultat : "11 12 21 22".'
  },
  {
    id: 'ex-csharp-for-corriger-1',
    matiere: 'slam-prog', chapitre: 'csharp-n2-boucle-for', competence: 'csharp.boucles.for',
    langage: 'csharp', difficulte: 'moyen', type: 'corriger-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Ce programme doit afficher les nombres de 1 à 5, mais il s\'arrête trop tôt. Corrige-le.',
    codeInitial: '// Ce programme doit afficher les nombres de 1 à 5\nfor (int i = 1; i < 5; i++)\n{\n    Console.WriteLine(i);\n}',
    verif: [{ regex: /i\s*<=\s*5/, label: 'la condition va bien jusqu\'à 5 inclus' }],
    solution: '// Ce programme doit afficher les nombres de 1 à 5\nfor (int i = 1; i <= 5; i++)\n{\n    Console.WriteLine(i);\n}',
    explication: 'Avec `i < 5`, la boucle s\'arrête à i = 4 (erreur "off-by-one"). Il fallait `i <= 5` pour inclure 5.'
  },
  {
    id: 'ex-csharp-for-prog-1',
    matiere: 'slam-prog', chapitre: 'csharp-n2-boucle-for', competence: 'csharp.boucles.for',
    langage: 'csharp', difficulte: 'difficile', type: 'programmation',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Écris une méthode `Somme` qui reçoit un entier `n` et renvoie la somme des entiers de 1 à n, à l\'aide d\'une boucle for.',
    codeDepart: 'static int Somme(int n)\n{\n    // ton code ici\n}',
    criteres: [
      { regex: /for\s*\(/, label: 'utilise une boucle for' },
      { regex: /return/, label: 'renvoie un résultat' }
    ],
    solution: 'static int Somme(int n)\n{\n    int total = 0;\n    for (int i = 1; i <= n; i++)\n    {\n        total += i;\n    }\n    return total;\n}',
    explication: 'On initialise un accumulateur à 0 avant la boucle, puis on lui ajoute chaque valeur de i à chaque tour (`total += i;` équivaut à `total = total + i;`).'
  },

  // --------------------------------------------------------- C# — while
  {
    id: 'ex-csharp-while-vf-1',
    matiere: 'slam-prog', chapitre: 'csharp-n2-while', competence: 'csharp.boucles.while',
    langage: 'csharp', difficulte: 'facile', type: 'vrai-faux',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Un bloc `do...while` s\'exécute toujours au moins une fois, même si la condition est fausse dès le départ.',
    correct: true,
    explication: 'C\'est la différence clé avec `while` : dans `do...while`, la condition est vérifiée APRÈS le bloc, qui s\'exécute donc systématiquement une première fois.'
  },
  {
    id: 'ex-csharp-while-erreur-1',
    matiere: 'slam-prog', chapitre: 'csharp-n2-while', competence: 'csharp.boucles.while',
    langage: 'csharp', difficulte: 'moyen', type: 'trouver-erreur',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Ce programme tourne à l\'infini. Trouve la ligne responsable.',
    code: 'int i = 0;\nwhile (i < 5)\n{\n    Console.WriteLine(i);\n    i = i;\n}',
    ligneErreur: 5,
    explication: '`i = i;` réaffecte à i sa propre valeur : i ne change jamais, donc `i < 5` reste vrai indéfiniment. Il fallait écrire `i++;` (ou `i = i + 1;`).'
  },

  // -------------------------------------------------------- C# — méthodes
  {
    id: 'ex-csharp-methode-completer-1',
    matiere: 'slam-prog', chapitre: 'csharp-n3-methodes', competence: 'csharp.methodes',
    langage: 'csharp', difficulte: 'facile', type: 'completer-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Complète cette méthode qui renvoie true si age est majeur.',
    template: 'static {{1}} EstMajeur(int age)\n{\n    {{2}} (age >= 18);\n}',
    trous: [
      { id: 1, accepte: ['bool'] },
      { id: 2, accepte: ['return'] }
    ],
    explication: 'La méthode renvoie un booléen (`bool`), donc son type de retour est `bool`, et on utilise `return` pour renvoyer le résultat du test.'
  },
  {
    id: 'ex-csharp-methode-prog-1',
    matiere: 'slam-prog', chapitre: 'csharp-n3-methodes', competence: 'csharp.methodes',
    langage: 'csharp', difficulte: 'moyen', type: 'programmation',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Écris une méthode `Moyenne` qui reçoit un tableau `double[] notes` et renvoie la moyenne de ses valeurs.',
    codeDepart: 'static double Moyenne(double[] notes)\n{\n    // ton code ici\n}',
    criteres: [
      { regex: /for(each)?\s*\(/, label: 'parcourt le tableau (for ou foreach)' },
      { regex: /return/, label: 'renvoie un résultat' },
      { regex: /\.Length/, label: 'utilise .Length pour connaître la taille du tableau' }
    ],
    solution: 'static double Moyenne(double[] notes)\n{\n    double total = 0;\n    foreach (double note in notes)\n    {\n        total += note;\n    }\n    return total / notes.Length;\n}',
    explication: 'On additionne toutes les valeurs du tableau puis on divise par le nombre d\'éléments (`notes.Length`).'
  },
  {
    id: 'ex-csharp-methode-qcm-1',
    matiere: 'slam-prog', chapitre: 'csharp-n3-methodes', competence: 'csharp.methodes',
    langage: 'csharp', difficulte: 'facile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Quel mot-clé utilise-t-on comme type de retour pour une méthode qui ne renvoie aucune valeur ?',
    options: [
      { id: 'a', texte: 'return' }, { id: 'b', texte: 'void' },
      { id: 'c', texte: 'null' }, { id: 'd', texte: 'static' }
    ],
    correctes: ['b'],
    explication: '`void` signifie "aucune valeur de retour". `static` concerne autre chose (l\'appartenance à la classe plutôt qu\'à une instance).'
  },
  {
    id: 'ex-csharp-methode-prog-bts-1',
    matiere: 'slam-prog', chapitre: 'csharp-n3-methodes', competence: 'csharp.methodes',
    langage: 'csharp', difficulte: 'bts', type: 'programmation',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Niveau BTS — La classe `Produit` a un attribut `prix` (double). Complète la méthode `PrixTTC(double tauxTVA)` qui doit renvoyer le prix TTC (prix + prix * tauxTVA).',
    codeDepart: 'class Produit\n{\n    private double prix;\n\n    public Produit(double prix)\n    {\n        this.prix = prix;\n    }\n\n    public double PrixTTC(double tauxTVA)\n    {\n        // ton code ici\n    }\n}',
    criteres: [
      { regex: /return/, label: 'renvoie un résultat' },
      { regex: /prix\s*\*\s*tauxTVA|tauxTVA\s*\*\s*prix/, label: 'calcule bien prix * tauxTVA' }
    ],
    solution: 'class Produit\n{\n    private double prix;\n\n    public Produit(double prix)\n    {\n        this.prix = prix;\n    }\n\n    public double PrixTTC(double tauxTVA)\n    {\n        return prix + prix * tauxTVA;\n    }\n}',
    explication: 'Le prix TTC ajoute la TVA au prix HT : `prix + prix * tauxTVA` (par exemple pour un taux de 0.2, cela ajoute 20%).'
  },

  // ---------------------------------------------------------- C# — classes
  {
    id: 'ex-csharp-classes-qcm-1',
    matiere: 'slam-prog', chapitre: 'csharp-n5-classes', competence: 'csharp.poo.classes',
    langage: 'csharp', difficulte: 'moyen', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Quelle affirmation est correcte ?',
    options: [
      { id: 'a', texte: 'Une classe est une instance d\'un objet.' },
      { id: 'b', texte: 'Un objet est une instance d\'une classe.' },
      { id: 'c', texte: 'Un constructeur renvoie toujours un booléen.' },
      { id: 'd', texte: 'Les attributs privés sont accessibles depuis n\'importe où.' }
    ],
    correctes: ['b'],
    explication: 'C\'est l\'inverse de a) : la classe est le plan, l\'objet est ce qu\'on construit à partir de ce plan avec `new`.'
  },
  {
    id: 'ex-csharp-classes-completer-1',
    matiere: 'slam-prog', chapitre: 'csharp-n5-classes', competence: 'csharp.poo.classes',
    langage: 'csharp', difficulte: 'moyen', type: 'completer-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Complète ce constructeur.',
    template: 'class Livre\n{\n    private string titre;\n\n    public Livre({{1}} titre)\n    {\n        {{2}}.titre = titre;\n    }\n}',
    trous: [
      { id: 1, accepte: ['string'] },
      { id: 2, accepte: ['this'] }
    ],
    explication: 'Le paramètre reçoit un `string`. `this.titre` désigne l\'attribut de l\'objet, à distinguer du paramètre `titre` qui porte le même nom.'
  },
  {
    id: 'ex-csharp-classes-lire-1',
    matiere: 'slam-prog', chapitre: 'csharp-n5-classes', competence: 'csharp.poo.classes',
    langage: 'csharp', difficulte: 'difficile', type: 'lire-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Lis attentivement cette classe et son utilisation.',
    code: 'class Compteur\n{\n    private int valeur = 0;\n\n    public void Incrementer()\n    {\n        valeur = valeur + 1;\n    }\n\n    public int GetValeur()\n    {\n        return valeur;\n    }\n}\n\nCompteur c = new Compteur();\nc.Incrementer();\nc.Incrementer();\nc.Incrementer();\nConsole.WriteLine(c.GetValeur());',
    question: 'Que va afficher ce programme ?',
    reponsesAcceptees: ['3'],
    explication: '`Incrementer()` est appelée 3 fois sur le même objet `c` : valeur passe de 0 à 1, puis 2, puis 3.'
  },

  // -------------------------------------------------------------- SQL — SELECT
  {
    id: 'ex-sql-select-qcm-1',
    matiere: 'slam-bdd', chapitre: 'sql-n1-select', competence: 'sql.select',
    langage: 'sql', difficulte: 'facile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Quelle clause permet de filtrer les lignes retournées par une requête SELECT ?',
    options: [
      { id: 'a', texte: 'ORDER BY' }, { id: 'b', texte: 'WHERE' },
      { id: 'c', texte: 'GROUP BY' }, { id: 'd', texte: 'FROM' }
    ],
    correctes: ['b'],
    explication: '`WHERE` filtre les lignes selon une condition. `FROM` désigne la table, `ORDER BY` trie, `GROUP BY` regroupe.'
  },
  {
    id: 'ex-sql-select-completer-1',
    matiere: 'slam-bdd', chapitre: 'sql-n1-select', competence: 'sql.select',
    langage: 'sql', difficulte: 'facile', type: 'completer-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Complète cette requête qui doit afficher le nom et la ville des clients de Lyon.',
    template: '{{1}} nom, ville\nFROM client\n{{2}} ville = \'Lyon\';',
    trous: [
      { id: 1, accepte: ['select'] },
      { id: 2, accepte: ['where'] }
    ],
    explication: '`SELECT` choisit les colonnes à afficher, `WHERE` filtre sur la condition `ville = \'Lyon\'`.'
  },
  {
    id: 'ex-sql-select-lire-1',
    matiere: 'slam-bdd', chapitre: 'sql-n1-select', competence: 'sql.select',
    langage: 'sql', difficulte: 'moyen', type: 'lire-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Table `client` (id_client, nom, ville) :\n1, Dupont, Lyon\n2, Martin, Paris\n3, Durand, Lyon',
    code: "SELECT nom FROM client WHERE ville = 'Lyon';",
    question: 'Quels noms cette requête va-t-elle renvoyer ?',
    reponsesAcceptees: ['dupont et durand', 'dupont, durand', 'durand et dupont', 'durand, dupont'],
    explication: 'Seules les lignes où `ville = \'Lyon\'` sont conservées : Dupont (id 1) et Durand (id 3).'
  },
  {
    id: 'ex-sql-select-vf-1',
    matiere: 'slam-bdd', chapitre: 'sql-n1-select', competence: 'sql.select',
    langage: 'sql', difficulte: 'facile', type: 'vrai-faux',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'En SQL, `SELECT *` sélectionne toutes les colonnes de la table.',
    correct: true,
    explication: 'L\'étoile `*` est un raccourci pour "toutes les colonnes". En pratique, il est souvent préférable de lister les colonnes utiles pour des raisons de performance et de lisibilité.'
  },

  // -------------------------------------------------------------- SQL — JOIN
  {
    id: 'ex-sql-join-qcm-1',
    matiere: 'slam-bdd', chapitre: 'sql-n2-jointures', competence: 'sql.join',
    langage: 'sql', difficulte: 'moyen', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Que se passe-t-il si on oublie la condition dans la clause ON d\'une jointure ?',
    options: [
      { id: 'a', texte: 'Une erreur de syntaxe bloque toujours la requête' },
      { id: 'b', texte: 'On obtient un produit cartésien (toutes les combinaisons possibles)' },
      { id: 'c', texte: 'SQL ajoute automatiquement la bonne condition' },
      { id: 'd', texte: 'La requête ne renvoie aucune ligne' }
    ],
    correctes: ['b'],
    explication: 'Sans condition de jointure, chaque ligne de la première table est associée à CHAQUE ligne de la seconde : un produit cartésien, rarement voulu.'
  },
  {
    id: 'ex-sql-join-erreur-1',
    matiere: 'slam-bdd', chapitre: 'sql-n2-jointures', competence: 'sql.join',
    langage: 'sql', difficulte: 'moyen', type: 'trouver-erreur',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Cette requête contient une faute de frappe qui empêche son exécution. Trouve la ligne.',
    code: "SELECT client.nom, commande.montant\nFROM client, commande\nWHERE client.id_client = commande.id_client\nAND commande.montant > 50\nORDR BY commande.montant;",
    ligneErreur: 5,
    explication: 'Ligne 5 : "ORDR BY" contient une faute de frappe, il fallait écrire "ORDER BY".'
  },
  {
    id: 'ex-sql-join-reponse-1',
    matiere: 'slam-bdd', chapitre: 'sql-n2-jointures', competence: 'sql.join',
    langage: 'sql', difficulte: 'difficile', type: 'reponse-courte',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Quel mot-clé filtre des lignes APRÈS un regroupement GROUP BY (contrairement à WHERE, qui filtre avant) ?',
    reponsesAcceptees: ['having'],
    explication: '`HAVING` s\'utilise uniquement après un `GROUP BY`, pour filtrer sur le résultat d\'un agrégat (par exemple `HAVING COUNT(*) > 5`).'
  },

  // -------------------------------------------------------- SQL — GROUP BY
  {
    id: 'ex-sql-groupby-qcm-1',
    matiere: 'slam-bdd', chapitre: 'sql-n3-agregats', competence: 'sql.groupby',
    langage: 'sql', difficulte: 'moyen', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Quelle clause filtre les groupes APRÈS un GROUP BY, sur le résultat d\'un agrégat ?',
    options: [
      { id: 'a', texte: 'WHERE' }, { id: 'b', texte: 'HAVING' },
      { id: 'c', texte: 'ORDER BY' }, { id: 'd', texte: 'ON' }
    ],
    correctes: ['b'],
    explication: 'WHERE filtre les lignes avant le regroupement ; HAVING filtre les groupes après, sur le résultat d\'un agrégat comme COUNT ou SUM.'
  },
  {
    id: 'ex-sql-groupby-completer-1',
    matiere: 'slam-bdd', chapitre: 'sql-n3-agregats', competence: 'sql.groupby',
    langage: 'sql', difficulte: 'moyen', type: 'completer-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Complète cette requête qui doit compter le nombre de clients par ville.',
    template: 'SELECT ville, {{1}}(*) AS nombre_clients\nFROM client\n{{2}} BY ville;',
    trous: [
      { id: 1, accepte: ['count', 'COUNT'] },
      { id: 2, accepte: ['group', 'GROUP'] }
    ],
    explication: '`COUNT(*)` compte les lignes de chaque groupe, et `GROUP BY ville` définit le regroupement par ville.'
  },

  // -------------------------------------------------------- SQL — INSERT/UPDATE/DELETE
  {
    id: 'ex-sql-dml-qcm-1',
    matiere: 'slam-bdd', chapitre: 'sql-n4-modification', competence: 'sql.dml',
    langage: 'sql', difficulte: 'facile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Que fait cette instruction : `DELETE FROM commande;` (sans clause WHERE) ?',
    options: [
      { id: 'a', texte: 'Elle ne supprime rien tant qu\'on ne précise pas de condition' },
      { id: 'b', texte: 'Elle supprime TOUTES les lignes de la table commande' },
      { id: 'c', texte: 'Elle supprime uniquement la première ligne' },
      { id: 'd', texte: 'Elle provoque une erreur de syntaxe' }
    ],
    correctes: ['b'],
    explication: 'Sans clause WHERE, un DELETE s\'applique à absolument toutes les lignes de la table — une des erreurs les plus dangereuses en SQL.'
  },
  {
    id: 'ex-sql-dml-erreur-1',
    matiere: 'slam-bdd', chapitre: 'sql-n4-modification', competence: 'sql.dml',
    langage: 'sql', difficulte: 'difficile', type: 'trouver-erreur',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Ce script va avoir un effet dangereux et non voulu. Clique sur la ligne responsable.',
    code: "-- Augmenter le salaire de l'employé 12 de 10%\nUPDATE employe\nSET salaire = salaire * 1.1;",
    ligneErreur: 3,
    explication: 'Ligne 3 : il manque `WHERE id_employe = 12;`. Sans cette clause, la requête augmente le salaire de TOUS les employés de la table, alors que le commentaire indique qu\'on visait un seul employé.'
  },

  // -------------------------------------------------------- C# — tableaux
  {
    id: 'ex-csharp-tableau-qcm-1',
    matiere: 'slam-prog', chapitre: 'csharp-n4-tableaux', competence: 'csharp.tableaux',
    langage: 'csharp', difficulte: 'facile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Quel est l\'indice du premier élément d\'un tableau en C# ?',
    options: [
      { id: 'a', texte: '0' }, { id: 'b', texte: '1' },
      { id: 'c', texte: '-1' }, { id: 'd', texte: 'Length' }
    ],
    correctes: ['a'],
    explication: 'Les indices commencent à 0 en C# : le premier élément est `tableau[0]`.'
  },
  {
    id: 'ex-csharp-tableau-erreur-1',
    matiere: 'slam-prog', chapitre: 'csharp-n4-tableaux', competence: 'csharp.tableaux',
    langage: 'csharp', difficulte: 'moyen', type: 'trouver-erreur',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Ce programme plante à l\'exécution. Trouve la ligne fautive.',
    code: 'int[] notes = { 10, 12, 14 };\nfor (int i = 0; i <= notes.Length; i++)\n{\n    Console.WriteLine(notes[i]);\n}',
    ligneErreur: 2,
    explication: '`i <= notes.Length` autorise i à atteindre 3, mais le tableau n\'a que 3 éléments valides (indices 0, 1, 2) : accéder à `notes[3]` provoque une IndexOutOfRangeException. Il fallait `i < notes.Length`.'
  },
  {
    id: 'ex-csharp-tableau-prog-1',
    matiere: 'slam-prog', chapitre: 'csharp-n4-tableaux', competence: 'csharp.tableaux',
    langage: 'csharp', difficulte: 'moyen', type: 'programmation',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Écris une méthode `Maximum` qui reçoit un tableau `int[] valeurs` et renvoie la plus grande valeur qu\'il contient.',
    codeDepart: 'static int Maximum(int[] valeurs)\n{\n    // ton code ici\n}',
    criteres: [
      { regex: /for(each)?\s*\(/, label: 'parcourt le tableau (for ou foreach)' },
      { regex: /return/, label: 'renvoie un résultat' }
    ],
    solution: 'static int Maximum(int[] valeurs)\n{\n    int max = valeurs[0];\n    for (int i = 1; i < valeurs.Length; i++)\n    {\n        if (valeurs[i] > max)\n        {\n            max = valeurs[i];\n        }\n    }\n    return max;\n}',
    explication: 'On initialise `max` avec le premier élément, puis on compare chaque valeur suivante : si elle est plus grande, elle devient le nouveau maximum.'
  },

  // ------------------------------------------------------------ C# — List
  {
    id: 'ex-csharp-list-qcm-1',
    matiere: 'slam-prog', chapitre: 'csharp-n4-list', competence: 'csharp.list',
    langage: 'csharp', difficulte: 'facile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Quelle propriété donne le nombre d\'éléments d\'une List<T> ?',
    options: [
      { id: 'a', texte: 'Length' }, { id: 'b', texte: 'Count' },
      { id: 'c', texte: 'Size' }, { id: 'd', texte: 'Total' }
    ],
    correctes: ['b'],
    explication: 'Contrairement aux tableaux (`.Length`), une `List<T>` utilise `.Count`.'
  },
  {
    id: 'ex-csharp-list-completer-1',
    matiere: 'slam-prog', chapitre: 'csharp-n4-list', competence: 'csharp.list',
    langage: 'csharp', difficulte: 'facile', type: 'completer-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Complète la création et l\'ajout dans cette liste.',
    template: 'List<string> villes = new {{1}}<string>();\nvilles.{{2}}("Lyon");',
    trous: [
      { id: 1, accepte: ['List'] },
      { id: 2, accepte: ['Add'] }
    ],
    explication: 'On crée une nouvelle instance avec `new List<string>()`, et on ajoute un élément avec `.Add(...)`.'
  },
  {
    id: 'ex-csharp-list-prog-1',
    matiere: 'slam-prog', chapitre: 'csharp-n4-list', competence: 'csharp.list',
    langage: 'csharp', difficulte: 'moyen', type: 'programmation',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Écris une méthode `ContientNegatif` qui reçoit une `List<int> valeurs` et renvoie `true` si la liste contient au moins un nombre négatif, `false` sinon.',
    codeDepart: 'static bool ContientNegatif(List<int> valeurs)\n{\n    // ton code ici\n}',
    criteres: [
      { regex: /foreach\s*\(|for\s*\(/, label: 'parcourt la liste' },
      { regex: /return/, label: 'renvoie un résultat' },
      { regex: /<\s*0/, label: 'teste si une valeur est négative' }
    ],
    solution: 'static bool ContientNegatif(List<int> valeurs)\n{\n    foreach (int v in valeurs)\n    {\n        if (v < 0)\n        {\n            return true;\n        }\n    }\n    return false;\n}',
    explication: 'On parcourt la liste ; dès qu\'on trouve une valeur négative, on renvoie `true` immédiatement. Si la boucle se termine sans en avoir trouvé, on renvoie `false`.'
  },

  // ------------------------------------------------------ C# — Dictionary
  {
    id: 'ex-csharp-dict-qcm-1',
    matiere: 'slam-prog', chapitre: 'csharp-n4-dictionary', competence: 'csharp.dictionary',
    langage: 'csharp', difficulte: 'moyen', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Que se passe-t-il si on essaie d\'ajouter une clé déjà existante avec `.Add(cle, valeur)` sur un Dictionary ?',
    options: [
      { id: 'a', texte: 'La nouvelle valeur remplace l\'ancienne' },
      { id: 'b', texte: 'Une exception est levée' },
      { id: 'c', texte: 'Rien, l\'ajout est ignoré silencieusement' },
      { id: 'd', texte: 'Le dictionnaire contient deux fois la même clé' }
    ],
    correctes: ['b'],
    explication: '`.Add` refuse une clé en double et lève une exception. Pour "ajouter ou remplacer", on utilise `dico[cle] = valeur;` à la place.'
  },
  {
    id: 'ex-csharp-dict-lire-1',
    matiere: 'slam-prog', chapitre: 'csharp-n4-dictionary', competence: 'csharp.dictionary',
    langage: 'csharp', difficulte: 'difficile', type: 'lire-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Lis attentivement ce programme.',
    code: 'Dictionary<string, int> stock = new Dictionary<string, int>();\nstock["clavier"] = 12;\nstock["souris"] = 30;\nstock["clavier"] = 8;\n\nConsole.WriteLine(stock["clavier"]);',
    question: 'Que va afficher ce programme ?',
    reponsesAcceptees: ['8'],
    explication: '`stock["clavier"] = 8;` écrase la valeur précédente (12) associée à la clé "clavier", qui n\'existe qu\'une seule fois dans le dictionnaire.'
  },

  // --------------------------------------------------------- C# — exceptions
  {
    id: 'ex-csharp-except-qcm-1',
    matiere: 'slam-prog', chapitre: 'csharp-n6-exceptions', competence: 'csharp.exceptions',
    langage: 'csharp', difficulte: 'moyen', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Que se passe-t-il si aucune exception ne se produit dans un bloc try qui a un finally ?',
    options: [
      { id: 'a', texte: 'Le bloc finally ne s\'exécute pas' },
      { id: 'b', texte: 'Le bloc finally s\'exécute quand même' },
      { id: 'c', texte: 'Le programme plante' },
      { id: 'd', texte: 'Le bloc catch s\'exécute à la place' }
    ],
    correctes: ['b'],
    explication: 'Le bloc `finally` s\'exécute TOUJOURS, qu\'une exception se soit produite ou non — c\'est justement son intérêt pour libérer des ressources de façon fiable.'
  },
  {
    id: 'ex-csharp-except-prog-1',
    matiere: 'slam-prog', chapitre: 'csharp-n6-exceptions', competence: 'csharp.exceptions',
    langage: 'csharp', difficulte: 'difficile', type: 'programmation',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Écris une méthode `DiviserEnSecurite` qui reçoit deux entiers `a` et `b` et renvoie leur division (`a / b`) sous forme de double, ou 0 si `b` vaut 0, en utilisant try/catch.',
    codeDepart: 'static double DiviserEnSecurite(int a, int b)\n{\n    // ton code ici\n}',
    criteres: [
      { regex: /try/, label: 'utilise un bloc try' },
      { regex: /catch/, label: 'utilise un bloc catch' },
      { regex: /return/, label: 'renvoie un résultat' }
    ],
    solution: 'static double DiviserEnSecurite(int a, int b)\n{\n    try\n    {\n        return (double)a / b;\n    }\n    catch (DivideByZeroException)\n    {\n        return 0;\n    }\n}',
    explication: 'On tente la division ; si `b` vaut 0, une `DivideByZeroException` est levée et on renvoie 0 dans le `catch` plutôt que de laisser le programme planter.'
  },

  // -------------------------------------------------------------- C# — BDD
  {
    id: 'ex-csharp-bdd-qcm-1',
    matiere: 'slam-prog', chapitre: 'csharp-n7-bdd', competence: 'csharp.bdd',
    langage: 'csharp', difficulte: 'moyen', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Pourquoi utilise-t-on une requête paramétrée (SqlParameter) plutôt que de concaténer directement une valeur saisie par l\'utilisateur dans le texte SQL ?',
    options: [
      { id: 'a', texte: 'Pour que la requête s\'exécute plus vite' },
      { id: 'b', texte: 'Pour éviter les injections SQL' },
      { id: 'c', texte: 'Parce que la concaténation de texte est interdite en C#' },
      { id: 'd', texte: 'Pour économiser de la mémoire' }
    ],
    correctes: ['b'],
    explication: 'La concaténation directe permet à un utilisateur malveillant d\'injecter du code SQL dans la requête. Les paramètres séparent le texte de la requête des valeurs, ce qui neutralise ce risque.'
  },
  {
    id: 'ex-csharp-bdd-erreur-1',
    matiere: 'slam-prog', chapitre: 'csharp-n7-bdd', competence: 'csharp.bdd',
    langage: 'csharp', difficulte: 'difficile', type: 'trouver-erreur',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Ce code contient une faille de sécurité grave. Trouve la ligne responsable.',
    code: 'string nomRecherche = Console.ReadLine();\nstring requete = "SELECT * FROM client WHERE nom = \'" + nomRecherche + "\'";\nSqlCommand commande = new SqlCommand(requete, connexion);',
    ligneErreur: 2,
    explication: 'Ligne 2 : la valeur saisie par l\'utilisateur est directement collée dans le texte SQL — une faille d\'injection SQL classique. Il fallait utiliser une requête paramétrée avec un SqlParameter plutôt qu\'une concaténation.'
  }
];

export function getExercise(id) {
  return EXERCISES.find(e => e.id === id) || null;
}

export function getExercisesByCompetence(competence) {
  return EXERCISES.filter(e => e.competence === competence);
}

// Valeurs de filtre calculées dynamiquement depuis les données réellement
// présentes (jamais de catégorie "fantôme" sans contenu derrière).
export function getFilterOptions() {
  const matieres = [...new Set(EXERCISES.map(e => e.matiere))];
  const langages = [...new Set(EXERCISES.map(e => e.langage).filter(Boolean))];
  const niveaux = [...new Set(EXERCISES.map(e => e.difficulte))];
  const types = [...new Set(EXERCISES.map(e => e.type))];
  const competences = [...new Set(EXERCISES.map(e => e.competence))];
  return { matieres, langages, niveaux, types, competences };
}
