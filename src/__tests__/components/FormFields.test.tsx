import * as React from 'react';
import { render } from 'react-testing-library';

import { Stack } from 'immutable';
import { FieldArray } from '../../components/FieldArray';
import {
  CheckboxField,
  DatePicker,
  InputField,
  RadioField,
} from '../../components/FormFields';
import { IInputProps } from '../../interfaces/formFields';
import { silenceConsoleErrors } from '../../util/testingUtilityFunctions';

Date.now = jest.fn(() => new Date('2017-01-01T00:00:00+0000'));

beforeAll(() => silenceConsoleErrors());

describe('Test FormField component', () => {
  const inputProps: IInputProps = {
    label:
      'What is the date the Common Formats patient safety module was completed?',
    name: 'DE30',
    placeholder: 'dd',
    answers: [{ key: 'noKey', text: '', nextQuestion: 'DE3' }],
    attributes: [{ key: 'children', value: '[DE112,DE113]' }],
    push: jest.fn(),
    values: {},
  };

  it('checks whether the DatePicker matches snapshot', () => {
    const { container } = render(<DatePicker {...inputProps} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('checks whether the RadioField matches snapshot', () => {
    const { container } = render(<RadioField {...inputProps} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('checks whether the InputField matches snapshot', () => {
    const { container } = render(<InputField {...inputProps} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('checks whether the CheckboxField matches snapshot', () => {
    const { container } = render(<CheckboxField {...inputProps} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('checks whether the FieldArray matches snapshot', () => {
    const { container } = render(<FieldArray {...inputProps} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
