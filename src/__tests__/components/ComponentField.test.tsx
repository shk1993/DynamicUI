import * as React from 'react';
import { render } from 'react-testing-library';
import ComponentField from '../../components/ComponentField';
import { silenceConsoleErrors } from '../../util/testingUtilityFunctions';

Date.now = jest.fn(() => new Date('2017-01-01T00:00:00+0000'));

beforeAll(() => silenceConsoleErrors());

describe('ComponentField component', () => {
  it('should render the datepicker on question DE30', () => {
    const { container } = render(
      <ComponentField currentQuestion={['DE30']} values={{}} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the radio buttons on question DE3', () => {
    const { container } = render(
      <ComponentField currentQuestion={['DE3']} values={{}} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the date and radio buttons on question DE9', () => {
    const { container } = render(
      <ComponentField currentQuestion={['DE9']} values={{}} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
