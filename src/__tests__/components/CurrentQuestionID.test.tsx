import * as React from 'react';
import { render } from 'react-testing-library';
import CurrentQuestion from '../../components/CurrentQuestionID';

describe('The current question component', () => {
  it('should render and show the current question ID', () => {
    const { container } = render(<CurrentQuestion currentQuestion="DE1" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a different id when passed a different prop', () => {
    const { getByText } = render(<CurrentQuestion currentQuestion="DE2" />);
    expect(getByText('DE2', { exact: false })).toMatchSnapshot();
  });
});
