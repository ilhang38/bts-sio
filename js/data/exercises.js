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
  },

  // ---------------------------------------------------------------- CEJM
  {
    id: 'ex-cejm-agents-qcm-1',
    matiere: 'cejm', chapitre: 'cejm-theme1-agents-economiques', competence: 'cejm.agents-economiques',
    langage: null, difficulte: 'facile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Lequel de ces éléments N\'EST PAS un agent économique ?',
    options: [
      { id: 'a', texte: 'Les ménages' }, { id: 'b', texte: 'Les entreprises' },
      { id: 'c', texte: 'Un produit fini' }, { id: 'd', texte: 'L\'État' }
    ],
    correctes: ['c'],
    explication: 'Un produit fini est un bien, pas un acteur économique. Les agents économiques sont des ACTEURS qui interagissent (ménages, entreprises, État, banques).'
  },
  {
    id: 'ex-cejm-agents-vf-1',
    matiere: 'cejm', chapitre: 'cejm-theme1-agents-economiques', competence: 'cejm.agents-economiques',
    langage: null, difficulte: 'facile', type: 'vrai-faux',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Dans une entreprise individuelle, le patrimoine personnel de l\'entrepreneur peut être engagé en cas de dettes professionnelles.',
    correct: true,
    explication: 'Contrairement à une société, l\'entreprise individuelle ne crée pas de personne morale distincte : l\'entrepreneur reste responsable sur son patrimoine (la résidence principale bénéficiant toutefois d\'une protection).'
  },
  {
    id: 'ex-cejm-rgpd-qcm-1',
    matiere: 'cejm', chapitre: 'cejm-theme4-rgpd', competence: 'cejm.rgpd',
    langage: null, difficulte: 'moyen', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Que garantit le droit à l\'effacement prévu par le RGPD ?',
    options: [
      { id: 'a', texte: 'Le droit de consulter ses données' },
      { id: 'b', texte: 'Le droit de faire supprimer ses données personnelles' },
      { id: 'c', texte: 'Le droit de vendre ses données' },
      { id: 'd', texte: 'Le droit d\'obtenir une compensation financière' }
    ],
    correctes: ['b'],
    explication: 'Le droit à l\'effacement ("droit à l\'oubli") permet à une personne de demander la suppression de ses données personnelles auprès d\'une organisation qui les détient.'
  },
  {
    id: 'ex-cejm-rgpd-reponse-1',
    matiere: 'cejm', chapitre: 'cejm-theme4-rgpd', competence: 'cejm.rgpd',
    langage: null, difficulte: 'moyen', type: 'reponse-courte',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Sous combien d\'heures une entreprise doit-elle signaler à la CNIL une violation de données personnelles ?',
    reponsesAcceptees: ['72', '72h', '72 heures'],
    explication: 'Le RGPD impose un délai de 72 heures pour notifier une violation de données à l\'autorité de contrôle compétente (la CNIL en France).'
  },

  // -------------------------------------------------------------- Maths
  {
    id: 'ex-maths-numeration-qcm-1',
    matiere: 'maths', chapitre: 'maths-numeration', competence: 'maths.numeration',
    langage: null, difficulte: 'moyen', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Combien de bits faut-il pour représenter exactement 1 chiffre hexadécimal ?',
    options: [
      { id: 'a', texte: '1' }, { id: 'b', texte: '2' },
      { id: 'c', texte: '4' }, { id: 'd', texte: '8' }
    ],
    correctes: ['c'],
    explication: 'Un chiffre hexadécimal (0-9, A-F, soit 16 valeurs possibles) correspond exactement à 4 bits (2⁴ = 16 combinaisons possibles).'
  },
  {
    id: 'ex-maths-numeration-reponse-1',
    matiere: 'maths', chapitre: 'maths-numeration', competence: 'maths.numeration',
    langage: null, difficulte: 'moyen', type: 'reponse-courte',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Convertis le nombre binaire 1010 en décimal.',
    reponsesAcceptees: ['10'],
    explication: '1010 = 1×2³ + 0×2² + 1×2¹ + 0×2⁰ = 8 + 0 + 2 + 0 = 10.'
  },
  {
    id: 'ex-maths-numeration-completer-1',
    matiere: 'maths', chapitre: 'maths-numeration', competence: 'maths.numeration',
    langage: null, difficulte: 'moyen', type: 'completer-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Complète cette conversion de 13 en binaire.',
    template: '13 en binaire :\n13 / 2 = 6 reste {{1}}\n6  / 2 = 3 reste {{2}}\n3  / 2 = 1 reste {{3}}\n1  / 2 = 0 reste {{4}}\n\nRésultat (restes de bas en haut) : {{5}}',
    trous: [
      { id: 1, accepte: ['1'] }, { id: 2, accepte: ['0'] },
      { id: 3, accepte: ['1'] }, { id: 4, accepte: ['1'] },
      { id: 5, accepte: ['1101'] }
    ],
    explication: 'En lisant les restes de bas en haut (1, 1, 0, 1) on obtient 1101, qui est bien l\'écriture binaire de 13 (8 + 4 + 0 + 1 = 13).'
  },
  {
    id: 'ex-maths-bool-qcm-1',
    matiere: 'maths', chapitre: 'maths-booleen', competence: 'maths.booleen',
    langage: null, difficulte: 'moyen', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Que vaut A OU B si A = 0 et B = 0 ?',
    options: [
      { id: 'a', texte: '0' }, { id: 'b', texte: '1' },
      { id: 'c', texte: 'Indéterminé' }, { id: 'd', texte: 'Cela dépend d\'une autre variable' }
    ],
    correctes: ['a'],
    explication: 'OU n\'est vrai que si au moins une des deux valeurs vaut 1. Ici, A et B valent tous les deux 0, donc A OU B = 0.'
  },
  {
    id: 'ex-maths-bool-completer-1',
    matiere: 'maths', chapitre: 'maths-booleen', competence: 'maths.booleen',
    langage: null, difficulte: 'moyen', type: 'completer-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Complète cette table de vérité de A OU B.',
    template: 'A | B | A OU B\n0 | 0 |   {{1}}\n0 | 1 |   {{2}}\n1 | 0 |   {{3}}\n1 | 1 |   {{4}}',
    trous: [
      { id: 1, accepte: ['0'] }, { id: 2, accepte: ['1'] },
      { id: 3, accepte: ['1'] }, { id: 4, accepte: ['1'] }
    ],
    explication: 'OU est vrai (1) dès qu\'AU MOINS une des deux entrées vaut 1 : seule la première ligne (0 et 0) donne un résultat à 0.'
  },

  // ------------------------------------------------------------ Anglais
  {
    id: 'ex-anglais-vocab-qcm-1',
    matiere: 'anglais', chapitre: 'anglais-vocabulaire-it', competence: 'anglais.vocabulaire-it',
    langage: null, difficulte: 'facile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Que signifie "to deploy" dans un contexte informatique ?',
    options: [
      { id: 'a', texte: 'Corriger un bogue' },
      { id: 'b', texte: 'Mettre en production / déployer une application' },
      { id: 'c', texte: 'Tester une fonctionnalité' },
      { id: 'd', texte: 'Écrire de la documentation' }
    ],
    correctes: ['b'],
    explication: '"To deploy" signifie déployer, c\'est-à-dire mettre une application ou une mise à jour en service sur un serveur ou un environnement de production.'
  },
  {
    id: 'ex-anglais-vocab-vf-1',
    matiere: 'anglais', chapitre: 'anglais-vocabulaire-it', competence: 'anglais.vocabulaire-it',
    langage: null, difficulte: 'facile', type: 'vrai-faux',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Le mot anglais "eventually" se traduit par "éventuellement" en français.',
    correct: false,
    explication: 'C\'est un faux-ami classique : "eventually" signifie "finalement", "à terme" — pas "peut-être", "éventuellement".'
  },
  {
    id: 'ex-anglais-present-qcm-1',
    matiere: 'anglais', chapitre: 'anglais-present-tenses', competence: 'anglais.present',
    langage: null, difficulte: 'facile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Quelle phrase est correcte pour décrire une action en train de se dérouler MAINTENANT ?',
    options: [
      { id: 'a', texte: 'She work on the bug now.' },
      { id: 'b', texte: 'She is working on the bug now.' },
      { id: 'c', texte: 'She works on the bug now.' },
      { id: 'd', texte: 'She working on the bug now.' }
    ],
    correctes: ['b'],
    explication: 'Une action en cours au moment où l\'on parle utilise le present continuous : be (is) + verbe-ing ("is working").'
  },
  {
    id: 'ex-anglais-present-completer-1',
    matiere: 'anglais', chapitre: 'anglais-present-tenses', competence: 'anglais.present',
    langage: null, difficulte: 'facile', type: 'completer-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Complète avec la forme correcte du verbe entre parenthèses.',
    template: 'Usually, he {{1}} (test) his code every morning. Right now, he {{2}} (fix) a critical bug.',
    trous: [
      { id: 1, accepte: ['tests'] },
      { id: 2, accepte: ['is fixing'] }
    ],
    explication: '"Usually... every morning" appelle le present simple avec un \'s\' à la 3e personne ("tests"). "Right now" appelle le present continuous ("is fixing").'
  },

  // --------------------------------------------------- Culture générale
  {
    id: 'ex-cg-synthese-qcm-1',
    matiere: 'culture-generale', chapitre: 'cg-synthese', competence: 'cg.synthese',
    langage: null, difficulte: 'moyen', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Depuis la réforme de l\'épreuve (appliquée à partir de la session 2025), comment appelle-t-on la partie qui porte sur les documents du corpus ?',
    options: [
      { id: 'a', texte: 'La synthèse' },
      { id: 'b', texte: 'L\'analyse de corpus' },
      { id: 'c', texte: 'Le commentaire composé' },
      { id: 'd', texte: 'La dissertation' }
    ],
    correctes: ['b'],
    explication: 'Depuis l\'arrêté du 13 juillet 2023 (appliqué à partir de la session 2025), on ne parle plus de "synthèse" mais d\'"analyse de corpus" : 2 à 4 questions sur un corpus de 2 à 3 documents, au lieu d\'un texte de synthèse continu.'
  },
  {
    id: 'ex-cg-synthese-vf-1',
    matiere: 'culture-generale', chapitre: 'cg-synthese', competence: 'cg.synthese',
    langage: null, difficulte: 'moyen', type: 'vrai-faux',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Depuis la réforme, l\'interprétation personnelle du candidat est explicitement attendue dans l\'analyse de corpus.',
    correct: true,
    explication: 'C\'est un changement important par rapport à l\'ancienne synthèse : le nouveau format attend une réponse nuancée et argumentée, ce n\'est plus un exercice de pure neutralité.'
  },

  // --------------------------------------------------- Culture générale — écriture personnelle
  {
    id: 'ex-cg-ecriture-qcm-1',
    matiere: 'culture-generale', chapitre: 'cg-ecriture-personnelle', competence: 'cg.ecriture-personnelle',
    langage: null, difficulte: 'moyen', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Dans l\'essai argumenté, comment le candidat choisit-il son sujet ?',
    options: [
      { id: 'a', texte: 'Le sujet est unique et imposé' },
      { id: 'b', texte: 'Le candidat choisit entre deux sujets proposés, liés au thème annuel' },
      { id: 'c', texte: 'Le candidat invente librement son propre sujet' },
      { id: 'd', texte: 'Il n\'y a pas d\'essai à rédiger' }
    ],
    correctes: ['b'],
    explication: 'Le candidat a le choix entre deux sujets proposés, tous deux en lien avec le thème national étudié dans l\'année ("Le vrai du faux" pour la session 2027).'
  },
  {
    id: 'ex-cg-ecriture-vf-1',
    matiere: 'culture-generale', chapitre: 'cg-ecriture-personnelle', competence: 'cg.ecriture-personnelle',
    langage: null, difficulte: 'moyen', type: 'vrai-faux',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Un bon paragraphe argumenté doit développer plusieurs idées différentes à la fois pour être complet.',
    correct: false,
    explication: 'Au contraire, un bon paragraphe développe UNE seule idée principale, clairement illustrée par un exemple précis.'
  },

  // --------------------------------------------------- Culture générale — thème 2026-2027
  {
    id: 'ex-cg-theme-qcm-1',
    matiere: 'culture-generale', chapitre: 'cg-theme-vrai-faux', competence: 'cg.theme-vrai-faux',
    langage: null, difficulte: 'facile', type: 'qcm', multiple: false,
    annees: ['2026-2027'],
    enonce: 'Quel est l\'intitulé officiel du thème national de Culture générale et expression pour la session 2027 ?',
    options: [
      { id: 'a', texte: 'Le vrai du faux' },
      { id: 'b', texte: 'Les animaux et nous' },
      { id: 'c', texte: 'L\'invitation au voyage' },
      { id: 'd', texte: 'Le désir' }
    ],
    correctes: ['a'],
    explication: '"Le vrai du faux" est le thème retenu pour la session 2027 (année scolaire 2026-2027), publié au Bulletin officiel le 1er avril 2026. "Les animaux et nous..." était le thème de la session précédente (2026).'
  },
  {
    id: 'ex-cg-theme-vf-1',
    matiere: 'culture-generale', chapitre: 'cg-theme-vrai-faux', competence: 'cg.theme-vrai-faux',
    langage: null, difficulte: 'moyen', type: 'vrai-faux',
    annees: ['2026-2027'],
    enonce: 'Le thème "Le vrai du faux" invite uniquement à dénoncer le faux comme une menace à combattre.',
    correct: false,
    explication: 'La problématique officielle invite aussi à interroger ce que le faux peut avoir de fécond ou de révélateur (fiction, illusion artistique) — s\'en tenir à une lecture uniquement négative appauvrit la réflexion attendue.'
  },
  {
    id: 'ex-cg-theme-reponse-1',
    matiere: 'culture-generale', chapitre: 'cg-theme-vrai-faux', competence: 'cg.theme-vrai-faux',
    langage: null, difficulte: 'moyen', type: 'reponse-courte',
    annees: ['2026-2027'],
    enonce: 'Selon l\'anecdote antique rapportée par Pline l\'Ancien, quel peintre grec aurait trompé des oiseaux avec des raisins peints ?',
    reponsesAcceptees: ['zeuxis'],
    explication: 'Zeuxis est le peintre grec dont l\'illusion picturale aurait été si parfaite que des oiseaux tentèrent de picorer les raisins qu\'il avait peints.'
  },

  // ---------------------------------------------------------- CEJM — régulation
  {
    id: 'ex-cejm-regulation-qcm-1',
    matiere: 'cejm', chapitre: 'cejm-theme2-regulation', competence: 'cejm.regulation',
    langage: null, difficulte: 'moyen', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Qu\'est-ce qu\'une entente illicite entre entreprises ?',
    options: [
      { id: 'a', texte: 'Une fusion validée par l\'État' },
      { id: 'b', texte: 'Un accord entre concurrents pour fausser le jeu de la concurrence' },
      { id: 'c', texte: 'Un contrat de travail collectif' },
      { id: 'd', texte: 'Une aide financière de l\'État' }
    ],
    correctes: ['b'],
    explication: 'Une entente illicite est un accord (souvent secret) entre entreprises concurrentes visant à fausser la concurrence, par exemple en fixant des prix communs.'
  },
  {
    id: 'ex-cejm-regulation-vf-1',
    matiere: 'cejm', chapitre: 'cejm-theme2-regulation', competence: 'cejm.regulation',
    langage: null, difficulte: 'moyen', type: 'vrai-faux',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Détenir une position dominante sur un marché est en soi interdit par le droit de la concurrence.',
    correct: false,
    explication: 'La position dominante n\'est pas interdite en elle-même ; seul son ABUS (évincer des concurrents en en profitant) est sanctionné.'
  },

  // --------------------------------------------------------- CEJM — organisation
  {
    id: 'ex-cejm-organisation-qcm-1',
    matiere: 'cejm', chapitre: 'cejm-theme3-organisation', competence: 'cejm.organisation',
    langage: null, difficulte: 'moyen', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Qu\'appelle-t-on l\'externalisation d\'une activité ?',
    options: [
      { id: 'a', texte: 'La confier à un prestataire extérieur' },
      { id: 'b', texte: 'La réaliser en interne avec ses propres salariés' },
      { id: 'c', texte: 'L\'arrêter définitivement' },
      { id: 'd', texte: 'La breveter' }
    ],
    correctes: ['a'],
    explication: 'Externaliser consiste à confier une activité à un prestataire extérieur plutôt que de la réaliser soi-même (internalisation).'
  },
  {
    id: 'ex-cejm-organisation-reponse-1',
    matiere: 'cejm', chapitre: 'cejm-theme3-organisation', competence: 'cejm.organisation',
    langage: null, difficulte: 'moyen', type: 'reponse-courte',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Quels sont les deux grands facteurs de production ?',
    reponsesAcceptees: ['travail et capital', 'le travail et le capital', 'capital et travail', 'le capital et le travail'],
    explication: 'Le travail (les salariés) et le capital (machines, locaux, outils) sont les deux grands facteurs combinés pour produire.'
  },

  // -------------------------------------------------------------- CEJM — travail
  {
    id: 'ex-cejm-travail-qcm-1',
    matiere: 'cejm', chapitre: 'cejm-theme5-travail', competence: 'cejm.travail',
    langage: null, difficulte: 'facile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Quelle est la forme normale et générale du contrat de travail en France ?',
    options: [
      { id: 'a', texte: 'CDD' }, { id: 'b', texte: 'CDI' },
      { id: 'c', texte: 'Stage' }, { id: 'd', texte: 'Auto-entreprise' }
    ],
    correctes: ['b'],
    explication: 'Le CDI (contrat à durée indéterminée) est la forme normale et générale ; le CDD est réservé à des cas précis prévus par la loi.'
  },
  {
    id: 'ex-cejm-travail-vf-1',
    matiere: 'cejm', chapitre: 'cejm-theme5-travail', competence: 'cejm.travail',
    langage: null, difficulte: 'moyen', type: 'vrai-faux',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Le lien de subordination est ce qui distingue juridiquement un salarié d\'un travailleur indépendant.',
    correct: true,
    explication: 'Un salarié reçoit des directives de son employeur et peut être sanctionné en cas de non-respect ; un indépendant ne dépend pas hiérarchiquement d\'un donneur d\'ordre de la même façon.'
  },

  // ------------------------------------------------------------ CEJM — stratégie
  {
    id: 'ex-cejm-strategie-qcm-1',
    matiere: 'cejm', chapitre: 'cejm-theme6-strategie', competence: 'cejm.strategie',
    langage: null, difficulte: 'difficile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Une entreprise qui rachète un concurrent pratique une croissance...',
    options: [
      { id: 'a', texte: 'interne' }, { id: 'b', texte: 'externe' },
      { id: 'c', texte: 'nulle' }, { id: 'd', texte: 'négative' }
    ],
    correctes: ['b'],
    explication: 'Racheter ou fusionner avec une autre entreprise est une croissance EXTERNE, par opposition à la croissance interne qui repose sur le développement de ses propres ressources.'
  },
  {
    id: 'ex-cejm-strategie-reponse-1',
    matiere: 'cejm', chapitre: 'cejm-theme6-strategie', competence: 'cejm.strategie',
    langage: null, difficulte: 'difficile', type: 'reponse-courte',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Quel sigle désigne la prise en compte par l\'entreprise d\'intérêts au-delà des seuls actionnaires (salariés, environnement, société) ?',
    reponsesAcceptees: ['rse', 'la rse'],
    explication: 'RSE = Responsabilité Sociétale des Entreprises.'
  },

  // -------------------------------------------------------------- Maths — suites
  {
    id: 'ex-maths-suites-qcm-1',
    matiere: 'maths', chapitre: 'maths-suites', competence: 'maths.suites',
    langage: null, difficulte: 'moyen', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Comment reconnaît-on qu\'une suite est arithmétique ?',
    options: [
      { id: 'a', texte: 'Le quotient entre deux termes consécutifs est constant' },
      { id: 'b', texte: 'La différence entre deux termes consécutifs est constante' },
      { id: 'c', texte: 'Tous les termes sont positifs' },
      { id: 'd', texte: 'La suite est croissante' }
    ],
    correctes: ['b'],
    explication: 'Une suite arithmétique a une différence constante entre deux termes consécutifs (la raison r) ; un quotient constant caractérise une suite géométrique.'
  },
  {
    id: 'ex-maths-suites-reponse-1',
    matiere: 'maths', chapitre: 'maths-suites', competence: 'maths.suites',
    langage: null, difficulte: 'moyen', type: 'reponse-courte',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Une suite géométrique a pour premier terme u0 = 2 et pour raison q = 3. Quelle est la valeur de u1 ?',
    reponsesAcceptees: ['6'],
    explication: 'u1 = u0 × q = 2 × 3 = 6.'
  },

  // ------------------------------------------------------------- Maths — graphes
  {
    id: 'ex-maths-graphes-qcm-1',
    matiere: 'maths', chapitre: 'maths-graphes', competence: 'maths.graphes',
    langage: null, difficulte: 'difficile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Dans une méthode d\'ordonnancement de tâches, qu\'est-ce que le chemin critique ?',
    options: [
      { id: 'a', texte: 'Le chemin le plus court en durée' },
      { id: 'b', texte: 'Le chemin le plus long en durée, qui détermine la durée totale du projet' },
      { id: 'c', texte: 'Le premier chemin trouvé' },
      { id: 'd', texte: 'Un chemin sans aucune tâche' }
    ],
    correctes: ['b'],
    explication: 'Le chemin critique est le chemin le plus LONG en durée entre le début et la fin du projet : c\'est lui qui fixe la durée minimale totale.'
  },
  {
    id: 'ex-maths-graphes-reponse-1',
    matiere: 'maths', chapitre: 'maths-graphes', competence: 'maths.graphes',
    langage: null, difficulte: 'difficile', type: 'reponse-courte',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Dans un graphe orienté représentant des dépendances entre tâches, comment appelle-t-on les liaisons entre les sommets ?',
    reponsesAcceptees: ['arcs', 'des arcs'],
    explication: 'Dans un graphe ORIENTÉ, les liaisons entre sommets sont appelées des arcs (par opposition aux arêtes d\'un graphe non orienté, qui n\'ont pas de sens privilégié).'
  },

  // ------------------------------------------------------------ Maths — matrices
  {
    id: 'ex-maths-matrices-qcm-1',
    matiere: 'maths', chapitre: 'maths-matrices', competence: 'maths.matrices',
    langage: null, difficulte: 'difficile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Peut-on multiplier une matrice de taille 2×3 par une matrice de taille 3×4 ?',
    options: [
      { id: 'a', texte: 'Oui, le résultat sera de taille 2×4' },
      { id: 'b', texte: 'Non, les tailles ne sont jamais compatibles' },
      { id: 'c', texte: 'Oui, mais seulement si toutes les valeurs sont positives' },
      { id: 'd', texte: 'Non, il faudrait deux matrices carrées' }
    ],
    correctes: ['a'],
    explication: 'La multiplication est possible car le nombre de colonnes de la première (3) est égal au nombre de lignes de la seconde (3). Le résultat a la taille des deux nombres extérieurs : 2×4.'
  },
  {
    id: 'ex-maths-matrices-vf-1',
    matiere: 'maths', chapitre: 'maths-matrices', competence: 'maths.matrices',
    langage: null, difficulte: 'difficile', type: 'vrai-faux',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Pour deux matrices A et B, A×B est toujours égal à B×A.',
    correct: false,
    explication: 'Contrairement à la multiplication de nombres, la multiplication matricielle n\'est en général PAS commutative : l\'ordre compte.'
  },

  // ----------------------------------------------------------- Maths — ensembles
  {
    id: 'ex-maths-ensembles-qcm-1',
    matiere: 'maths', chapitre: 'maths-ensembles', competence: 'maths.ensembles',
    langage: null, difficulte: 'moyen', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Que contient l\'intersection A ∩ B de deux ensembles A et B ?',
    options: [
      { id: 'a', texte: 'Tous les éléments de A et tous ceux de B réunis' },
      { id: 'b', texte: 'Seulement les éléments présents à la fois dans A et dans B' },
      { id: 'c', texte: 'Seulement les éléments de A absents de B' },
      { id: 'd', texte: 'Un ensemble toujours vide' }
    ],
    correctes: ['b'],
    explication: 'L\'intersection ne garde que les éléments COMMUNS aux deux ensembles, contrairement à l\'union qui les réunit tous.'
  },
  {
    id: 'ex-maths-ensembles-completer-1',
    matiere: 'maths', chapitre: 'maths-ensembles', competence: 'maths.ensembles',
    langage: null, difficulte: 'moyen', type: 'completer-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Complète l\'union et l\'intersection de ces deux ensembles.',
    template: 'A = {2, 4, 6}\nB = {4, 6, 8}\n\nA ∪ B = {{1}}\nA ∩ B = {{2}}',
    trous: [
      { id: 1, accepte: ['{2, 4, 6, 8}', '2, 4, 6, 8', '{2,4,6,8}', '2,4,6,8'] },
      { id: 2, accepte: ['{4, 6}', '4, 6', '{4,6}', '4,6'] }
    ],
    explication: 'L\'union rassemble tous les éléments des deux ensembles sans répétition (2, 4, 6, 8) ; l\'intersection ne garde que les éléments communs (4 et 6).'
  },

  // ----------------------------------------------------------- Anglais — oral
  {
    id: 'ex-anglais-oral-qcm-1',
    matiere: 'anglais', chapitre: 'anglais-oral', competence: 'anglais.oral',
    langage: null, difficulte: 'moyen', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Quelle question revient presque systématiquement en entretien d\'embauche en anglais ?',
    options: [
      { id: 'a', texte: 'What\'s your favorite color?' },
      { id: 'b', texte: 'What are your strengths and weaknesses?' },
      { id: 'c', texte: 'Do you like pizza?' },
      { id: 'd', texte: 'What time is it?' }
    ],
    correctes: ['b'],
    explication: '"What are your strengths and weaknesses?" est une question classique et quasi systématique en entretien, à préparer à l\'avance.'
  },
  {
    id: 'ex-anglais-oral-completer-1',
    matiere: 'anglais', chapitre: 'anglais-oral', competence: 'anglais.oral',
    langage: null, difficulte: 'moyen', type: 'completer-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Complète avec la forme correcte du verbe entre parenthèses.',
    template: 'Last year, I {{1}} (do) a two-week internship. I {{2}} (work) on several projects since then.',
    trous: [
      { id: 1, accepte: ['did'] },
      { id: 2, accepte: ['have worked'] }
    ],
    explication: '"Last year" précise un moment : past simple ("did"). "Since then" évoque une période qui continue jusqu\'à maintenant : present perfect ("have worked").'
  },

  // ==================================================================
  // Renforts supplémentaires — compétences les plus légères et types
  // sous-représentés (corriger-code, niveau BTS), pour arriver à 100.
  // ==================================================================

  // ------------------------------------------------------- C# — while
  {
    id: 'ex-csharp-while-completer-1',
    matiere: 'slam-prog', chapitre: 'csharp-n2-while', competence: 'csharp.boucles.while',
    langage: 'csharp', difficulte: 'facile', type: 'completer-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Complète cette boucle qui doit afficher les nombres de 0 à 4.',
    template: 'int compteur = 0;\n{{1}} (compteur < 5)\n{\n    Console.WriteLine(compteur);\n    compteur{{2}};\n}',
    trous: [
      { id: 1, accepte: ['while'] },
      { id: 2, accepte: ['++'] }
    ],
    explication: '`while` répète tant que la condition est vraie. Sans `compteur++`, la boucle ne s\'arrêterait jamais (boucle infinie).'
  },
  {
    id: 'ex-csharp-while-prog-1',
    matiere: 'slam-prog', chapitre: 'csharp-n2-while', competence: 'csharp.boucles.while',
    langage: 'csharp', difficulte: 'moyen', type: 'programmation',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Écris une méthode `CompterJusqua` qui affiche (avec Console.WriteLine) les nombres de 1 à n, en utilisant une boucle while (pas for).',
    codeDepart: 'static void CompterJusqua(int n)\n{\n    // ton code ici\n}',
    criteres: [
      { regex: /while\s*\(/, label: 'utilise une boucle while' },
      { regex: /Console\.WriteLine/, label: 'affiche les valeurs' }
    ],
    solution: 'static void CompterJusqua(int n)\n{\n    int i = 1;\n    while (i <= n)\n    {\n        Console.WriteLine(i);\n        i++;\n    }\n}',
    explication: 'On initialise `i` avant la boucle, on affiche puis on incrémente à chaque tour, jusqu\'à ce que `i` dépasse `n`.'
  },

  // -------------------------------------------------- C# — Dictionary
  {
    id: 'ex-csharp-dict-completer-1',
    matiere: 'slam-prog', chapitre: 'csharp-n4-dictionary', competence: 'csharp.dictionary',
    langage: 'csharp', difficulte: 'moyen', type: 'completer-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Complète cette méthode qui lit une valeur sans risquer d\'erreur si la clé n\'existe pas.',
    template: 'Dictionary<string, int> ages = new Dictionary<string, int>();\nages["Ilhan"] = 19;\n\nif (ages.{{1}}("Ilhan", out int age))\n{\n    Console.WriteLine(age);\n}',
    trous: [{ id: 1, accepte: ['TryGetValue'] }],
    explication: '`TryGetValue` recherche une clé de façon sûre : elle renvoie vrai/faux selon que la clé existe, sans jamais planter.'
  },
  {
    id: 'ex-csharp-dict-prog-bts-1',
    matiere: 'slam-prog', chapitre: 'csharp-n4-dictionary', competence: 'csharp.dictionary',
    langage: 'csharp', difficulte: 'bts', type: 'programmation',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Niveau BTS — Écris une méthode `CompterOccurrences` qui reçoit une `List<string> mots` et renvoie un `Dictionary<string, int>` associant chaque mot au nombre de fois où il apparaît dans la liste.',
    codeDepart: 'static Dictionary<string, int> CompterOccurrences(List<string> mots)\n{\n    // ton code ici\n}',
    criteres: [
      { regex: /foreach\s*\(|for\s*\(/, label: 'parcourt la liste' },
      { regex: /return/, label: 'renvoie un résultat' },
      { regex: /ContainsKey|TryGetValue/, label: 'vérifie si le mot est déjà compté' }
    ],
    solution: 'static Dictionary<string, int> CompterOccurrences(List<string> mots)\n{\n    Dictionary<string, int> compteur = new Dictionary<string, int>();\n    foreach (string mot in mots)\n    {\n        if (compteur.ContainsKey(mot))\n        {\n            compteur[mot]++;\n        }\n        else\n        {\n            compteur[mot] = 1;\n        }\n    }\n    return compteur;\n}',
    explication: 'Pour chaque mot, on vérifie s\'il est déjà une clé du dictionnaire : si oui on incrémente son compteur, sinon on l\'ajoute avec la valeur 1.'
  },

  // -------------------------------------------------- C# — exceptions
  {
    id: 'ex-csharp-except-erreur-1',
    matiere: 'slam-prog', chapitre: 'csharp-n6-exceptions', competence: 'csharp.exceptions',
    langage: 'csharp', difficulte: 'moyen', type: 'trouver-erreur',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Ce programme plante quand même malgré le try/catch. Trouve la ligne fautive.',
    code: 'try\n{\n    int[] notes = { 10, 12 };\n    Console.WriteLine(notes[5]);\n}\ncatch (FormatException)\n{\n    Console.WriteLine("Erreur de format");\n}',
    ligneErreur: 6,
    explication: 'Ligne 6 : l\'erreur provoquée par `notes[5]` (indice hors limites) est une `IndexOutOfRangeException`, pas une `FormatException`. Ce catch ne l\'attrapera donc jamais : le programme plantera quand même.'
  },
  {
    id: 'ex-csharp-except-completer-1',
    matiere: 'slam-prog', chapitre: 'csharp-n6-exceptions', competence: 'csharp.exceptions',
    langage: 'csharp', difficulte: 'facile', type: 'completer-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Complète cette gestion d\'exception.',
    template: '{{1}}\n{\n    int resultat = 10 / diviseur;\n    Console.WriteLine(resultat);\n}\n{{2}} (DivideByZeroException)\n{\n    Console.WriteLine("Division impossible par zéro");\n}',
    trous: [
      { id: 1, accepte: ['try'] },
      { id: 2, accepte: ['catch'] }
    ],
    explication: '`try` entoure le code risqué, `catch` définit ce qu\'il faut faire si l\'exception précisée se produit.'
  },

  // -------------------------------------------------------- C# — BDD
  {
    id: 'ex-csharp-bdd-completer-1',
    matiere: 'slam-prog', chapitre: 'csharp-n7-bdd', competence: 'csharp.bdd',
    langage: 'csharp', difficulte: 'moyen', type: 'completer-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Complète cette requête paramétrée.',
    template: 'string requete = "SELECT nom FROM client WHERE id_client = @id";\nSqlCommand commande = new SqlCommand(requete, connexion);\ncommande.{{1}}.AddWithValue("@id", idRecherche);',
    trous: [{ id: 1, accepte: ['Parameters'] }],
    explication: '`Parameters.AddWithValue` fournit la vraie valeur du paramètre nommé `@id` de façon sécurisée.'
  },
  {
    id: 'ex-csharp-bdd-corriger-1',
    matiere: 'slam-prog', chapitre: 'csharp-n7-bdd', competence: 'csharp.bdd',
    langage: 'csharp', difficulte: 'difficile', type: 'corriger-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Ce code est vulnérable à l\'injection SQL. Corrige-le en utilisant une requête paramétrée.',
    codeInitial: 'string requete = "SELECT * FROM client WHERE email = \'" + emailSaisi + "\'";\nSqlCommand commande = new SqlCommand(requete, connexion);',
    verif: [
      { regex: /@\w+/, label: 'utilise un paramètre nommé (@...)' },
      { regex: /Parameters/, label: 'utilise Parameters.AddWithValue' }
    ],
    solution: 'string requete = "SELECT * FROM client WHERE email = @email";\nSqlCommand commande = new SqlCommand(requete, connexion);\ncommande.Parameters.AddWithValue("@email", emailSaisi);',
    explication: 'La concaténation directe de `emailSaisi` dans la requête permet une injection SQL. Il faut un paramètre nommé (`@email`) et `Parameters.AddWithValue` pour fournir la valeur séparément.'
  },

  // ---------------------------------------------------- SQL — GROUP BY
  {
    id: 'ex-sql-groupby-lire-1',
    matiere: 'slam-bdd', chapitre: 'sql-n3-agregats', competence: 'sql.groupby',
    langage: 'sql', difficulte: 'moyen', type: 'lire-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Table `commande` (id_commande, id_client, montant) :\n1, 10, 50\n2, 10, 30\n3, 20, 100',
    code: 'SELECT id_client, COUNT(*) AS nb\nFROM commande\nGROUP BY id_client;',
    question: 'Combien de lignes ce résultat contiendra-t-il ?',
    reponsesAcceptees: ['2', '2 lignes'],
    explication: 'Il y a deux clients distincts (10 et 20) : GROUP BY id_client produit un groupe par client, donc 2 lignes de résultat.'
  },
  {
    id: 'ex-sql-groupby-reponse-1',
    matiere: 'slam-bdd', chapitre: 'sql-n3-agregats', competence: 'sql.groupby',
    langage: 'sql', difficulte: 'facile', type: 'reponse-courte',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Quelle fonction d\'agrégation permet de calculer une moyenne en SQL ?',
    reponsesAcceptees: ['avg', 'avg()'],
    explication: '`AVG(colonne)` calcule la moyenne des valeurs de cette colonne.'
  },

  // -------------------------------------------------- SQL — INSERT/UPDATE/DELETE
  {
    id: 'ex-sql-dml-completer-1',
    matiere: 'slam-bdd', chapitre: 'sql-n4-modification', competence: 'sql.dml',
    langage: 'sql', difficulte: 'facile', type: 'completer-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Complète cette requête d\'ajout d\'un client.',
    template: '{{1}} INTO client (nom, ville)\n{{2}} (\'Petit\', \'Nantes\');',
    trous: [
      { id: 1, accepte: ['INSERT', 'insert'] },
      { id: 2, accepte: ['VALUES', 'values'] }
    ],
    explication: '`INSERT INTO table (colonnes)` suivi de `VALUES (valeurs)` ajoute une nouvelle ligne.'
  },
  {
    id: 'ex-sql-dml-corriger-1',
    matiere: 'slam-bdd', chapitre: 'sql-n4-modification', competence: 'sql.dml',
    langage: 'sql', difficulte: 'difficile', type: 'corriger-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Cette requête va supprimer TOUS les clients. Corrige-la pour ne supprimer que le client d\'identifiant 7.',
    codeInitial: 'DELETE FROM client;',
    verif: [{ regex: /WHERE\s+id_client\s*=\s*7/i, label: 'ajoute WHERE id_client = 7' }],
    solution: 'DELETE FROM client WHERE id_client = 7;',
    explication: 'Sans clause WHERE, un DELETE supprime toutes les lignes de la table. Ajouter `WHERE id_client = 7` limite la suppression à un seul client.'
  },

  // --------------------------------------------------------- SQL — JOIN
  {
    id: 'ex-sql-join-prog-1',
    matiere: 'slam-bdd', chapitre: 'sql-n2-jointures', competence: 'sql.join',
    langage: 'sql', difficulte: 'bts', type: 'programmation',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Niveau BTS — Écris une requête qui affiche le nom du client et le montant de chacune de ses commandes, uniquement pour les commandes de plus de 100, triées par montant décroissant.',
    codeDepart: '-- ta requête ici\n',
    criteres: [
      { regex: /JOIN/i, label: 'utilise une jointure' },
      { regex: /WHERE/i, label: 'filtre avec WHERE' },
      { regex: /ORDER BY/i, label: 'trie avec ORDER BY' },
      { regex: /DESC/i, label: 'trie en ordre décroissant' }
    ],
    solution: 'SELECT client.nom, commande.montant\nFROM client\nINNER JOIN commande ON client.id_client = commande.id_client\nWHERE commande.montant > 100\nORDER BY commande.montant DESC;',
    explication: 'On combine client et commande avec une jointure, on filtre les commandes de plus de 100, puis on trie par montant décroissant.'
  },

  // ------------------------------------------------------- SQL — SELECT
  {
    id: 'ex-sql-select-corriger-1',
    matiere: 'slam-bdd', chapitre: 'sql-n1-select', competence: 'sql.select',
    langage: 'sql', difficulte: 'moyen', type: 'corriger-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Cette requête ne s\'exécute pas. Corrige l\'erreur de syntaxe.',
    codeInitial: 'SELECT nom, prenom\nFROM client\nWHERE ville = Paris;',
    verif: [{ regex: /'Paris'/, label: 'la valeur texte \'Paris\' est entre guillemets simples' }],
    solution: 'SELECT nom, prenom\nFROM client\nWHERE ville = \'Paris\';',
    explication: 'Une valeur texte doit être entourée de guillemets simples en SQL : `\'Paris\'`, pas `Paris` seul.'
  },

  // --------------------------------------------------------- C# — POO
  {
    id: 'ex-csharp-classes-prog-bts-1',
    matiere: 'slam-prog', chapitre: 'csharp-n5-classes', competence: 'csharp.poo.classes',
    langage: 'csharp', difficulte: 'bts', type: 'programmation',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Niveau BTS — Complète la classe `CompteBancaire` : le constructeur initialise le solde, `Deposer` ajoute au solde, `Retirer` ne retire QUE si le solde est suffisant (sinon elle ne fait rien).',
    codeDepart: 'class CompteBancaire\n{\n    private double solde;\n\n    public CompteBancaire(double soldeInitial)\n    {\n        // ton code ici\n    }\n\n    public void Deposer(double montant)\n    {\n        // ton code ici\n    }\n\n    public void Retirer(double montant)\n    {\n        // ton code ici\n    }\n}',
    criteres: [
      { regex: /this\.solde\s*=\s*soldeInitial/, label: 'le constructeur initialise bien le solde' },
      { regex: /solde\s*\+=\s*montant|solde\s*=\s*solde\s*\+\s*montant/, label: 'Deposer augmente le solde' },
      { regex: /if\s*\(\s*solde\s*>=\s*montant\s*\)/, label: 'Retirer vérifie que le solde est suffisant' }
    ],
    solution: 'class CompteBancaire\n{\n    private double solde;\n\n    public CompteBancaire(double soldeInitial)\n    {\n        this.solde = soldeInitial;\n    }\n\n    public void Deposer(double montant)\n    {\n        solde += montant;\n    }\n\n    public void Retirer(double montant)\n    {\n        if (solde >= montant)\n        {\n            solde -= montant;\n        }\n    }\n}',
    explication: 'Le constructeur initialise l\'attribut avec `this.solde = soldeInitial;`. `Deposer` ajoute simplement au solde. `Retirer` vérifie d\'abord que le solde est suffisant avant de retirer, pour éviter un solde négatif.'
  },

  // ---------------------------------------------------------- CEJM
  {
    id: 'ex-cejm-agents-reponse-1',
    matiere: 'cejm', chapitre: 'cejm-theme1-agents-economiques', competence: 'cejm.agents-economiques',
    langage: null, difficulte: 'facile', type: 'reponse-courte',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Sur un marché, comment appelle-t-on ce qui résulte en théorie de la rencontre entre l\'offre et la demande ?',
    reponsesAcceptees: ['le prix', 'prix'],
    explication: 'Le prix résulte en théorie de l\'équilibre entre l\'offre (ce que proposent les entreprises) et la demande (ce que veulent les ménages et autres agents).'
  },

  // -------------------------------------------------------------- Maths
  {
    id: 'ex-maths-bool-reponse-1',
    matiere: 'maths', chapitre: 'maths-booleen', competence: 'maths.booleen',
    langage: null, difficulte: 'moyen', type: 'reponse-courte',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Que vaut NON(1) en calcul booléen ?',
    reponsesAcceptees: ['0'],
    explication: 'NON inverse la valeur : NON(1) = 0, et NON(0) = 1.'
  },

  // ------------------------------------------------------------ Anglais
  {
    id: 'ex-anglais-vocab-completer-1',
    matiere: 'anglais', chapitre: 'anglais-vocabulaire-it', competence: 'anglais.vocabulaire-it',
    langage: null, difficulte: 'facile', type: 'completer-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Complète avec le mot anglais qui convient.',
    template: 'The application crashed because of a critical {{1}}. The developer had to {{2}} it quickly before the next release.',
    trous: [
      { id: 1, accepte: ['bug'] },
      { id: 2, accepte: ['fix'] }
    ],
    explication: '"Bug" désigne l\'erreur logicielle, "fix" (corriger) est l\'action de la résoudre.'
  },

  // --------------------------------------------------- Culture générale
  {
    id: 'ex-cg-ecriture-reponse-1',
    matiere: 'culture-generale', chapitre: 'cg-ecriture-personnelle', competence: 'cg.ecriture-personnelle',
    langage: null, difficulte: 'moyen', type: 'reponse-courte',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Comment appelle-t-on la formulation qui reconnaît un point de vue opposé avant de le nuancer (ex : "certes... cependant...") ?',
    reponsesAcceptees: ['concession', 'une concession', 'la concession'],
    explication: 'Cette figure, qui reconnaît un point avant de le nuancer, s\'appelle une concession — elle montre une réflexion plus nuancée qu\'une position uniquement tranchée.'
  },

  // ---------------------------------------------------------- C# — héritage
  {
    id: 'ex-csharp-heritage-qcm-1',
    matiere: 'slam-prog', chapitre: 'csharp-n5-heritage', competence: 'csharp.poo.heritage',
    langage: 'csharp', difficulte: 'moyen', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Quel mot-clé faut-il ajouter à une méthode de la classe MÈRE pour qu\'elle puisse être redéfinie par une classe fille ?',
    options: [
      { id: 'a', texte: 'override' }, { id: 'b', texte: 'virtual' },
      { id: 'c', texte: 'base' }, { id: 'd', texte: 'static' }
    ],
    correctes: ['b'],
    explication: '`virtual` sur la méthode mère l\'autorise à être redéfinie ; `override`, côté fille, réalise cette redéfinition.'
  },
  {
    id: 'ex-csharp-heritage-completer-1',
    matiere: 'slam-prog', chapitre: 'csharp-n5-heritage', competence: 'csharp.poo.heritage',
    langage: 'csharp', difficulte: 'difficile', type: 'completer-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Complète cette redéfinition de méthode.',
    template: 'class Animal\n{\n    public {{1}} void Crier()\n    {\n        Console.WriteLine("...");\n    }\n}\n\nclass Chien : Animal\n{\n    public {{2}} void Crier()\n    {\n        Console.WriteLine("Wouf !");\n    }\n}',
    trous: [
      { id: 1, accepte: ['virtual'] },
      { id: 2, accepte: ['override'] }
    ],
    explication: 'La méthode mère doit être `virtual` pour pouvoir être redéfinie ; la méthode fille utilise `override` pour la redéfinir effectivement.'
  },

  // ---------------------------------------------------- C# — polymorphisme
  {
    id: 'ex-csharp-polymorphisme-qcm-1',
    matiere: 'slam-prog', chapitre: 'csharp-n5-polymorphisme', competence: 'csharp.poo.polymorphisme',
    langage: 'csharp', difficulte: 'difficile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Que permet le polymorphisme ?',
    options: [
      { id: 'a', texte: 'Créer plusieurs constructeurs pour une classe' },
      { id: 'b', texte: 'Appeler la même méthode sur des objets de types différents, chacun exécutant sa propre version' },
      { id: 'c', texte: 'Empêcher l\'héritage d\'une classe' },
      { id: 'd', texte: 'Rendre une méthode privée' }
    ],
    correctes: ['b'],
    explication: 'Le polymorphisme permet d\'appeler une même méthode sur des objets de classes différentes (liées par héritage), chacun exécutant sa propre version redéfinie.'
  },
  {
    id: 'ex-csharp-polymorphisme-lire-1',
    matiere: 'slam-prog', chapitre: 'csharp-n5-polymorphisme', competence: 'csharp.poo.polymorphisme',
    langage: 'csharp', difficulte: 'difficile', type: 'lire-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Lis attentivement ce programme.',
    code: 'class Forme\n{\n    public virtual void Afficher() { Console.WriteLine("Forme"); }\n}\nclass Cercle : Forme\n{\n    public override void Afficher() { Console.WriteLine("Cercle"); }\n}\nclass Carre : Forme\n{\n    public override void Afficher() { Console.WriteLine("Carré"); }\n}\n\nList<Forme> formes = new List<Forme> { new Cercle(), new Carre() };\nforeach (Forme f in formes)\n{\n    f.Afficher();\n}',
    question: 'Que va afficher ce programme (dans l\'ordre) ?',
    reponsesAcceptees: ['cercle carré', 'cercle et carré', 'cercle, carré'],
    explication: 'Chaque objet exécute sa propre version redéfinie de Afficher() : d\'abord Cercle affiche "Cercle", puis Carré affiche "Carré", dans l\'ordre de la liste.'
  },

  // ------------------------------------------------------- C# — interfaces
  {
    id: 'ex-csharp-interfaces-qcm-1',
    matiere: 'slam-prog', chapitre: 'csharp-n5-interfaces', competence: 'csharp.poo.interfaces',
    langage: 'csharp', difficulte: 'difficile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Combien d\'interfaces une classe C# peut-elle implémenter en même temps ?',
    options: [
      { id: 'a', texte: 'Aucune' }, { id: 'b', texte: 'Une seule' },
      { id: 'c', texte: 'Plusieurs, autant que nécessaire' }, { id: 'd', texte: 'Deux maximum' }
    ],
    correctes: ['c'],
    explication: 'Contrairement à l\'héritage de classe (limité à une seule classe mère), une classe C# peut implémenter autant d\'interfaces que nécessaire.'
  },
  {
    id: 'ex-csharp-interfaces-vf-1',
    matiere: 'slam-prog', chapitre: 'csharp-n5-interfaces', competence: 'csharp.poo.interfaces',
    langage: 'csharp', difficulte: 'difficile', type: 'vrai-faux',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'On peut créer un objet directement à partir d\'une classe abstraite avec new.',
    correct: false,
    explication: 'Une classe abstraite ne peut jamais être instanciée directement : elle sert uniquement de modèle à hériter. Seule une classe concrète qui en hérite peut être instanciée.'
  },

  // -------------------------------------------------------- C# — recherche
  {
    id: 'ex-csharp-recherche-qcm-1',
    matiere: 'slam-prog', chapitre: 'csharp-n6-recherche', competence: 'csharp.algo.recherche',
    langage: 'csharp', difficulte: 'difficile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Quelle condition est indispensable pour utiliser une recherche dichotomique ?',
    options: [
      { id: 'a', texte: 'Le tableau doit être trié' },
      { id: 'b', texte: 'Le tableau doit contenir uniquement des nombres pairs' },
      { id: 'c', texte: 'Le tableau doit avoir moins de 10 éléments' },
      { id: 'd', texte: 'Aucune condition particulière' }
    ],
    correctes: ['a'],
    explication: 'La recherche dichotomique élimine une moitié du tableau à chaque étape en se basant sur l\'ordre des valeurs : sans tri préalable, cette logique ne fonctionne pas.'
  },
  {
    id: 'ex-csharp-recherche-prog-1',
    matiere: 'slam-prog', chapitre: 'csharp-n6-recherche', competence: 'csharp.algo.recherche',
    langage: 'csharp', difficulte: 'difficile', type: 'programmation',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Écris une méthode `Contient` qui reçoit un tableau `int[] valeurs` et un entier `cible`, et renvoie `true` si `cible` est présent dans le tableau (recherche séquentielle).',
    codeDepart: 'static bool Contient(int[] valeurs, int cible)\n{\n    // ton code ici\n}',
    criteres: [
      { regex: /for(each)?\s*\(/, label: 'parcourt le tableau (for ou foreach)' },
      { regex: /return/, label: 'renvoie un résultat' }
    ],
    solution: 'static bool Contient(int[] valeurs, int cible)\n{\n    foreach (int v in valeurs)\n    {\n        if (v == cible)\n        {\n            return true;\n        }\n    }\n    return false;\n}',
    explication: 'On parcourt le tableau et on renvoie `true` dès qu\'une valeur correspond à la cible. Si la boucle se termine sans correspondance, on renvoie `false`.'
  },

  // ------------------------------------------------------------- C# — tri
  {
    id: 'ex-csharp-tri-qcm-1',
    matiere: 'slam-prog', chapitre: 'csharp-n6-tri', competence: 'csharp.algo.tri',
    langage: 'csharp', difficulte: 'difficile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Dans le tri par sélection, combien d\'échanges effectue-t-on à chaque passage de la boucle principale ?',
    options: [
      { id: 'a', texte: 'Un seul' }, { id: 'b', texte: 'Autant que d\'éléments restants' },
      { id: 'c', texte: 'Zéro' }, { id: 'd', texte: 'Deux' }
    ],
    correctes: ['a'],
    explication: 'Le tri par sélection cherche le minimum restant puis fait UN SEUL échange par passage — contrairement au tri à bulles, qui peut échanger plusieurs paires à chaque passage.'
  },
  {
    id: 'ex-csharp-tri-lire-1',
    matiere: 'slam-prog', chapitre: 'csharp-n6-tri', competence: 'csharp.algo.tri',
    langage: 'csharp', difficulte: 'difficile', type: 'lire-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Lis attentivement ce programme.',
    code: 'int[] valeurs = { 5, 2, 8 };\nint temp = valeurs[0];\nvaleurs[0] = valeurs[2];\nvaleurs[2] = temp;\n\nforeach (int v in valeurs)\n{\n    Console.Write(v + " ");\n}',
    question: 'Que va afficher ce programme ?',
    reponsesAcceptees: ['8 2 5'],
    explication: 'L\'échange via la variable temporaire inverse les positions 0 et 2 : le tableau {5, 2, 8} devient {8, 2, 5}.'
  },

  // ------------------------------------------------------ Cybersécurité
  {
    id: 'ex-cyber-menaces-qcm-1',
    matiere: 'cybersecurite', chapitre: 'cyber-menaces', competence: 'cyber.menaces',
    langage: null, difficulte: 'moyen', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Quel type de logiciel malveillant chiffre les données de la victime et exige une rançon pour les débloquer ?',
    options: [
      { id: 'a', texte: 'Un virus' }, { id: 'b', texte: 'Un cheval de Troie' },
      { id: 'c', texte: 'Un rançongiciel (ransomware)' }, { id: 'd', texte: 'Un ver' }
    ],
    correctes: ['c'],
    explication: 'Un rançongiciel (ransomware) chiffre les données de la victime et exige le paiement d\'une rançon pour fournir la clé de déchiffrement.'
  },
  {
    id: 'ex-cyber-menaces-vf-1',
    matiere: 'cybersecurite', chapitre: 'cyber-menaces', competence: 'cyber.menaces',
    langage: null, difficulte: 'moyen', type: 'vrai-faux',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Le phishing repose principalement sur l\'exploitation d\'une faille technique du système visé.',
    correct: false,
    explication: 'Le phishing relève de l\'ingénierie sociale : il repose sur la manipulation psychologique de la victime, pas sur une faille technique.'
  },

  // -------------------------------------------------- Cybersécurité — web
  {
    id: 'ex-cyber-web-qcm-1',
    matiere: 'cybersecurite', chapitre: 'cyber-securite-web', competence: 'cyber.securite-web',
    langage: null, difficulte: 'difficile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Quelle attaque consiste à injecter du code JavaScript malveillant qui s\'exécutera dans le navigateur d\'autres visiteurs ?',
    options: [
      { id: 'a', texte: 'Injection SQL' }, { id: 'b', texte: 'XSS' },
      { id: 'c', texte: 'CSRF' }, { id: 'd', texte: 'Phishing' }
    ],
    correctes: ['b'],
    explication: 'Le XSS (Cross-Site Scripting) injecte du code malveillant dans une page web, qui s\'exécute ensuite dans le navigateur des visiteurs qui la consultent.'
  },
  {
    id: 'ex-cyber-web-vf-1',
    matiere: 'cybersecurite', chapitre: 'cyber-securite-web', competence: 'cyber.securite-web',
    langage: null, difficulte: 'difficile', type: 'vrai-faux',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Les mots de passe doivent être stockés en clair dans la base de données pour permettre à l\'utilisateur de les récupérer facilement en cas d\'oubli.',
    correct: false,
    explication: 'Les mots de passe doivent toujours être stockés hachés, jamais en clair. En cas d\'oubli, on réinitialise le mot de passe — on ne "récupère" jamais l\'original.'
  },

  // ------------------------------------------------------ C# — conversions
  {
    id: 'ex-csharp-conversion-qcm-1',
    matiere: 'slam-prog', chapitre: 'csharp-n1-conversion', competence: 'csharp.conversion',
    langage: 'csharp', difficulte: 'facile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Que renvoie `int.TryParse("abc", out int x)` ?',
    options: [
      { id: 'a', texte: 'Une exception est levée' },
      { id: 'b', texte: 'false, et x vaut 0' },
      { id: 'c', texte: 'true, et x vaut 0' },
      { id: 'd', texte: '"abc" converti en nombre' }
    ],
    correctes: ['b'],
    explication: '`TryParse` ne plante jamais : si la conversion échoue, elle renvoie `false` et place la valeur par défaut (0 pour un int) dans la variable de sortie.'
  },
  {
    id: 'ex-csharp-conversion-completer-1',
    matiere: 'slam-prog', chapitre: 'csharp-n1-conversion', competence: 'csharp.conversion',
    langage: 'csharp', difficulte: 'facile', type: 'completer-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Complète cette conversion sécurisée d\'une saisie utilisateur.',
    template: 'string saisie = Console.ReadLine();\nif ({{1}}.{{2}}(saisie, out int age))\n{\n    Console.WriteLine(age);\n}',
    trous: [
      { id: 1, accepte: ['int'] },
      { id: 2, accepte: ['TryParse'] }
    ],
    explication: '`int.TryParse(saisie, out int age)` tente de convertir la saisie en entier, sans jamais planter même si elle est invalide.'
  },

  // ---------------------------------------------------- C# — break/continue
  {
    id: 'ex-csharp-breakcontinue-qcm-1',
    matiere: 'slam-prog', chapitre: 'csharp-n2-breakcontinue', competence: 'csharp.breakcontinue',
    langage: 'csharp', difficulte: 'facile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Quelle instruction arrête complètement une boucle ?',
    options: [
      { id: 'a', texte: 'continue' }, { id: 'b', texte: 'break' },
      { id: 'c', texte: 'return' }, { id: 'd', texte: 'stop' }
    ],
    correctes: ['b'],
    explication: '`break` arrête immédiatement la boucle en cours ; `continue` ne fait que sauter au tour suivant sans l\'arrêter.'
  },
  {
    id: 'ex-csharp-breakcontinue-lire-1',
    matiere: 'slam-prog', chapitre: 'csharp-n2-breakcontinue', competence: 'csharp.breakcontinue',
    langage: 'csharp', difficulte: 'moyen', type: 'lire-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Lis attentivement ce programme.',
    code: 'for (int i = 1; i <= 5; i++)\n{\n    if (i == 3)\n    {\n        continue;\n    }\n    Console.Write(i + " ");\n}',
    question: 'Que va afficher ce programme ?',
    reponsesAcceptees: ['1 2 4 5'],
    explication: '`continue` saute uniquement l\'affichage quand i vaut 3, sans arrêter la boucle : 1, 2, 4, 5 s\'affichent.'
  },

  // ---------------------------------------------------------- C# — strings
  {
    id: 'ex-csharp-strings-qcm-1',
    matiere: 'slam-prog', chapitre: 'csharp-n2-strings', competence: 'csharp.strings',
    langage: 'csharp', difficulte: 'moyen', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Que renvoie `"Bonjour".Substring(0, 3)` ?',
    options: [
      { id: 'a', texte: '"Bon"' }, { id: 'b', texte: '"jour"' },
      { id: 'c', texte: '"Bonjour"' }, { id: 'd', texte: '"our"' }
    ],
    correctes: ['a'],
    explication: '`Substring(0, 3)` extrait 3 caractères à partir de l\'indice 0 : "Bon".'
  },
  {
    id: 'ex-csharp-strings-completer-1',
    matiere: 'slam-prog', chapitre: 'csharp-n2-strings', competence: 'csharp.strings',
    langage: 'csharp', difficulte: 'moyen', type: 'completer-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Complète ce code qui extrait le nom d\'utilisateur d\'une adresse email.',
    template: 'string email = "eleve@ecole.fr";\nstring[] parties = email.{{1}}(\'@\');\nstring utilisateur = parties[{{2}}];',
    trous: [
      { id: 1, accepte: ['Split'] },
      { id: 2, accepte: ['0'] }
    ],
    explication: '`Split(\'@\')` découpe la chaîne au niveau du @ ; l\'indice 0 correspond à la première partie du tableau résultant.'
  },

  // ------------------------------------------------------ C# — tableaux 2D
  {
    id: 'ex-csharp-tableaux2d-qcm-1',
    matiere: 'slam-prog', chapitre: 'csharp-n4-tableaux2d', competence: 'csharp.tableaux2d',
    langage: 'csharp', difficulte: 'difficile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Pour un tableau `int[,] grille = new int[3, 5];`, que renvoie `grille.GetLength(1)` ?',
    options: [
      { id: 'a', texte: '3' }, { id: 'b', texte: '5' },
      { id: 'c', texte: '15' }, { id: 'd', texte: '0' }
    ],
    correctes: ['b'],
    explication: '`GetLength(1)` donne le nombre de COLONNES (le deuxième indice), soit 5. `GetLength(0)` aurait donné le nombre de lignes, 3.'
  },
  {
    id: 'ex-csharp-tableaux2d-lire-1',
    matiere: 'slam-prog', chapitre: 'csharp-n4-tableaux2d', competence: 'csharp.tableaux2d',
    langage: 'csharp', difficulte: 'difficile', type: 'lire-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Lis attentivement ce programme.',
    code: 'int[,] grille = { { 1, 2 }, { 3, 4 } };\nConsole.WriteLine(grille[1, 0]);',
    question: 'Que va afficher ce programme ?',
    reponsesAcceptees: ['3'],
    explication: 'grille[1, 0] désigne la ligne d\'indice 1 (la deuxième ligne, {3, 4}), colonne d\'indice 0 : la valeur 3.'
  },

  // ------------------------------------------------------- C# — propriétés
  {
    id: 'ex-csharp-proprietes-qcm-1',
    matiere: 'slam-prog', chapitre: 'csharp-n5-proprietes', competence: 'csharp.proprietes',
    langage: 'csharp', difficulte: 'moyen', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Dans le bloc `set` d\'une propriété, quel mot-clé représente la valeur qu\'on essaie d\'affecter ?',
    options: [
      { id: 'a', texte: 'this' }, { id: 'b', texte: 'value' },
      { id: 'c', texte: 'set' }, { id: 'd', texte: 'get' }
    ],
    correctes: ['b'],
    explication: '`value` est un mot-clé réservé qui représente, à l\'intérieur d\'un bloc set, la valeur que l\'on essaie d\'affecter à la propriété.'
  },
  {
    id: 'ex-csharp-proprietes-completer-1',
    matiere: 'slam-prog', chapitre: 'csharp-n5-proprietes', competence: 'csharp.proprietes',
    langage: 'csharp', difficulte: 'moyen', type: 'completer-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Complète cette propriété automatique.',
    template: 'public int Age { {{1}}; {{2}}; }',
    trous: [
      { id: 1, accepte: ['get'] },
      { id: 2, accepte: ['set'] }
    ],
    explication: '{ get; set; } est la syntaxe d\'une propriété automatique : C# gère lui-même l\'attribut caché associé.'
  },

  // ------------------------------------------------------------ C# — static
  {
    id: 'ex-csharp-static-qcm-1',
    matiere: 'slam-prog', chapitre: 'csharp-n5-static', competence: 'csharp.static',
    langage: 'csharp', difficulte: 'moyen', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Comment appelle-t-on une méthode static `MaMethode()` de la classe `MaClasse` ?',
    options: [
      { id: 'a', texte: 'unObjet.MaMethode()' }, { id: 'b', texte: 'MaClasse.MaMethode()' },
      { id: 'c', texte: 'new MaClasse().MaMethode()' }, { id: 'd', texte: 'static.MaMethode()' }
    ],
    correctes: ['b'],
    explication: 'Un membre static s\'appelle via le NOM DE LA CLASSE, pas via un objet particulier.'
  },
  {
    id: 'ex-csharp-static-vf-1',
    matiere: 'slam-prog', chapitre: 'csharp-n5-static', competence: 'csharp.static',
    langage: 'csharp', difficulte: 'moyen', type: 'vrai-faux',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Un attribut static est propre à chaque objet créé, comme un attribut normal.',
    correct: false,
    explication: 'C\'est l\'inverse : un attribut static est partagé par TOUS les objets de la classe, il n\'en existe qu\'une seule copie.'
  },

  // -------------------------------------------------------------- C# — enum
  {
    id: 'ex-csharp-enum-qcm-1',
    matiere: 'slam-prog', chapitre: 'csharp-n5-enum', competence: 'csharp.enum',
    langage: 'csharp', difficulte: 'facile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Comment utilise-t-on la valeur `EnCours` d\'un enum nommé `Statut` ?',
    options: [
      { id: 'a', texte: 'EnCours' }, { id: 'b', texte: 'Statut.EnCours' },
      { id: 'c', texte: 'Statut->EnCours' }, { id: 'd', texte: 'new Statut.EnCours()' }
    ],
    correctes: ['b'],
    explication: 'Une valeur d\'enum s\'utilise toujours préfixée par le nom de l\'énumération : `Statut.EnCours`.'
  },
  {
    id: 'ex-csharp-enum-completer-1',
    matiere: 'slam-prog', chapitre: 'csharp-n5-enum', competence: 'csharp.enum',
    langage: 'csharp', difficulte: 'facile', type: 'completer-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Complète la déclaration et l\'utilisation de cette énumération.',
    template: '{{1}} Jour { Lundi, Mardi, Mercredi }\n\nJour aujourdhui = {{2}}.Mardi;',
    trous: [
      { id: 1, accepte: ['enum'] },
      { id: 2, accepte: ['Jour'] }
    ],
    explication: '`enum` déclare l\'énumération ; on utilise ensuite une de ses valeurs préfixée par son nom, ici `Jour.Mardi`.'
  },

  // ---------------------------------------------------------- C# — fichiers
  {
    id: 'ex-csharp-fichiers-qcm-1',
    matiere: 'slam-prog', chapitre: 'csharp-n6-fichiers', competence: 'csharp.fichiers',
    langage: 'csharp', difficulte: 'difficile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Quelle méthode ajoute du texte à la fin d\'un fichier SANS effacer son contenu existant ?',
    options: [
      { id: 'a', texte: 'File.WriteAllText' }, { id: 'b', texte: 'File.AppendAllText' },
      { id: 'c', texte: 'File.ReadAllText' }, { id: 'd', texte: 'File.Delete' }
    ],
    correctes: ['b'],
    explication: '`File.AppendAllText` ajoute à la suite du contenu existant ; `File.WriteAllText` écrase systématiquement tout le fichier.'
  },
  {
    id: 'ex-csharp-fichiers-vf-1',
    matiere: 'slam-prog', chapitre: 'csharp-n6-fichiers', competence: 'csharp.fichiers',
    langage: 'csharp', difficulte: 'difficile', type: 'vrai-faux',
    annees: ['2025-2026', '2026-2027'],
    enonce: '`File.ReadAllLines` renvoie tout le contenu du fichier sous la forme d\'une seule chaîne de caractères.',
    correct: false,
    explication: '`File.ReadAllLines` renvoie un TABLEAU de chaînes, une par ligne. C\'est `File.ReadAllText` qui renvoie une seule grande chaîne.'
  },

  // ------------------------------------------------------------- C# — LINQ
  {
    id: 'ex-csharp-linq-qcm-1',
    matiere: 'slam-prog', chapitre: 'csharp-n6-linq', competence: 'csharp.linq',
    langage: 'csharp', difficulte: 'difficile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Que fait `notes.Where(n => n >= 10)` ?',
    options: [
      { id: 'a', texte: 'Trie les notes' },
      { id: 'b', texte: 'Filtre les notes supérieures ou égales à 10' },
      { id: 'c', texte: 'Compte les notes' },
      { id: 'd', texte: 'Additionne les notes' }
    ],
    correctes: ['b'],
    explication: '`Where` filtre une collection en ne gardant que les éléments qui respectent la condition donnée par la lambda.'
  },
  {
    id: 'ex-csharp-linq-completer-1',
    matiere: 'slam-prog', chapitre: 'csharp-n6-linq', competence: 'csharp.linq',
    langage: 'csharp', difficulte: 'difficile', type: 'completer-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Complète ces deux opérations LINQ.',
    template: 'List<int> valeurs = new List<int> { 3, 8, 1, 9 };\nvar grandes = valeurs.{{1}}(v => v > 5);\nint total = valeurs.{{2}}();',
    trous: [
      { id: 1, accepte: ['Where'] },
      { id: 2, accepte: ['Sum'] }
    ],
    explication: '`Where(v => v > 5)` filtre les valeurs supérieures à 5 ; `Sum()` additionne toutes les valeurs de la collection.'
  },
  {
    id: 'ex-sql-fondamentaux-qcm-1',
    matiere: 'slam-bdd', chapitre: 'sql-fondamentaux', competence: 'sql.fondamentaux',
    langage: 'sql', difficulte: 'facile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Lequel de ces logiciels est un exemple de SGBDR ?',
    options: [
      { id: 'a', texte: 'Microsoft Word' }, { id: 'b', texte: 'PostgreSQL' },
      { id: 'c', texte: 'Photoshop' }, { id: 'd', texte: 'Google Chrome' }
    ],
    correctes: ['b'],
    explication: 'PostgreSQL est un Système de Gestion de Base de Données Relationnelle (SGBDR), comme MySQL ou SQL Server.'
  },
  {
    id: 'ex-sql-fondamentaux-vf-1',
    matiere: 'slam-bdd', chapitre: 'sql-fondamentaux', competence: 'sql.fondamentaux',
    langage: 'sql', difficulte: 'facile', type: 'vrai-faux',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Dans une table, une colonne représente un enregistrement complet, et une ligne représente une seule caractéristique.',
    correct: false,
    explication: 'C\'est l\'inverse : une LIGNE représente un enregistrement complet (ex : un client), une COLONNE représente une seule caractéristique (ex : l\'email).'
  },
  {
    id: 'ex-sql-cles-qcm-1',
    matiere: 'slam-bdd', chapitre: 'sql-cles', competence: 'sql.cles',
    langage: 'sql', difficulte: 'moyen', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Que garantit une clé primaire ?',
    options: [
      { id: 'a', texte: 'Qu\'aucune valeur n\'est NULL dans la table' },
      { id: 'b', texte: 'Que chaque ligne est identifiée de façon unique' },
      { id: 'c', texte: 'Que la table est triée' },
      { id: 'd', texte: 'Que les données sont chiffrées' }
    ],
    correctes: ['b'],
    explication: 'Une clé primaire garantit qu\'aucune ligne ne partage la même valeur, et qu\'elle n\'est jamais NULL : elle identifie chaque ligne de façon unique.'
  },
  {
    id: 'ex-sql-cles-vf-1',
    matiere: 'slam-bdd', chapitre: 'sql-cles', competence: 'sql.cles',
    langage: 'sql', difficulte: 'moyen', type: 'vrai-faux',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Une clé étrangère référence la clé primaire d\'une autre table.',
    correct: true,
    explication: 'C\'est exactement le rôle d\'une clé étrangère (FOREIGN KEY) : créer une relation en référençant la clé primaire d\'une autre table.'
  },
  {
    id: 'ex-sql-contraintes-qcm-1',
    matiere: 'slam-bdd', chapitre: 'sql-contraintes', competence: 'sql.contraintes',
    langage: 'sql', difficulte: 'moyen', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Que fait la contrainte UNIQUE sur une colonne ?',
    options: [
      { id: 'a', texte: 'Elle interdit les valeurs NULL' },
      { id: 'b', texte: 'Elle interdit les doublons dans cette colonne' },
      { id: 'c', texte: 'Elle trie automatiquement la colonne' },
      { id: 'd', texte: 'Elle chiffre la colonne' }
    ],
    correctes: ['b'],
    explication: 'UNIQUE interdit que deux lignes aient la même valeur dans cette colonne — mais n\'interdit pas NULL par elle-même (c\'est le rôle de NOT NULL).'
  },
  {
    id: 'ex-sql-contraintes-vf-1',
    matiere: 'slam-bdd', chapitre: 'sql-contraintes', competence: 'sql.contraintes',
    langage: 'sql', difficulte: 'moyen', type: 'vrai-faux',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'NULL et 0 représentent la même chose en SQL pour une colonne numérique.',
    correct: false,
    explication: 'NULL signifie "valeur absente/inconnue", ce qui est totalement différent de 0 (une vraie valeur numérique). Comparer avec = NULL ne fonctionne jamais, il faut IS NULL.'
  },
  {
    id: 'ex-sql-operateurs-qcm-1',
    matiere: 'slam-bdd', chapitre: 'sql-operateurs', competence: 'sql.operateurs',
    langage: 'sql', difficulte: 'moyen', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Que sélectionne `WHERE age BETWEEN 18 AND 25` ?',
    options: [
      { id: 'a', texte: 'Les âges strictement entre 18 et 25' },
      { id: 'b', texte: 'Les âges de 18 à 25 inclus' },
      { id: 'c', texte: 'Les âges différents de 18 et 25' },
      { id: 'd', texte: 'Uniquement 18 et 25' }
    ],
    correctes: ['b'],
    explication: 'BETWEEN inclut toujours les deux bornes : 18 et 25 font partie du résultat, pas seulement les valeurs strictement entre les deux.'
  },
  {
    id: 'ex-sql-operateurs-completer-1',
    matiere: 'slam-bdd', chapitre: 'sql-operateurs', competence: 'sql.operateurs',
    langage: 'sql', difficulte: 'moyen', type: 'completer-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Complète cette requête qui filtre par ville et par début de nom.',
    template: 'SELECT * FROM client\nWHERE ville {{1}} (\'Lyon\', \'Paris\')\nAND nom {{2}} \'M%\';',
    trous: [
      { id: 1, accepte: ['IN', 'in'] },
      { id: 2, accepte: ['LIKE', 'like'] }
    ],
    explication: 'IN teste l\'appartenance à une liste de valeurs ; LIKE \'M%\' teste que le nom commence par M.'
  },
  {
    id: 'ex-sql-distinctlimit-qcm-1',
    matiere: 'slam-bdd', chapitre: 'sql-distinctlimit', competence: 'sql.distinctlimit',
    langage: 'sql', difficulte: 'facile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Que fait `SELECT DISTINCT ville FROM client` ?',
    options: [
      { id: 'a', texte: 'Trie les villes' },
      { id: 'b', texte: 'Supprime les doublons de villes dans le résultat' },
      { id: 'c', texte: 'Compte les villes' },
      { id: 'd', texte: 'Supprime la colonne ville' }
    ],
    correctes: ['b'],
    explication: 'DISTINCT élimine les doublons du résultat : chaque ville n\'apparaît qu\'une seule fois, même si plusieurs clients y habitent.'
  },
  {
    id: 'ex-sql-distinctlimit-vf-1',
    matiere: 'slam-bdd', chapitre: 'sql-distinctlimit', competence: 'sql.distinctlimit',
    langage: 'sql', difficulte: 'facile', type: 'vrai-faux',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Il est recommandé d\'utiliser LIMIT sans ORDER BY pour garantir un résultat toujours identique.',
    correct: false,
    explication: 'C\'est l\'inverse : sans ORDER BY, l\'ordre des lignes renvoyées par le SGBD n\'est pas garanti, donc LIMIT peut donner des résultats différents d\'une exécution à l\'autre.'
  },
  {
    id: 'ex-sql-leftjoin-qcm-1',
    matiere: 'slam-bdd', chapitre: 'sql-leftjoin', competence: 'sql.leftjoin',
    langage: 'sql', difficulte: 'difficile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Avec un LEFT JOIN entre client et commande, que se passe-t-il pour un client sans aucune commande ?',
    options: [
      { id: 'a', texte: 'Il disparaît du résultat' },
      { id: 'b', texte: 'Il apparaît, avec NULL dans les colonnes de commande' },
      { id: 'c', texte: 'Une erreur est levée' },
      { id: 'd', texte: 'Il apparaît en double' }
    ],
    correctes: ['b'],
    explication: 'LEFT JOIN garde TOUTES les lignes de la table de gauche (client) : un client sans commande apparaît quand même, avec NULL dans les colonnes de la table de droite.'
  },
  {
    id: 'ex-sql-leftjoin-lire-1',
    matiere: 'slam-bdd', chapitre: 'sql-leftjoin', competence: 'sql.leftjoin',
    langage: 'sql', difficulte: 'difficile', type: 'lire-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Table client (id, nom) : 1, Paul / 2, Emma.\nTable commande (id, client_id) : 10, 1.\nEmma (id 2) n\'a passé aucune commande.',
    code: 'SELECT client.nom, commande.id\nFROM client\nLEFT JOIN commande ON commande.client_id = client.id;',
    question: 'Combien de lignes ce résultat contiendra-t-il ?',
    reponsesAcceptees: ['2', '2 lignes'],
    explication: 'Le LEFT JOIN garde TOUS les clients, y compris Emma qui n\'a pas de commande (elle apparaît avec NULL) : 2 lignes au total, une par client.'
  },
  {
    id: 'ex-sql-sousrequetes-qcm-1',
    matiere: 'slam-bdd', chapitre: 'sql-sousrequetes', competence: 'sql.sousrequetes',
    langage: 'sql', difficulte: 'difficile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Pourquoi utilise-t-on `IN` plutôt que `=` avec une sous-requête ?',
    options: [
      { id: 'a', texte: 'Parce que = est plus rapide' },
      { id: 'b', texte: 'Parce que la sous-requête peut renvoyer plusieurs valeurs' },
      { id: 'c', texte: 'Parce que IN est obligatoire en SQL' },
      { id: 'd', texte: 'Il n\'y a aucune différence' }
    ],
    correctes: ['b'],
    explication: '= exige une seule valeur ; si la sous-requête peut renvoyer plusieurs lignes, il faut IN pour tester l\'appartenance à cet ensemble de résultats.'
  },
  {
    id: 'ex-sql-sousrequetes-lire-1',
    matiere: 'slam-bdd', chapitre: 'sql-sousrequetes', competence: 'sql.sousrequetes',
    langage: 'sql', difficulte: 'difficile', type: 'lire-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Table commande (id_commande, client_id, montant) :\n1, 10, 600\n2, 10, 200\n3, 20, 700',
    code: 'SELECT client_id FROM commande WHERE montant > 500;',
    question: 'Quels client_id ce résultat contient-il ?',
    reponsesAcceptees: ['10 et 20', '10, 20', '20 et 10', '20, 10'],
    explication: 'Seules les commandes de montant > 500 sont gardées : la commande 1 (600, client 10) et la commande 3 (700, client 20).'
  },
  {
    id: 'ex-sql-case-qcm-1',
    matiere: 'slam-bdd', chapitre: 'sql-case', competence: 'sql.case',
    langage: 'sql', difficulte: 'moyen', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Dans une expression CASE, que se passe-t-il si aucune condition WHEN n\'est vraie et qu\'il n\'y a pas de ELSE ?',
    options: [
      { id: 'a', texte: 'Une erreur est levée' },
      { id: 'b', texte: 'Le résultat vaut NULL pour cette ligne' },
      { id: 'c', texte: 'La première valeur WHEN est utilisée par défaut' },
      { id: 'd', texte: 'La ligne est supprimée du résultat' }
    ],
    correctes: ['b'],
    explication: 'Sans ELSE, une ligne qui ne correspond à aucune condition WHEN reçoit simplement NULL comme résultat.'
  },
  {
    id: 'ex-sql-case-completer-1',
    matiere: 'slam-bdd', chapitre: 'sql-case', competence: 'sql.case',
    langage: 'sql', difficulte: 'moyen', type: 'completer-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Complète cette expression conditionnelle.',
    template: 'SELECT nom,\n{{1}}\n    WHEN age >= 18 THEN \'Majeur\'\n    ELSE \'Mineur\'\n{{2}} AS statut\nFROM client;',
    trous: [
      { id: 1, accepte: ['CASE', 'case'] },
      { id: 2, accepte: ['END', 'end'] }
    ],
    explication: 'CASE ouvre l\'expression conditionnelle, END la ferme obligatoirement.'
  },
  {
    id: 'ex-sql-mcd-qcm-1',
    matiere: 'slam-bdd', chapitre: 'sql-mcd', competence: 'sql.mcd',
    langage: null, difficulte: 'difficile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Dans un MCD, à quoi correspond une ENTITÉ ?',
    options: [
      { id: 'a', texte: 'Une colonne d\'une table' },
      { id: 'b', texte: 'Un objet ou concept du monde réel à représenter' },
      { id: 'c', texte: 'Une ligne d\'une table' },
      { id: 'd', texte: 'Une requête SQL' }
    ],
    correctes: ['b'],
    explication: 'Une entité représente un objet ou concept du monde réel (CLIENT, COMMANDE...) dont on veut stocker des informations — une notion conceptuelle, avant toute traduction en table.'
  },
  {
    id: 'ex-sql-mcd-vf-1',
    matiere: 'slam-bdd', chapitre: 'sql-mcd', competence: 'sql.mcd',
    langage: null, difficulte: 'difficile', type: 'vrai-faux',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'La cardinalité (1,N) côté CLIENT dans une association avec COMMANDE signifie qu\'un client ne peut passer qu\'une seule commande.',
    correct: false,
    explication: '(1,N) signifie qu\'un client passe AU MOINS une commande et PEUT EN AVOIR PLUSIEURS — pas une seule. (1,1) signifierait exactement une.'
  },
  {
    id: 'ex-sql-mld-qcm-1',
    matiere: 'slam-bdd', chapitre: 'sql-mld', competence: 'sql.mld',
    langage: null, difficulte: 'difficile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Dans une association 1-N, de quel côté migre la clé primaire pour devenir clé étrangère ?',
    options: [
      { id: 'a', texte: 'Du côté N vers le côté 1' },
      { id: 'b', texte: 'Du côté 1 vers le côté N' },
      { id: 'c', texte: 'Elle ne migre jamais' },
      { id: 'd', texte: 'Des deux côtés à la fois' }
    ],
    correctes: ['b'],
    explication: 'La clé primaire du côté "1" (ex : CLIENT) migre en clé étrangère dans la table du côté "N" (ex : COMMANDE).'
  },
  {
    id: 'ex-sql-mld-completer-1',
    matiere: 'slam-bdd', chapitre: 'sql-mld', competence: 'sql.mld',
    langage: null, difficulte: 'difficile', type: 'completer-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Complète ce MLD obtenu à partir du MCD CLIENT (1,N) --- passe --- (1,1) COMMANDE.',
    template: 'CLIENT(id_client {{1}}, nom)\nCOMMANDE(id_commande PK, date_commande, id_client {{2}})',
    trous: [
      { id: 1, accepte: ['PK'] },
      { id: 2, accepte: ['FK'] }
    ],
    explication: 'id_client est la clé primaire (PK) de CLIENT. Dans COMMANDE, id_client apparaît comme clé étrangère (FK), résultat de la migration depuis le côté "1" de l\'association.'
  },
  {
    id: 'ex-sql-transactions-qcm-1',
    matiere: 'slam-bdd', chapitre: 'sql-transactions', competence: 'sql.transactions',
    langage: 'sql', difficulte: 'difficile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Que fait ROLLBACK ?',
    options: [
      { id: 'a', texte: 'Valide définitivement la transaction' },
      { id: 'b', texte: 'Annule toutes les opérations de la transaction en cours' },
      { id: 'c', texte: 'Supprime une table' },
      { id: 'd', texte: 'Crée une nouvelle transaction' }
    ],
    correctes: ['b'],
    explication: 'ROLLBACK annule toutes les opérations effectuées depuis le début de la transaction en cours, comme si elles n\'avaient jamais eu lieu.'
  },
  {
    id: 'ex-sql-transactions-vf-1',
    matiere: 'slam-bdd', chapitre: 'sql-transactions', competence: 'sql.transactions',
    langage: 'sql', difficulte: 'difficile', type: 'vrai-faux',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Une transaction garantit que plusieurs opérations réussissent ensemble ou échouent toutes ensemble.',
    correct: true,
    explication: 'C\'est exactement le principe d\'atomicité d\'une transaction : soit toutes les opérations sont validées, soit aucune ne l\'est.'
  },
  {
    id: 'ex-web-fondamentaux-qcm-1',
    matiere: 'web', chapitre: 'web-fondamentaux', competence: 'web.fondamentaux',
    langage: null, difficulte: 'facile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Quel protocole utilise le navigateur pour dialoguer avec un serveur web ?',
    options: [
      { id: 'a', texte: 'FTP' }, { id: 'b', texte: 'HTTP' },
      { id: 'c', texte: 'SMTP' }, { id: 'd', texte: 'SSH' }
    ],
    correctes: ['b'],
    explication: 'HTTP (ou sa version chiffrée HTTPS) est le protocole utilisé pour échanger des requêtes et réponses entre un navigateur et un serveur web.'
  },
  {
    id: 'ex-web-fondamentaux-vf-1',
    matiere: 'web', chapitre: 'web-fondamentaux', competence: 'web.fondamentaux',
    langage: null, difficulte: 'facile', type: 'vrai-faux',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'La balise <head> contient le contenu visible d\'une page HTML.',
    correct: false,
    explication: 'C\'est <body> qui contient le contenu visible. <head> contient des informations sur la page (titre, liens CSS...), non affichées directement.'
  },
  {
    id: 'ex-web-balisesliens-qcm-1',
    matiere: 'web', chapitre: 'web-balisesliens', competence: 'web.balisesliens',
    langage: null, difficulte: 'facile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Quel attribut permet d\'ouvrir un lien dans un nouvel onglet ?',
    options: [
      { id: 'a', texte: 'href="_blank"' }, { id: 'b', texte: 'target="_blank"' },
      { id: 'c', texte: 'new="tab"' }, { id: 'd', texte: 'open="blank"' }
    ],
    correctes: ['b'],
    explication: 'target="_blank" sur une balise <a> fait s\'ouvrir le lien dans un nouvel onglet plutôt que dans la page actuelle.'
  },
  {
    id: 'ex-web-balisesliens-completer-1',
    matiere: 'web', chapitre: 'web-balisesliens', competence: 'web.balisesliens',
    langage: null, difficulte: 'facile', type: 'completer-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Complète cette liste à puces.',
    template: '<{{1}}>\n    <li>Pomme</li>\n    <li>Banane</li>\n</{{2}}>',
    trous: [
      { id: 1, accepte: ['ul'] },
      { id: 2, accepte: ['ul'] }
    ],
    explication: '<ul> (Unordered List) ouvre et ferme une liste à puces, contenant des éléments <li>.'
  },
  {
    id: 'ex-web-formulaires-qcm-1',
    matiere: 'web', chapitre: 'web-formulaires', competence: 'web.formulaires',
    langage: null, difficulte: 'moyen', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Quel attribut HTML rend un champ de formulaire obligatoire ?',
    options: [
      { id: 'a', texte: 'obligatoire' }, { id: 'b', texte: 'required' },
      { id: 'c', texte: 'mandatory' }, { id: 'd', texte: 'needed' }
    ],
    correctes: ['b'],
    explication: 'L\'attribut required empêche l\'envoi du formulaire tant que ce champ n\'est pas rempli.'
  },
  {
    id: 'ex-web-formulaires-vf-1',
    matiere: 'web', chapitre: 'web-formulaires', competence: 'web.formulaires',
    langage: null, difficulte: 'moyen', type: 'vrai-faux',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'La validation HTML (required, pattern...) suffit à sécuriser un formulaire, sans besoin de vérification côté serveur.',
    correct: false,
    explication: 'La validation HTML s\'exécute côté navigateur et peut être contournée : une vérification côté serveur reste indispensable.'
  },
  {
    id: 'ex-web-cssbases-qcm-1',
    matiere: 'web', chapitre: 'web-cssbases', competence: 'web.cssbases',
    langage: null, difficulte: 'moyen', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Quel sélecteur cible tous les éléments ayant class="carte" ?',
    options: [
      { id: 'a', texte: '#carte' }, { id: 'b', texte: '.carte' },
      { id: 'c', texte: 'carte' }, { id: 'd', texte: '*carte' }
    ],
    correctes: ['b'],
    explication: 'Le point (.) précède un sélecteur de classe ; le dièse (#) précède un sélecteur d\'identifiant.'
  },
  {
    id: 'ex-web-cssbases-completer-1',
    matiere: 'web', chapitre: 'web-cssbases', competence: 'web.cssbases',
    langage: null, difficulte: 'moyen', type: 'completer-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Complète cette règle CSS.',
    template: '.carte {\n    width: 200px;\n    {{1}}: 16px;\n    box-sizing: border-{{2}};\n}',
    trous: [
      { id: 1, accepte: ['padding'] },
      { id: 2, accepte: ['box'] }
    ],
    explication: 'padding définit l\'espace intérieur ; box-sizing: border-box; fait que width inclut le padding et la bordure.'
  },
  {
    id: 'ex-web-flexbox-qcm-1',
    matiere: 'web', chapitre: 'web-flexbox', competence: 'web.flexbox',
    langage: null, difficulte: 'difficile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Quelle propriété active Flexbox sur un conteneur ?',
    options: [
      { id: 'a', texte: 'flex: true;' }, { id: 'b', texte: 'display: flex;' },
      { id: 'c', texte: 'position: flex;' }, { id: 'd', texte: 'layout: flex;' }
    ],
    correctes: ['b'],
    explication: 'display: flex; transforme un conteneur en conteneur flexible : ses enfants directs deviennent des éléments flexibles.'
  },
  {
    id: 'ex-web-flexbox-completer-1',
    matiere: 'web', chapitre: 'web-flexbox', competence: 'web.flexbox',
    langage: null, difficulte: 'difficile', type: 'completer-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Complète cette règle Flexbox.',
    template: '.conteneur {\n    display: {{1}};\n    justify-content: {{2}}-between;\n}',
    trous: [
      { id: 1, accepte: ['flex'] },
      { id: 2, accepte: ['space'] }
    ],
    explication: 'display: flex; active Flexbox ; justify-content: space-between; répartit l\'espace entre les éléments sur l\'axe principal.'
  },
  {
    id: 'ex-web-responsive-qcm-1',
    matiere: 'web', chapitre: 'web-responsive', competence: 'web.responsive',
    langage: null, difficulte: 'moyen', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Que fait `@media (max-width: 600px) { ... }` ?',
    options: [
      { id: 'a', texte: 'Applique ces règles seulement au-delà de 600px' },
      { id: 'b', texte: 'Applique ces règles seulement en dessous de 600px' },
      { id: 'c', texte: 'Fixe la largeur à 600px' },
      { id: 'd', texte: 'Ignore les écrans de moins de 600px' }
    ],
    correctes: ['b'],
    explication: 'max-width: 600px signifie "jusqu\'à 600px inclus" : les règles s\'appliquent quand la largeur de la fenêtre est de 600px ou moins.'
  },
  {
    id: 'ex-web-responsive-vf-1',
    matiere: 'web', chapitre: 'web-responsive', competence: 'web.responsive',
    langage: null, difficulte: 'moyen', type: 'vrai-faux',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'L\'approche mobile-first consiste à écrire d\'abord le CSS pour grand écran, puis à l\'adapter pour mobile.',
    correct: false,
    explication: 'C\'est l\'inverse : le mobile-first écrit d\'abord le CSS pour petit écran, puis ajoute des media queries min-width pour les écrans plus grands.'
  },
  {
    id: 'ex-web-jsbases-qcm-1',
    matiere: 'web', chapitre: 'web-jsbases', competence: 'web.jsbases',
    langage: null, difficulte: 'moyen', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Quel mot-clé utilise-t-on pour déclarer une variable dont la valeur ne doit jamais changer ?',
    options: [
      { id: 'a', texte: 'let' }, { id: 'b', texte: 'const' },
      { id: 'c', texte: 'var' }, { id: 'd', texte: 'fixed' }
    ],
    correctes: ['b'],
    explication: 'const déclare une constante : sa valeur ne peut plus être réaffectée après sa déclaration.'
  },
  {
    id: 'ex-web-jsbases-completer-1',
    matiere: 'web', chapitre: 'web-jsbases', competence: 'web.jsbases',
    langage: null, difficulte: 'moyen', type: 'completer-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Complète cette fonction fléchée.',
    template: '{{1}} addition = (a, b) => a {{2}} b;',
    trous: [
      { id: 1, accepte: ['const'] },
      { id: 2, accepte: ['+'] }
    ],
    explication: 'const convient car la fonction elle-même n\'est pas censée être réaffectée ; + additionne les deux paramètres.'
  },
  {
    id: 'ex-web-domevenements-qcm-1',
    matiere: 'web', chapitre: 'web-domevenements', competence: 'web.domevenements',
    langage: null, difficulte: 'difficile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Que renvoie `document.querySelectorAll(\'.item\')` ?',
    options: [
      { id: 'a', texte: 'Le premier élément trouvé' },
      { id: 'b', texte: 'Tous les éléments correspondants' },
      { id: 'c', texte: 'Un seul booléen' },
      { id: 'd', texte: 'Une erreur s\'il y a plusieurs éléments' }
    ],
    correctes: ['b'],
    explication: 'querySelectorAll renvoie TOUS les éléments correspondant au sélecteur, contrairement à querySelector qui ne renvoie que le premier.'
  },
  {
    id: 'ex-web-domevenements-vf-1',
    matiere: 'web', chapitre: 'web-domevenements', competence: 'web.domevenements',
    langage: null, difficulte: 'difficile', type: 'vrai-faux',
    annees: ['2025-2026', '2026-2027'],
    enonce: '.textContent interprète le texte inséré comme du HTML, contrairement à .innerHTML.',
    correct: false,
    explication: 'C\'est l\'inverse : .innerHTML interprète le contenu comme du HTML, .textContent insère toujours du texte brut, sans interprétation.'
  },
  {
    id: 'ex-web-http-qcm-1',
    matiere: 'web', chapitre: 'web-http', competence: 'web.http',
    langage: null, difficulte: 'moyen', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Quel code HTTP indique qu\'une ressource demandée n\'existe pas ?',
    options: [
      { id: 'a', texte: '200' }, { id: 'b', texte: '301' },
      { id: 'c', texte: '404' }, { id: 'd', texte: '500' }
    ],
    correctes: ['c'],
    explication: '404 Not Found signifie que la ressource demandée n\'a pas été trouvée sur le serveur.'
  },
  {
    id: 'ex-web-http-vf-1',
    matiere: 'web', chapitre: 'web-http', competence: 'web.http',
    langage: null, difficulte: 'moyen', type: 'vrai-faux',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'GET est la méthode HTTP recommandée pour une action qui modifie ou supprime des données.',
    correct: false,
    explication: 'GET doit rester sans effet de bord (juste lire) ; POST, PUT ou DELETE sont les méthodes adaptées pour créer, modifier ou supprimer des données.'
  },
  {
    id: 'ex-web-fetchjson-qcm-1',
    matiere: 'web', chapitre: 'web-fetchjson', competence: 'web.fetchjson',
    langage: null, difficulte: 'difficile', type: 'qcm', multiple: false,
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Que faut-il faire après `await fetch(url)` pour obtenir les données JSON utilisables ?',
    options: [
      { id: 'a', texte: 'Rien, c\'est déjà utilisable' },
      { id: 'b', texte: 'await reponse.json()' },
      { id: 'c', texte: 'JSON.stringify(reponse)' },
      { id: 'd', texte: 'reponse.data' }
    ],
    correctes: ['b'],
    explication: 'fetch() renvoie la réponse HTTP brute ; il faut ensuite await reponse.json() pour convertir son corps en objet JavaScript utilisable.'
  },
  {
    id: 'ex-web-fetchjson-completer-1',
    matiere: 'web', chapitre: 'web-fetchjson', competence: 'web.fetchjson',
    langage: null, difficulte: 'difficile', type: 'completer-code',
    annees: ['2025-2026', '2026-2027'],
    enonce: 'Complète cette fonction qui récupère des données JSON.',
    template: 'async function charger() {\n    const reponse = {{1}} fetch(\'/api/data\');\n    const data = await reponse.{{2}}();\n}',
    trous: [
      { id: 1, accepte: ['await'] },
      { id: 2, accepte: ['json'] }
    ],
    explication: 'await attend la réponse HTTP ; .json() convertit ensuite son corps en objet JavaScript, lui aussi de façon asynchrone.'
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
