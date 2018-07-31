import { Grammar, Parser } from 'nearley';
import { IAnswers } from '../interfaces/answers';
import {
  ICondition,
  IConditional,
  IDEIDFunction,
  INextQuestion,
  IQuestionReturn,
  IQuestionValue,
} from '../interfaces/nextQuestion';
import { map } from '../state/stateHandler';

let grammar: Grammar;
let parser: Parser;

// tslint:disable-next-line:no-var-requires
grammar = Grammar.fromCompiled(require('../grammar/nextQuestion'));

const isConditionTrue = (condition: ICondition) => {
  const result = map[condition.condEval.state][condition.expr](
    condition.condEval.QID,
    condition.AID,
  );
  return result !== undefined ? result : true;
};

const evaluateNextQuestionFunction = (deid: IDEIDFunction) => {
  const nextQuestion = map.loop.peek(deid.state.QID);
  map.loop.pop(deid.state.QID);
  return nextQuestion;
};

const evaluateConditional = (conditional: IConditional): INextQuestion => {
  return conditional.condition.every(isConditionTrue)
    ? conditional.trueNextQuestion
    : conditional.falseNextQuestion;
};

const parseNextQuestion = (nextQuestion: string) => {
  parser = new Parser(grammar);
  parser.feed(nextQuestion);
  return parser.results[0];
};

const getNextQuestion = (nextQuestion: IQuestionValue): IQuestionReturn => {
  return typeof nextQuestion.QID === 'string'
    ? (nextQuestion as IQuestionReturn)
    : {
        modifier: nextQuestion.modifier,
        QID: evaluateNextQuestionFunction(nextQuestion.QID),
      };
};

/**
 * This function is the function called by the NextQuestion function. It returns an IQuestionReturn object
 * for the NextQuestion function to return.
 * @param value   Currently submited value for the current question
 * @param answers All the possible answer choices for the current question
 * @returns       An IQuestionReturn object NextQuestion to return back to QuestionSet
 */
export const getNextQuestionOfString = (value: string, answers: IAnswers) => {
  const nextQuestion =
    value in answers ? answers[value].nextQuestion : answers.noKey.nextQuestion;
  let nextQuestionParsed = parseNextQuestion(nextQuestion);
  while (nextQuestionParsed.type !== 'nextQuestion') {
    nextQuestionParsed = evaluateConditional(
      nextQuestionParsed.value as IConditional,
    );
  }
  if (nextQuestionParsed.value.length) {
    const next = [];
    for (const val of nextQuestionParsed.value) {
      next.push(getNextQuestion(val.DEID));
    }
    return next;
  } else {
    return [getNextQuestion(nextQuestionParsed.value as IQuestionReturn)];
  }
};
