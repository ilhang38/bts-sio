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
