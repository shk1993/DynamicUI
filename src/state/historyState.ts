import { IQuestionData } from '../interfaces/questions';

/** the history object. stores all answers the user has made on the current event */
let history = {};

/**
 * called everytime the form is rendered. This function retrieves all the values from react-final-form and sets them in the history object
 * @param values all the values in the history form state
 */
export const setHistory = (values: IQuestionData) => {
  history = values;
};

/**
 * Gets the current history value based on the Id received as a parameter
 * @param Id QuestionID in the history object to retrieve
 * @returns  The value saved in the history object at id
 */
export const getHistoryValues = (Id: string) => {
  return history[Id];
};

/**
 * Checks if the value saved in the history is the same as the value passed in
 * @param id    QuestionID in the history object to determine if value passed in is the same
 * @param value The value to check if it equals the value saved in history
 * @returns     True if the value saved in history is the same as the value parameter
 */
export const isEqual = (id: string, value: string) => {
  return history[id] === value || history[id].includes(value);
};
