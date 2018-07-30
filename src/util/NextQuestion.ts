import { Set, Stack } from 'immutable';
import { IQuestionReturn } from '../interfaces/nextQuestion';
import { IQuestionData } from '../interfaces/questions';
import { map } from '../state/stateHandler';
import { getNextQuestionOfString } from './NextQuestionParser';
import QuestionSet from './SampleQuestionSet';

/**
 * Returns an array of next question ids.
 * @param nextQuestions array of next question id and modifiers
 */
const getNextQuestions = (nextQuestions: IQuestionReturn[]) => {
  const nextQuestionIds = [];
  for (const question of nextQuestions) {
    nextQuestionIds.push(question.DEID);
  }
  return nextQuestionIds;
};

/**
 * The function that is used to return the next questions for the user to answer.
 * @param currentQuestions  An array of questions the user just previously answered
 * @param values            The historical state of all previous answers made by the user
 */
export default (
  currentQuestions: string[],
  values: IQuestionData,
): string[] => {
  const question = currentQuestions[currentQuestions.length - 1];
  const valueSubmitted = values[question];
  const answers = QuestionSet[question].answers;

  // condition #1: the value submitted is a string. The string is the answer key
  if (typeof valueSubmitted === 'string') {
    return getNextQuestions(getNextQuestionOfString(valueSubmitted, answers));
  }

  // condition #2: the value submitted is an array of 0 elements. We should use the 'noKey' answer key
  if (valueSubmitted.length === 0) {
    return getNextQuestions(getNextQuestionOfString('noKey', answers));
  }

  // condition #3: the value submitted is an array and we need to evaluate all next question ids
  let answerList = Set<string | string[]>();
  for (const answer of valueSubmitted) {
    const nextQuestion = getNextQuestionOfString(answer, answers);
    if (nextQuestion[0].modifier === null) {
      return getNextQuestions(nextQuestion);
    }
    answerList = answerList.add(getNextQuestions(nextQuestion));
  }
  const questionsToVisit = answerList.toArray();
  if (questionsToVisit.includes('review')) {
    questionsToVisit.splice(questionsToVisit.indexOf('review'), 1);
    questionsToVisit.push('review');
  }
  if (questionsToVisit.length > 0) {
    map.loop.push(question, Stack<string>(questionsToVisit));
    const nextQuestion = map.loop.peek(question);
    map.loop.pop(question);
    return [nextQuestion];
  }

  throw Error('No next question to navigate to...');
};
