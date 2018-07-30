import * as React from 'react';
import { cleanup, fireEvent, renderIntoDocument } from 'react-testing-library';

jest.mock('../../util/InitialQuestion', () => ({ default: () => ['DE15'] }));
jest.mock('../../util/SampleQuestionSet', () => ({
  default: {
    DE15: {
      key: 'DE15',
      render: 'textbox(validation: ^\\w+$, required: true)',
      text: 'Briefly describe the event that occurred or unsafe condition:',
      answers: {
        noKey: {
          key: 'noKey',
          text: null,
          nextQuestion: 'DE78',
        },
      },
    },
  },
  FormNames: {
    Names: {
      HERF: { title: 'Healthcare Event Reporting Form', q1: '' },
    },
    Questions: {
      DE15: 'HERF',
    },
  },
}));

import QuestionSet from '../../pages/QuestionSet';

beforeAll(jest.resetAllMocks);
afterEach(cleanup);

describe('FieldValidation', () => {
  it('should show error when the required field is empty', () => {
    const { queryAllByText, container } = renderIntoDocument(<QuestionSet />);
    const containerInput = Array.from(
      container.querySelectorAll('textarea'),
    ).find(cont => cont.name === 'DE15');
    fireEvent(containerInput, new FocusEvent('blur'));
    expect(queryAllByText('Required')).toHaveLength(1);
  });
  it('should show error when the input does not pass regex test', () => {
    const { queryAllByText, container } = renderIntoDocument(<QuestionSet />);
    const containerInput = Array.from(
      container.querySelectorAll('textarea'),
    ).find(cont => cont.name === 'DE15');
    containerInput.value = '..';
    fireEvent.change(containerInput);
    fireEvent(containerInput, new FocusEvent('blur'));
    expect(queryAllByText('Invalid Input')).toHaveLength(1);
  });
  it('should not show error when the input pass regex test', () => {
    const { queryAllByText, container } = renderIntoDocument(<QuestionSet />);
    const containerInput = Array.from(
      container.querySelectorAll('textarea'),
    ).find(cont => cont.name === 'DE15');
    containerInput.value = 'abc';
    fireEvent.change(containerInput);
    fireEvent(containerInput, new FocusEvent('blur'));
    expect(queryAllByText('Invalid Input')).toHaveLength(0);
  });
});
