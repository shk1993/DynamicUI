import * as React from 'react';
import { cleanup, fireEvent, renderIntoDocument } from 'react-testing-library';
import QuestionSet from '../../pages/QuestionSet';

afterEach(cleanup);

jest.mock('../../util/InitialQuestion', () => ({ default: () => ['DE21'] }));

describe('QuestionSet', () => {
  it('should call handler function on back button', () => {
    jest.resetAllMocks();
    const { getByText, queryAllByText } = renderIntoDocument(<QuestionSet />);
    const anesthesia = getByText('Anestheia');
    fireEvent(
      anesthesia.parentElement,
      new MouseEvent('click', { bubbles: true, cancelable: true }),
    );
    const submit = getByText('Next');
    const back = getByText('Back');

    // submit forward
    fireEvent(
      submit.parentElement,
      new MouseEvent('click', { bubbles: true, cancelable: true }),
    );
    expect(
      queryAllByText(
        'Which of the following categories are associated with the event or unsafe condition?',
      ),
    ).toHaveLength(0);

    // go back
    fireEvent(
      back.parentElement,
      new MouseEvent('click', { bubbles: true, cancelable: true }),
    );
    expect(
      queryAllByText(
        'Which of the following categories are associated with the event or unsafe condition?',
      ),
    ).toHaveLength(1);
  });
  it('should render child for answer when it is selected', () => {
    jest.resetAllMocks();
    const { getByText } = renderIntoDocument(<QuestionSet />);
    const otherSpecify = getByText('Other: Please specify');
    const otherSpecifyChildrenLength = otherSpecify.children.length;
    fireEvent(otherSpecify.parentElement, new MouseEvent('click'));
    expect(otherSpecify.children.length).toEqual(
      otherSpecifyChildrenLength + 1,
    );
  });
  it('disable attribute on button should not appear if checkbox has been selected', () => {
    jest.resetAllMocks();
    const { container, getByText, queryAllByText } = renderIntoDocument(
      <QuestionSet />,
    );
    const anesthesia = getByText('Anestheia');
    expect(container).toMatchSnapshot();
    fireEvent(
      anesthesia.parentElement,
      new MouseEvent('click', { bubbles: true, cancelable: true }),
    );
    expect(container).toMatchSnapshot();
  });
});
