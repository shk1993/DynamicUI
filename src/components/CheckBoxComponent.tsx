import Checkbox from '@material-ui/core/Checkbox';
import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { IAnswerProps } from '../interfaces/formFields';
import ComponentField from './ComponentField';

/**
 * Displays the checkbox element by material-ui. If we have a child, and if the checkbox is selected, then display the child component
 * @param props react-final-form's field props and custom props we need for checkboxes
 * @returns     checkbox components, showing the label and the child if selected
 */
export const CheckBoxElement = (props: FieldRenderProps & IAnswerProps) => (
  <div>
    <Checkbox
      {...props}
      {...props.input}
      name={props.input.name}
      onChange={props.input.onChange}
      value={props.input.value}
    />
    {'\n'}
    {props.label}
    <br />
    {props.child &&
      props.input.checked && (
        <ComponentField currentQuestion={[props.child]} values={props.values} />
      )}
  </div>
);
