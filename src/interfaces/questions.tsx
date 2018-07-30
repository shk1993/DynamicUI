/**
 * A representation of the history values stored in the history state. All answers are either string answers or an array of strings.
 */
export interface IQuestionData {
  [key: string]: string | string[];
}
