/* tslint:disable */
// Generated automatically by nearley, version 2.13.0
// http://github.com/Hardmath123/nearley
(function() {
  function id(x) {
    return x[0];
  }

  const flattenDeep = arr =>
    arr.reduce(
      (acc, val) =>
        Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),
      [],
    );
  const params = arr =>
    flattenDeep(arr).filter(
      v => v !== null && v !== '[' && v !== ']' && v !== ',',
    );
  var grammar = {
    Lexer: undefined,
    ParserRules: [
      {
        name: 'Next',
        symbols: ['NextQuestion'],
        postprocess: d => ({ type: 'nextQuestion', value: d[0].QID }),
      },
      {
        name: 'Next',
        symbols: ['TernaryOperation'],
        postprocess: d => ({ type: 'conditional', value: d[0] }),
      },
      { name: 'Next$ebnf$1', symbols: [] },
      {
        name: 'Next$ebnf$1$subexpression$1',
        symbols: [{ literal: ',' }, 'NextQuestion'],
      },
      {
        name: 'Next$ebnf$1',
        symbols: ['Next$ebnf$1', 'Next$ebnf$1$subexpression$1'],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        },
      },
      {
        name: 'Next',
        symbols: [
          { literal: '[' },
          'NextQuestion',
          'Next$ebnf$1',
          { literal: ']' },
        ],
        postprocess: d => ({ type: 'nextQuestion', value: params(d) }),
      },
      {
        name: 'NextQuestion',
        symbols: ['QID'],
        postprocess: d => ({ QID: { modifier: null, QID: d[0].QID } }),
      },
      {
        name: 'NextQuestion',
        symbols: ['Modifier', 'QID'],
        postprocess: d => ({ QID: { modifier: d[0].mod, QID: d[1].QID } }),
      },
      {
        name: 'Modifier',
        symbols: [{ literal: '+' }],
        postprocess: d => ({ mod: d[0] }),
      },
      {
        name: 'Modifier',
        symbols: [{ literal: '_' }],
        postprocess: d => ({ mod: d[0] }),
      },
      {
        name: 'TernaryOperation',
        symbols: [
          'Condition',
          { literal: '?' },
          'NextQuestion',
          { literal: ':' },
          'NextQuestion',
        ],
        postprocess: d => ({
          condition: d[0],
          trueNextQuestion: { type: 'nextQuestion', value: d[2].QID },
          falseNextQuestion: { type: 'nextQuestion', value: d[4].QID },
        }),
      },
      {
        name: 'TernaryOperation',
        symbols: [
          'Condition',
          { literal: '?' },
          'TernaryOperation',
          { literal: ':' },
          'NextQuestion',
        ],
        postprocess: d => ({
          condition: d[0],
          trueNextQuestion: { type: 'ternaryOperation', value: d[2] },
          falseNextQuestion: { type: 'nextQuestion', value: d[4].QID },
        }),
      },
      {
        name: 'TernaryOperation',
        symbols: [
          'Condition',
          { literal: '?' },
          'NextQuestion',
          { literal: ':' },
          'TernaryOperation',
        ],
        postprocess: d => ({
          condition: d[0],
          trueNextQuestion: { type: 'nextQuestion', value: d[2].QID },
          falseNextQuestion: { type: 'ternaryOperation', value: d[4] },
        }),
      },
      {
        name: 'TernaryOperation',
        symbols: [
          'Condition',
          { literal: '?' },
          'TernaryOperation',
          { literal: ':' },
          'TernaryOperation',
        ],
        postprocess: d => ({
          condition: d[0],
          trueNextQuestion: { type: 'ternaryOperation', value: d[2] },
          falseNextQuestion: { type: 'ternaryOperation', value: d[4] },
        }),
      },
      {
        name: 'Condition',
        symbols: ['Condition', { literal: '&' }, 'Condition'],
        postprocess: d => [d[0][0], d[2][0]],
      },
      {
        name: 'Condition',
        symbols: ['ConditionEval', 'Expression', 'AID'],
        postprocess: d => [
          { condEval: d[0].condEval, expr: d[1].exp, AID: d[2].AID },
        ],
      },
      {
        name: 'Condition$string$1',
        symbols: [
          { literal: 'i' },
          { literal: 's' },
          { literal: 'E' },
          { literal: 'm' },
          { literal: 'p' },
          { literal: 't' },
          { literal: 'y' },
        ],
        postprocess: function joiner(d) {
          return d.join('');
        },
      },
      {
        name: 'Condition',
        symbols: ['ConditionEval', { literal: '.' }, 'Condition$string$1'],
        postprocess: d => [{ condEval: d[0].condEval, expr: d[2] }],
      },
      {
        name: 'ConditionEval',
        symbols: [{ literal: '{' }, 'StateValue', { literal: '}' }],
        postprocess: d => ({ condEval: d[1] }),
      },
      {
        name: 'StateValue',
        symbols: ['State', { literal: '.' }, 'QID'],
        postprocess: d => ({ state: d[0].state, QID: d[2].QID }),
      },
      {
        name: 'State$string$1',
        symbols: [
          { literal: 'f' },
          { literal: 'l' },
          { literal: 'o' },
          { literal: 'w' },
        ],
        postprocess: function joiner(d) {
          return d.join('');
        },
      },
      {
        name: 'State',
        symbols: ['State$string$1'],
        postprocess: d => ({ state: d[0] }),
      },
      {
        name: 'State$string$2',
        symbols: [
          { literal: 'l' },
          { literal: 'o' },
          { literal: 'o' },
          { literal: 'p' },
        ],
        postprocess: function joiner(d) {
          return d.join('');
        },
      },
      {
        name: 'State',
        symbols: ['State$string$2'],
        postprocess: d => ({ state: d[0] }),
      },
      {
        name: 'State$string$3',
        symbols: [
          { literal: 'h' },
          { literal: 'i' },
          { literal: 's' },
          { literal: 't' },
          { literal: 'o' },
          { literal: 'r' },
          { literal: 'y' },
        ],
        postprocess: function joiner(d) {
          return d.join('');
        },
      },
      {
        name: 'State',
        symbols: ['State$string$3'],
        postprocess: d => ({ state: d[0] }),
      },
      {
        name: 'Expression$string$1',
        symbols: [{ literal: '=' }, { literal: '=' }],
        postprocess: function joiner(d) {
          return d.join('');
        },
      },
      {
        name: 'Expression',
        symbols: ['Expression$string$1'],
        postprocess: d => ({ exp: d[0] }),
      },
      {
        name: 'QID',
        symbols: [{ literal: 'Q' }, 'int'],
        postprocess: d => ({ QID: d[0] + d[1].int.join('') }),
      },
      {
        name: 'QID$string$1',
        symbols: [
          { literal: 's' },
          { literal: 'p' },
          { literal: 'e' },
          { literal: 'c' },
          { literal: 's' },
        ],
        postprocess: function joiner(d) {
          return d.join('');
        },
      },
      {
        name: 'QID',
        symbols: ['QID$string$1'],
        postprocess: d => ({ QID: d[0] }),
      },
      {
        name: 'QID$string$2',
        symbols: [
          { literal: 'm' },
          { literal: 'o' },
          { literal: 'r' },
          { literal: 'e' },
          { literal: 'L' },
          { literal: 'E' },
        ],
        postprocess: function joiner(d) {
          return d.join('');
        },
      },
      {
        name: 'QID',
        symbols: ['QID$string$2'],
        postprocess: d => ({ QID: d[0] }),
      },
      {
        name: 'QID$string$3',
        symbols: [
          { literal: 'S' },
          { literal: 'T' },
          { literal: 'O' },
          { literal: 'P' },
        ],
        postprocess: function joiner(d) {
          return d.join('');
        },
      },
      {
        name: 'QID',
        symbols: ['QID$string$3'],
        postprocess: d => ({ QID: d[0] }),
      },
      {
        name: 'QID$string$4',
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
        name: 'QID',
        symbols: ['QID$string$4'],
        postprocess: d => ({ QID: d[0] }),
      },
      { name: 'QID', symbols: ['Function'], postprocess: d => ({ QID: d[0] }) },
      {
        name: 'Function',
        symbols: [
          { literal: '{' },
          'StateValue',
          { literal: '}' },
          { literal: '.' },
          'FnName',
        ],
        postprocess: d => ({ type: 'function', state: d[1], function: d[4] }),
      },
      {
        name: 'FnName$string$1',
        symbols: [{ literal: 'p' }, { literal: 'o' }, { literal: 'p' }],
        postprocess: function joiner(d) {
          return d.join('');
        },
      },
      { name: 'FnName', symbols: ['FnName$string$1'], postprocess: d => d[0] },
      {
        name: 'AID',
        symbols: [{ literal: 'A' }, 'int'],
        postprocess: d => ({ AID: d[0] + d[1].int.join('') }),
      },
      { name: 'int$ebnf$1', symbols: [/[0-9]/] },
      {
        name: 'int$ebnf$1',
        symbols: ['int$ebnf$1', /[0-9]/],
        postprocess: function arrpush(d) {
          return d[0].concat([d[1]]);
        },
      },
      {
        name: 'int',
        symbols: ['int$ebnf$1'],
        postprocess: d => ({ int: d[0] }),
      },
    ],
    ParserStart: 'Next',
  };
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = grammar;
  } else {
    window.grammar = grammar;
  }
})();
