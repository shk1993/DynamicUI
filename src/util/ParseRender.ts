import { Grammar, Parser } from 'nearley';
import { IRenderComponent } from '../interfaces/parseRender';

let grammar: Grammar;
let parser: Parser;

// tslint:disable-next-line:no-var-requires
grammar = Grammar.fromCompiled(require('../grammar/render'));

/**
 * The render string reads components with lowercased names. This object returns the names used by our React Components
 */
const stringToComponentName = {
  datepicker: 'DatePicker',
  textbox: 'InputField',
  textarea: 'InputField',
  checkbox: 'CheckboxField',
  radio: 'RadioField',
  dropdown: 'RadioField',
  review: 'Review',
  fieldarray: 'FieldArray',
};

/**
 * This function takes in a string, parses it, and returns React Component names and attributes for the QuestionSet to render
 * @param render  The string to pass to the render grammar to parse
 * @returns       An array of React Component names and attributes on the components
 */
const ParseRender = (render: string): IRenderComponent[] => {
  parser = new Parser(grammar);
  parser.feed(render);
  const parsedRender = parser.results[0] as IRenderComponent[];
  return parsedRender.map((comp: IRenderComponent) => ({
    ...comp,
    component: stringToComponentName[comp.component],
  }));
};

export default ParseRender;
