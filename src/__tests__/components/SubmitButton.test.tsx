import * as React from 'react';
import { cleanup, fireEvent, renderIntoDocument } from 'react-testing-library';
import SubmitButtons from '../../components/SubmitButtons';
import { silenceConsoleErrors } from '../../util/testingUtilityFunctions';

beforeAll(() => silenceConsoleErrors());
afterEach(cleanup);

describe('SubmitButton component', () => {
  const backHandler = jest.fn();
  const submitHandler = jest.fn();
  const nextHandler = jest.fn();

  it('should check the call of handler on Next Button click', () => {
    const firstQuestion = ['DE30'];
    const values = { DE30: 'A9' };
    const { getByText } = renderIntoDocument(
      <SubmitButtons
        nextHandler={nextHandler}
        submitHandler={submitHandler}
        backHandler={backHandler}
        currentQuestion={firstQuestion}
        values={values}
      />,
    );
    const nextButton = getByText('Next');
    fireEvent(
      nextButton,
      new MouseEvent('click', { bubbles: true, cancelable: true }),
    );
    expect(nextHandler).toHaveBeenCalled();
  });

  it('should check the call of handler on Submit Button click', () => {
    const firstQuestion = ['review'];
    const values = { DE30: 'A9' };
    const { getByText } = renderIntoDocument(
      <SubmitButtons
        nextHandler={nextHandler}
        submitHandler={submitHandler}
        backHandler={backHandler}
        currentQuestion={firstQuestion}
        values={values}
      />,
    );
    const submitButton = getByText('Submit');
    fireEvent(
      submitButton,
      new MouseEvent('click', { bubbles: true, cancelable: true }),
    );
    expect(submitHandler).toHaveBeenCalled();
  });

  it('should check the call of handler on Back Button click', () => {
    const firstQuestion = ['DE30'];
    const values = { DE30: 'A9' };
    const { getByText } = renderIntoDocument(
      <SubmitButtons
        nextHandler={nextHandler}
        submitHandler={submitHandler}
        backHandler={backHandler}
        currentQuestion={firstQuestion}
        values={values}
      />,
    );
    const backButton = getByText('Back');
    fireEvent(
      backButton,
      new MouseEvent('click', { bubbles: true, cancelable: true }),
    );
    expect(backHandler).toHaveBeenCalled();
  });
});
