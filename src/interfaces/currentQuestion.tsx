import { AnyObject } from 'final-form';

/**
 * Props used for the ComponentField component
 */
export default interface ICurrentQuestion {
  /** an array of current question ids */
  currentQuestion: string[];

  /** the function used for pushing onto history in field arrays */
  // tslint:disable-next-line:ban-types
  push?: Function;

  /** the current values in history */
  values: AnyObject;
}
