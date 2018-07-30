import { Grammar, Parser } from 'nearley';

let grammar: Grammar;
let parser: Parser;

beforeAll(() =>
  (grammar = Grammar.fromCompiled(require('../../grammar/render'))));

beforeEach(() => (parser = new Parser(grammar)));

describe('render grammar parser', () => {
  it('should parse a simple datepicker component', () => {
    parser.feed('datepicker');
    expect(parser.results[0]).toEqual([
      { component: 'datepicker', attributes: null },
    ]);
  });

  it('should parse a simple textbox component', () => {
    parser.feed('textbox');
    expect(parser.results[0]).toEqual([
      { component: 'textbox', attributes: null },
    ]);
  });

  it('should parse a simple textarea component', () => {
    parser.feed('textarea');
    expect(parser.results[0]).toEqual([
      { component: 'textarea', attributes: null },
    ]);
  });

  it('should parse a simple radio component', () => {
    parser.feed('radio');
    expect(parser.results[0]).toEqual([
      { component: 'radio', attributes: null },
    ]);
  });

  it('should parse a simple checkbox component', () => {
    parser.feed('checkbox');
    expect(parser.results[0]).toEqual([
      { component: 'checkbox', attributes: null },
    ]);
  });

  it('should parse a simple dropdown component', () => {
    parser.feed('dropdown');
    expect(parser.results[0]).toEqual([
      { component: 'dropdown', attributes: null },
    ]);
  });

  it('should parse two simple components', () => {
    parser.feed('dropdown&textbox');
    expect(parser.results[0]).toEqual([
      { component: 'dropdown', attributes: null },
      { component: 'textbox', attributes: null },
    ]);
  });

  it('should parse a component with attributes', () => {
    parser.feed(
      'dropdown(min: MM/DD/YYYY, max: MM/DD/YYYY, test: test, tester: tester)',
    );
    expect(parser.results[0]).toEqual([
      {
        component: 'dropdown',
        attributes: [
          { key: 'min', value: 'MM/DD/YYYY' },
          { key: 'max', value: 'MM/DD/YYYY' },
          { key: 'test', value: 'test' },
          { key: 'tester', value: 'tester' },
        ],
      },
    ]);
  });

  it('should parse a component component with attributes', () => {
    parser.feed(
      'dropdown(min: minimum, max: maximum, test: test, tester: tester)&textbox(limit: 1000, maxValue: max)',
    );
    expect(parser.results[0]).toEqual([
      {
        component: 'dropdown',
        attributes: [
          { key: 'min', value: 'minimum' },
          { key: 'max', value: 'maximum' },
          { key: 'test', value: 'test' },
          { key: 'tester', value: 'tester' },
        ],
      },
      {
        component: 'textbox',
        attributes: [
          { key: 'limit', value: '1000' },
          { key: 'maxValue', value: 'max' },
        ],
      },
    ]);
  });

  it('should parse a component with a regex attribute', () => {
    parser.feed('datepicker(validation: ^d{1,2}/d{1,2}/d{4}$)');
    expect(parser.results[0]).toEqual([
      {
        component: 'datepicker',
        attributes: [{ key: 'validation', value: '^d{1,2}/d{1,2}/d{4}$' }],
      },
    ]);
  });

  it('should parse the review page when passes as a component', () => {
    parser.feed('review');
    expect(parser.results[0]).toEqual([
      {
        component: 'review',
        attributes: null,
      },
    ]);
  });
});
