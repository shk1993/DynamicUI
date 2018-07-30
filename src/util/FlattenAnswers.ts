import { IAnswers } from '../interfaces/answers';

/**
 * Retrieves an object of answers, maps over all the keys, and then returns an array of answer objects
 * @param answers An object of key-object pairs, where key is the question id
 * @returns       An array of answer objects
 */
export default (answers: IAnswers) => {
  return Object.keys(answers).map(ans => answers[ans]);
};
