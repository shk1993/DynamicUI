import { AnyObject } from 'final-form';
import { FieldRenderProps } from 'react-final-form';
import { IAnswer } from './answers';
import { IAttribute } from './attributes';

/**
 * Input props for each of the form field elements
 */
export interface IInputProps {
  /** name of the question as a string */
  name: string;

  /** placeholder text for textboxes */
  placeholder: string;

  /** label to show the user */
  label: string;

  /** current values */
  values: AnyObject;

  /** answer choices */
  answers: IAnswer[];

  /** array of key and value strings for modifying the component */
  attributes?: IAttribute[] | undefined;

  /** push function used for field arrays */
  // tslint:disable-next-line:ban-types
  push?: Function;
}

/**
 * Props used for checkbox and radio components
 */
export interface IAnswerProps {
  /** label to show the user */
  label: string;

  /** current values */
  values: AnyObject;

  /** if exists, render the child component if the input is selected */
  child?: string;

  /** push function used for field arrays */
  // tslint:disable-next-line:ban-types
  push?: Function;
}

/**
 * Props used for the reusable component
 */
export interface IReusable extends IInputProps {
  /** type of component (checkbox or radio) as a string */
  type: string;

  /** component value */
  component:
    | React.ComponentType<FieldRenderProps>
    | React.StatelessComponent<FieldRenderProps>;
}
