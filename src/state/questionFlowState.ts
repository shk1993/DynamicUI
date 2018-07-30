import { Stack } from 'immutable';
import InitialQuestion from '../util/InitialQuestion';

/** the questionFlow variable. represented as a stack of arrays of questionIDs */
let questionFlow = Stack<string[]>([InitialQuestion()]);

/**
 * Function to push onto the questionFlow stack
 * @param question array of questionID strings to push onto the stack
 */
export const flowPush = (question: string[]) => {
  questionFlow = questionFlow.push(question);
};

/**
 * Function to pop off of the questionFlow stack. Does NOT return the popped element
 */
export const flowPop = () => {
  questionFlow = questionFlow.pop();
};

/**
 * Function for viewing the element in the questionFlow stack
 * @returns the last element pushed in the stack.
 */
export const flowPeek = () => {
  return questionFlow.peek();
};

/**
 * Function to retrieve the number of elements in the questionFlow stack
 */
export const count = () => {
  return questionFlow.count();
};

/**
 * Function that'll return true if the questionID exists in the questionFlow stack
 * @param question the questionID to determine if it exists in the stack
 */
export const flowContains = (question: string) =>
  questionFlow
    .toArray()
    .join(',')
    .split(',')
    .indexOf(question) !== -1;

/**
 * Returns the question flow state as an array of arrays in stack reverse order
 * @returns the question flow state as an array of arrays from oldest to most recent
 */
export const flowReverse = (): string[][] => questionFlow.reverse().toArray();
