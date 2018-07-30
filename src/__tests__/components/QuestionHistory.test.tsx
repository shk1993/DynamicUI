import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import {
  changeQuestion,
  QuestionHistory,
} from '../../components/QuestionHistory';
import { flowPeek, flowPush } from '../../state/questionFlowState';
import { silenceConsoleErrors } from '../../util/testingUtilityFunctions';

beforeAll(() => silenceConsoleErrors());
afterEach(cleanup);
const changeFlow = jest.fn();

describe('QuestionHistory component', () => {
  it('checks whether the QuestionHistory matches snapshot', () => {
    const { container } = render(<QuestionHistory changeFlow={changeFlow} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('changeQuestion should pop off all values untill the current question is no longer in the stack flow ', () => {
    const currentQuestion = ['DE20'];
    flowPush(['DE34']);
    flowPush(['DE20']);
    flowPush(['DE15']);
    changeQuestion(currentQuestion, changeFlow);
    expect(flowPeek()).toEqual(['DE20']);
  });
});
