/**
 * A representation of how the answers are stored in the question sets
 */
export interface IAnswer {
  /** AnswerID */
  key: string;

  /** Text to display as a label */
  text: string;

  /** Either QuestionID for next question or an evalutation to retrieve QuestionID */
  nextQuestion: string;

  /** if exists, there is a child component for this answer. (ie Other: Please Specify) */
  child?: string;
}

/**
 * Key value pairs where key is the AnswerID and the value is the IAnswer object
 */
export interface IAnswers {
  [key: string]: IAnswer;
}
