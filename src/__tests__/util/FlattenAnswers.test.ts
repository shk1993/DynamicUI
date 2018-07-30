import FlattenAnswers from '../../util/FlattenAnswers';
import QuestionSet from '../../util/SampleQuestionSet';

describe('FlattenAnswers function', () => {
  it('should return a flattened array of answers', () => {
    const answers = QuestionSet.DE3.answers;

    expect(FlattenAnswers(answers)).toEqual([
      answers.A3,
      answers.A6,
      answers.A9,
    ]);
  });
});
