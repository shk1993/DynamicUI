import * as React from 'react';
import { Field } from 'react-final-form';
import { IInputProps } from '../interfaces/formFields';
import { getValidators } from '../util/FieldValidation';
import { CheckBoxElement } from './CheckBoxComponent';
import { DatePickerField } from './DatePickerField';
import { RadioElement } from './RadioElement';
import { Reusable } from './ReusableComponenet';
import { Input } from './TextInput';

import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';

/**
 * The CheckboxField component for checkboxes wrapped around the Field component of react-final-form
 * @param props InputProps used for the input components through the application
 * @returns     Our component wrapper around the Field components of react-final-forms
 */
export const CheckboxField = (props: IInputProps) => (
  <Reusable {...props} component={CheckBoxElement} type={'checkbox'} />
);

/**
 * The RadioField component for radio buttons wrapped around the Field component of react-final-form
 * @param props InputProps used for the input components through the application
 * @returns     Our component wrapper around the Field components of react-final-forms
 */
export const RadioField = (props: IInputProps) => (
  <Reusable {...props} component={RadioElement} type={'radio'} />
);

/**
 * The InputField component wrapped around the Field component of react-final-form
 * @param props InputProps used for the input components through the application
 * @returns     Our component wrapper around the Field components of react-final-forms
 */
export const InputField = (props: IInputProps) => {
  const { push, ...propsWithoutPush } = props;
  return (
    <Field
      component={Input}
      {...propsWithoutPush}
      label={props.placeholder}
      validate={getValidators(props.attributes)}
    />
  );
};

/**
 * The DatePicker component wrapped around the Field component of react-final-form
 * @param props InputProps used for the input components through the application
 * @returns     Our component wrapper around the Field components of react-final-forms
 */
export const DatePicker = (props: IInputProps) => {
  const { push, ...propsWithoutPush } = props;
  return (
    <Field
      component={DatePickerField}
      {...propsWithoutPush}
      label={props.placeholder}
      validate={getValidators(props.attributes)}
    />
  );
};
