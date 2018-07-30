/* tslint:disable */
// Generated automatically by nearley, version 2.13.0
// http://github.com/Hardmath123/nearley
(function() {
  function id(x) {
    return x[0];
  }

  const flatten = arr =>
    arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

  const attributes = d => ({
    attributes: flatten(d).filter((value, i) => i % 3 === 0),
  });

  const components = d =>
    flatten(d)
      .filter((value, i) => i % 2 === 0)
      .map(value => ({
        component: value.component,
        attributes: value.attributes,
      }));
  var grammar = {
    Lexer: undefined,
    ParserRules: [
      { name: 'Render$ebnf$1', symbols: [] },
      {
        name: 'Render$ebnf$1$subexpression$1',
        symbols: [{ literal: '&' }, 'Component'],
      },
      {
        name: 'Render$ebnf$1',
        symbols: ['Render$ebnf$1', 'Render$ebnf$1$subexpression$1'],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        },
      },
      {
        name: 'Render',
        symbols: ['Component', 'Render$ebnf$1'],
        postprocess: components,
      },
      {
        name: 'Component',
        symbols: ['CompType', { literal: '(' }, 'Attributes', { literal: ')' }],
        postprocess: d => ({
          component: d[0].component,
          attributes: d[2].attributes,
        }),
      },
      {
        name: 'Component',
        symbols: ['CompType'],
        postprocess: d => ({ component: d[0].component, attributes: null }),
      },
      {
        name: 'CompType$string$1',
        symbols: [
          { literal: 'd' },
          { literal: 'a' },
          { literal: 't' },
          { literal: 'e' },
          { literal: 'p' },
          { literal: 'i' },
          { literal: 'c' },
          { literal: 'k' },
          { literal: 'e' },
          { literal: 'r' },
        ],
        postprocess: function joiner(d) {
          return d.join('');
        },
      },
      {
        name: 'CompType',
        symbols: ['CompType$string$1'],
        postprocess: d => ({ component: d[0] }),
      },
      {
        name: 'CompType$string$2',
        symbols: [
          { literal: 't' },
          { literal: 'e' },
          { literal: 'x' },
          { literal: 't' },
          { literal: 'b' },
          { literal: 'o' },
          { literal: 'x' },
        ],
        postprocess: function joiner(d) {
          return d.join('');
        },
      },
      {
        name: 'CompType',
        symbols: ['CompType$string$2'],
        postprocess: d => ({ component: d[0] }),
      },
      {
        name: 'CompType$string$3',
        symbols: [
          { literal: 't' },
          { literal: 'e' },
          { literal: 'x' },
          { literal: 't' },
          { literal: 'a' },
          { literal: 'r' },
          { literal: 'e' },
          { literal: 'a' },
        ],
        postprocess: function joiner(d) {
          return d.join('');
        },
      },
      {
        name: 'CompType',
        symbols: ['CompType$string$3'],
        postprocess: d => ({ component: d[0] }),
      },
      {
        name: 'CompType$string$4',
        symbols: [
          { literal: 'r' },
          { literal: 'a' },
          { literal: 'd' },
          { literal: 'i' },
          { literal: 'o' },
        ],
        postprocess: function joiner(d) {
          return d.join('');
        },
      },
      {
        name: 'CompType',
        symbols: ['CompType$string$4'],
        postprocess: d => ({ component: d[0] }),
      },
      {
        name: 'CompType$string$5',
        symbols: [
          { literal: 'c' },
          { literal: 'h' },
          { literal: 'e' },
          { literal: 'c' },
          { literal: 'k' },
          { literal: 'b' },
          { literal: 'o' },
          { literal: 'x' },
        ],
        postprocess: function joiner(d) {
          return d.join('');
        },
      },
      {
        name: 'CompType',
        symbols: ['CompType$string$5'],
        postprocess: d => ({ component: d[0] }),
      },
      {
        name: 'CompType$string$6',
        symbols: [
          { literal: 'd' },
          { literal: 'r' },
          { literal: 'o' },
          { literal: 'p' },
          { literal: 'd' },
          { literal: 'o' },
          { literal: 'w' },
          { literal: 'n' },
        ],
        postprocess: function joiner(d) {
          return d.join('');
        },
      },
      {
        name: 'CompType',
        symbols: ['CompType$string$6'],
        postprocess: d => ({ component: d[0] }),
      },
      {
        name: 'CompType$string$7',
        symbols: [
          { literal: 'r' },
          { literal: 'e' },
          { literal: 'v' },
          { literal: 'i' },
          { literal: 'e' },
          { literal: 'w' },
        ],
        postprocess: function joiner(d) {
          return d.join('');
        },
      },
      {
        name: 'CompType',
        symbols: ['CompType$string$7'],
        postprocess: d => ({ component: d[0] }),
      },
      {
        name: 'CompType$string$8',
        symbols: [
          { literal: 'f' },
          { literal: 'i' },
          { literal: 'e' },
          { literal: 'l' },
          { literal: 'd' },
          { literal: 'a' },
          { literal: 'r' },
          { literal: 'r' },
          { literal: 'a' },
          { literal: 'y' },
        ],
        postprocess: function joiner(d) {
          return d.join('');
        },
      },
      {
        name: 'CompType',
        symbols: ['CompType$string$8'],
        postprocess: d => ({ component: d[0] }),
      },
      { name: 'Attributes$ebnf$1', symbols: [] },
      {
        name: 'Attributes$ebnf$1$subexpression$1$subexpression$1',
        symbols: [{ literal: ',' }, '_'],
      },
      {
        name: 'Attributes$ebnf$1$subexpression$1',
        symbols: [
          'Attributes$ebnf$1$subexpression$1$subexpression$1',
          'Attribute',
        ],
      },
      {
        name: 'Attributes$ebnf$1',
        symbols: ['Attributes$ebnf$1', 'Attributes$ebnf$1$subexpression$1'],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        },
      },
      {
        name: 'Attributes',
        symbols: ['Attribute', 'Attributes$ebnf$1'],
        postprocess: attributes,
      },
      { name: 'Attribute$subexpression$1', symbols: [{ literal: ':' }, '_'] },
      {
        name: 'Attribute',
        symbols: ['AttrType', 'Attribute$subexpression$1', 'AttrValue'],
        postprocess: d => ({ key: d[0].key, value: d[2].value }),
      },
      { name: 'AttrType$ebnf$1', symbols: [/[a-zA-Z0-9]/] },
      {
        name: 'AttrType$ebnf$1',
        symbols: ['AttrType$ebnf$1', /[a-zA-Z0-9]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        },
      },
      {
        name: 'AttrType',
        symbols: ['AttrType$ebnf$1'],
        postprocess: d => ({ key: d[0].join('') }),
      },
      {
        name: 'AttrValue$ebnf$1',
        symbols: [/[a-zA-Z0-9\/\{\}\(\)\,\\\^\[\]\"+?.*\$]/],
      },
      {
        name: 'AttrValue$ebnf$1',
        symbols: [
          'AttrValue$ebnf$1',
          /[a-zA-Z0-9\/\{\}\(\)\,\\\^\[\]\"+?.*\$]/,
        ],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        },
      },
      {
        name: 'AttrValue',
        symbols: ['AttrValue$ebnf$1'],
        postprocess: d => ({ value: d[0].join('') }),
      },
      { name: '_$ebnf$1', symbols: [] },
      {
        name: '_$ebnf$1',
        symbols: ['_$ebnf$1', /[\s]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        },
      },
      { name: '_', symbols: ['_$ebnf$1'], postprocess: d => null },
    ],
    ParserStart: 'Render',
  };
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = grammar;
  } else {
    window.grammar = grammar;
  }
})();
