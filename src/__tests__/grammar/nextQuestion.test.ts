import { Grammar, Parser } from 'nearley';

let grammar: Grammar;
let parser: Parser;

beforeAll(() =>
  (grammar = Grammar.fromCompiled(require('../../grammar/nextQuestion'))));

beforeEach(() => (parser = new Parser(grammar)));

it('should parse a simple next question id where the id is 81', () => {
  parser.feed('DE81');
  expect(parser.results[0]).toEqual({
    type: 'nextQuestion',
    value: { modifier: null, DEID: 'DE81' },
  });
});

it('should parse a simple next question id with underscore modifier where the id is 81', () => {
  parser.feed('_DE81');
  expect(parser.results[0]).toEqual({
    type: 'nextQuestion',
    value: { modifier: '_', DEID: 'DE81' },
  });
});

it('should parse a simple next question id with plus modifier where the id is 81', () => {
  parser.feed('+DE81');
  expect(parser.results[0]).toEqual({
    type: 'nextQuestion',
    value: { modifier: '+', DEID: 'DE81' },
  });
});

it('should parse a conditional next question based on flow state', () => {
  parser.feed('{flow.DE3}==A3?DE1:DE1');
  expect(parser.results[0]).toEqual({
    type: 'conditional',
    value: {
      condition: [
        {
          condEval: {
            state: 'flow',
            DEID: 'DE3',
          },
          expr: '==',
          AID: 'A3',
        },
      ],
      trueNextQuestion: {
        type: 'nextQuestion',
        value: {
          modifier: null,
          DEID: 'DE1',
        },
      },
      falseNextQuestion: {
        type: 'nextQuestion',
        value: {
          modifier: null,
          DEID: 'DE1',
        },
      },
    },
  });
});

it('should parse a conditional next question based on loop state', () => {
  parser.feed('{history.DE3}==A3?DE1:DE1');
  expect(parser.results[0]).toEqual({
    type: 'conditional',
    value: {
      condition: [
        {
          condEval: {
            state: 'history',
            DEID: 'DE3',
          },
          expr: '==',
          AID: 'A3',
        },
      ],
      trueNextQuestion: {
        type: 'nextQuestion',
        value: {
          modifier: null,
          DEID: 'DE1',
        },
      },
      falseNextQuestion: {
        type: 'nextQuestion',
        value: {
          modifier: null,
          DEID: 'DE1',
        },
      },
    },
  });
});

it('should parse a complex conditional', () => {
  parser.feed('{loop.DE3}==A3&{flow.numOfLE}.isEmpty?moreLE:STOP');
  expect(parser.results[0]).toEqual({
    type: 'conditional',
    value: {
      condition: [
        {
          condEval: {
            state: 'loop',
            DEID: 'DE3',
          },
          expr: '==',
          AID: 'A3',
        },
        {
          condEval: {
            state: 'flow',
            DEID: 'numOfLE',
          },
          expr: 'isEmpty',
        },
      ],
      trueNextQuestion: {
        type: 'nextQuestion',
        value: {
          modifier: null,
          DEID: 'moreLE',
        },
      },
      falseNextQuestion: {
        type: 'nextQuestion',
        value: {
          modifier: null,
          DEID: 'STOP',
        },
      },
    },
  });
});

it('should parse a complex return conditional', () => {
  parser.feed('{loop.DE3}==A3&{flow.numOfLE}.isEmpty?review:+{loop.DE1}.pop');
  expect(parser.results[0]).toEqual({
    type: 'conditional',
    value: {
      condition: [
        {
          condEval: {
            state: 'loop',
            DEID: 'DE3',
          },
          expr: '==',
          AID: 'A3',
        },
        {
          condEval: {
            state: 'flow',
            DEID: 'numOfLE',
          },
          expr: 'isEmpty',
        },
      ],
      trueNextQuestion: {
        type: 'nextQuestion',
        value: {
          modifier: null,
          DEID: 'review',
        },
      },
      falseNextQuestion: {
        type: 'nextQuestion',
        value: {
          modifier: '+',
          DEID: {
            type: 'function',
            state: {
              state: 'loop',
              DEID: 'DE1',
            },
            function: 'pop',
          },
        },
      },
    },
  });
});

it('should parse a complex return conditional with nested ternary operations', () => {
  parser.feed(
    '{loop.DE3}==A3&{flow.numOfLE}.isEmpty?{loop.DE3}.isEmpty?STOP:review:+{loop.DE1}.pop',
  );
  expect(parser.results[0]).toEqual({
    type: 'conditional',
    value: {
      condition: [
        {
          condEval: {
            state: 'loop',
            DEID: 'DE3',
          },
          expr: '==',
          AID: 'A3',
        },
        {
          condEval: {
            state: 'flow',
            DEID: 'numOfLE',
          },
          expr: 'isEmpty',
        },
      ],
      trueNextQuestion: {
        type: 'ternaryOperation',
        value: {
          condition: [
            {
              condEval: {
                state: 'loop',
                DEID: 'DE3',
              },
              expr: 'isEmpty',
            },
          ],
          trueNextQuestion: {
            type: 'nextQuestion',
            value: {
              modifier: null,
              DEID: 'STOP',
            },
          },
          falseNextQuestion: {
            type: 'nextQuestion',
            value: {
              modifier: null,
              DEID: 'review',
            },
          },
        },
      },
      falseNextQuestion: {
        type: 'nextQuestion',
        value: {
          modifier: '+',
          DEID: {
            type: 'function',
            state: {
              state: 'loop',
              DEID: 'DE1',
            },
            function: 'pop',
          },
        },
      },
    },
  });
});

it('should parse a complex return conditional with nested ternary operations in the else part of it as well', () => {
  parser.feed(
    '{history.DE3}==A01?DE123:{loop.DE21}.isEmpty?review:{loop.DE21}.pop',
  );
  expect(parser.results[0]).toEqual({
    type: 'conditional',
    value: {
      condition: [
        {
          AID: 'A01',
          condEval: {
            DEID: 'DE3',
            state: 'history',
          },
          expr: '==',
        },
      ],
      falseNextQuestion: {
        type: 'ternaryOperation',
        value: {
          condition: [
            {
              condEval: {
                DEID: 'DE21',
                state: 'loop',
              },
              expr: 'isEmpty',
            },
          ],
          falseNextQuestion: {
            type: 'nextQuestion',
            value: {
              DEID: {
                function: 'pop',
                state: {
                  DEID: 'DE21',
                  state: 'loop',
                },
                type: 'function',
              },
              modifier: null,
            },
          },
          trueNextQuestion: {
            type: 'nextQuestion',
            value: {
              DEID: 'review',
              modifier: null,
            },
          },
        },
      },
      trueNextQuestion: {
        type: 'nextQuestion',
        value: {
          DEID: 'DE123',
          modifier: null,
        },
      },
    },
  });
});

it('should parse a nextQuestion array', () => {
  parser.feed('[DE30,DE21]');
  expect(parser.results[0]).toEqual({
    type: 'nextQuestion',
    value: [
      {
        DEID: {
          modifier: null,
          DEID: 'DE30',
        },
      },
      {
        DEID: {
          modifier: null,
          DEID: 'DE21',
        },
      },
    ],
  });
});
