/**
 * The condition to evaluate
 */
export interface ICondition {
  /** the object to retrieve a value from a state variable */
  condEval: {
    /** the state variable to retrive the object from */
    state: string;

    /** the quesiton id of the value to retrive */
    DEID: string;
  };

  /** the expression to evaluate. could be == or isEmpty */
  expr: string;

  /** the answer id to compare against the state value retrieved */
  AID: string;
}

/**
 * A function to perform on a state variable
 */
export interface IDEIDFunction {
  /** the type of operation. in this case, type should say function */
  type: string;

  /** the object to retrieve a value from a state variable */
  state: {
    /** the state variable to retrive the object from */
    state: string;

    /** the quesiton id of the value to retrive */
    DEID: string;
  };

  /** the function to call. for example, push or pop */
  function: string;
}

/**
 * The question value. This is nested inside of a IQuestionValues
 */
export interface IQuestionValue {
  /** used when returning an array. if it exists follow the modifier syntax meaning */
  modifier: string | null;

  /** QuestionID of the next question or a function to perform an option on the question id */
  DEID: string | IDEIDFunction;
}

/**
 * The returned object back to the NextQuestion file for that file to check modifiers
 */
export interface IQuestionReturn {
  /** used when returning an array. if it exists follow the modifier syntax meaning */
  modifier: string | null;

  /** QuestionID of the next question */
  DEID: string;
}

/**
 * The conditional object
 */
export interface IConditional {
  /** an array of conditions. After reducing all of them to true or false, return the nextquesiton values of the result */
  condition: ICondition[];

  /** the next question value, or a recursive conditional, which gets observed if condition is true */
  trueNextQuestion: INextQuestion;

  /** the next question value, or a recursive conditional, which gets observed if condition is false */
  falseNextQuestion: INextQuestion;
}

/**
 * The next question object returned by our parser prior to being broken down and evaluated.
 */
export interface INextQuestion {
  /** the type of next question. Could be 'nextQuestion', 'ternaryOperation', or 'conditional' */
  type: string;

  /** the value to analyze based on the type variable */
  value: IQuestionValue | IConditional;
}
