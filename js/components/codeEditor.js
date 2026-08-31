// ============================================================================
// codeEditor.js — Éditeur de code et coloration syntaxique, 100% autonome
// ----------------------------------------------------------------------------
// Pas de dépendance externe (pas de CDN) : le site reste rapide, autonome et
// ne dépend d'aucun service tiers pour sa fonctionnalité principale, ce qui
// correspond au style "self-contained" des autres projets déployés sur
// GitHub Pages.
//
// Fournit :
//  - highlightHTML(code, lang)         → coloration syntaxique (retourne du HTML)
//  - renderCodeBlock(code, lang, opts) → bloc de code en lecture seule avec
//                                          numéros de ligne (+ ligne surlignée)
//  - createEditor({ code, lang })      → éditeur éditable (textarea + calque
//                                          de coloration + gouttière)
// ============================================================================

export function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

const CSHARP_KEYWORDS = ['class', 'public', 'private', 'protected', 'static', 'void', 'int', 'double',
  'float', 'string', 'bool', 'char', 'if', 'else', 'for', 'foreach', 'while', 'do', 'in', 'return', 'new',
  'this', 'true', 'false', 'null', 'break', 'continue', 'switch', 'case', 'default', 'try', 'catch',
  'finally', 'using', 'namespace', 'interface', 'override', 'virtual', 'abstract', 'base', 'var', 'const',
  'readonly', 'out', 'ref', 'struct', 'enum', 'throw', 'get', 'set', 'long', 'decimal', 'object'];

const SQL_KEYWORDS = ['SELECT', 'FROM', 'WHERE', 'AND', 'OR', 'NOT', 'ORDER', 'BY', 'GROUP', 'HAVING',
  'JOIN', 'INNER', 'LEFT', 'RIGHT', 'OUTER', 'ON', 'INSERT', 'INTO', 'VALUES', 'UPDATE', 'SET', 'DELETE',
  'CREATE', 'TABLE', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'AS', 'DISTINCT', 'LIMIT', 'ASC', 'DESC',
  'NULL', 'IS', 'LIKE', 'IN', 'BETWEEN', 'COUNT', 'SUM', 'AVG', 'MIN', 'MAX'];

function buildRegex(lang) {
  if (lang === 'csharp') {
    const kw = CSHARP_KEYWORDS.join('|');
    return new RegExp(
      `(?<comment>//[^\\n]*)|(?<str>"(?:[^"\\\\]|\\\\.)*")|(?<chr>'(?:[^'\\\\]|\\\\.)*')|(?<num>\\b\\d+(?:\\.\\d+)?\\b)|(?<kw>\\b(?:${kw})\\b)`,
      'g'
    );
  }
  if (lang === 'sql') {
    const kw = SQL_KEYWORDS.concat(SQL_KEYWORDS.map(k => k.toLowerCase())).join('|');
    return new RegExp(
      `(?<comment>--[^\\n]*)|(?<str>'(?:[^']|'')*')|(?<num>\\b\\d+(?:\\.\\d+)?\\b)|(?<kw>\\b(?:${kw})\\b)`,
      'g'
    );
  }
  return null;
}

export function highlightHTML(code, lang) {
  const regex = buildRegex(lang);
  if (!regex) return escapeHtml(code);
  let result = '';
  let lastIndex = 0;
  let m;
  while ((m = regex.exec(code)) !== null) {
    result += escapeHtml(code.slice(lastIndex, m.index));
    const g = m.groups || {};
    let cls = 'tok-plain';
    if (g.comment) cls = 'tok-comment';
    else if (g.str || g.chr) cls = 'tok-string';
    else if (g.num) cls = 'tok-number';
    else if (g.kw) cls = 'tok-keyword';
    result += `<span class="${cls}">${escapeHtml(m[0])}</span>`;
    lastIndex = regex.lastIndex;
    if (m.index === regex.lastIndex) regex.lastIndex++; // garde-fou anti-boucle infinie
  }
  result += escapeHtml(code.slice(lastIndex));
  return result;
}

/**
 * Rendu HTML d'un bloc de code en lecture seule, avec numéros de ligne.
 * opts.highlightLine : numéro de ligne (1-indexé) à surligner (utile pour "trouver l'erreur").
 */
export function renderCodeBlock(code, lang, opts = {}) {
  const lines = code.split('\n');
  const rows = lines.map((line, idx) => {
    const n = idx + 1;
    const hi = opts.highlightLine === n ? ' code-line--highlight' : '';
    const content = line.length ? highlightHTML(line, lang) : '&nbsp;';
    return `<div class="code-line${hi}"><span class="code-line__num">${n}</span><span class="code-line__content">${content}</span></div>`;
  }).join('');
  return `<div class="code-block" data-lang="${escapeHtml(lang || '')}"><div class="code-block__lines">${rows}</div></div>`;
}

/**
 * Éditeur de code éditable : textarea invisible superposée à un calque de
 * coloration syntaxique, avec gouttière de numéros de ligne synchronisée.
 */
export function createEditor({ code = '', lang = 'csharp', onChange = null } = {}) {
  const wrapper = document.createElement('div');
  wrapper.className = 'editor';

  const gutter = document.createElement('div');
  gutter.className = 'editor__gutter';

  const codeWrap = document.createElement('div');
  codeWrap.className = 'editor__codewrap';

  const pre = document.createElement('pre');
  pre.className = 'editor__highlight';
  const codeEl = document.createElement('code');
  pre.appendChild(codeEl);

  const textarea = document.createElement('textarea');
  textarea.className = 'editor__textarea';
  textarea.spellcheck = false;
  textarea.setAttribute('autocapitalize', 'off');
  textarea.setAttribute('autocomplete', 'off');
  textarea.setAttribute('autocorrect', 'off');
  textarea.setAttribute('wrap', 'off');
  textarea.value = code;

  codeWrap.appendChild(pre);
  codeWrap.appendChild(textarea);
  wrapper.appendChild(gutter);
  wrapper.appendChild(codeWrap);

  function renderGutter(text) {
    const n = text.split('\n').length;
    let html = '';
    for (let i = 1; i <= n; i++) html += `<div>${i}</div>`;
    gutter.innerHTML = html;
  }

  function renderHighlight(text) {
    codeEl.innerHTML = highlightHTML(text, lang) + '\n';
  }

  function update() {
    renderGutter(textarea.value);
    renderHighlight(textarea.value);
    if (onChange) onChange(textarea.value);
  }

  textarea.addEventListener('input', update);
  textarea.addEventListener('scroll', () => {
    pre.scrollTop = textarea.scrollTop;
    pre.scrollLeft = textarea.scrollLeft;
    gutter.scrollTop = textarea.scrollTop;
  });
  textarea.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = textarea.selectionStart, end = textarea.selectionEnd;
      textarea.value = textarea.value.slice(0, start) + '    ' + textarea.value.slice(end);
      textarea.selectionStart = textarea.selectionEnd = start + 4;
      update();
    }
  });

  update();

  return {
    el: wrapper,
    getValue: () => textarea.value,
    setValue: (v) => { textarea.value = v; update(); },
    focus: () => textarea.focus()
  };
}
