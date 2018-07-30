import QuestionSet, { FormNames } from '../../util/SampleQuestionSet';

describe('SampleQuestionSet', () => {
  it('verifies the sample question set has not changed', () => {
    expect(QuestionSet).toMatchSnapshot();
  });
  it('verifies the form names has not changed', () => {
    expect(FormNames).toMatchSnapshot();
  });
});
