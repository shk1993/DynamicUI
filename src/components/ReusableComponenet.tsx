import * as React from 'react';
import { Field } from 'react-final-form';
import { IReusable } from '../interfaces/formFields';

/**
 * This component is to minimalize duplicate code used in Checkbox and Radio buttons.
 * @param props
 * @returns     A checkbox or a radio button react component
 */
export const Reusable = (props: IReusable) => (
  <div>
    {props.answers.map(ans => (
      <label key={ans.key}>
        <Field
          name={props.name}
          component={props.component}
          value={ans.key}
          type={props.type}
          label={ans.text}
          child={ans.child}
          values={props.values}
        />
      </label>
    ))}
  </div>
);
