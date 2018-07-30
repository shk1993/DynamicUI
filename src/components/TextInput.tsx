import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';

/**
 * A wrapper around material-ui's text field component
 * @param props used by the Field in react-final-form
 * @returns     Material's TextField component
 */
export const Input = (props: FieldRenderProps) => (
  <TextField
    {...props}
    {...props.input}
    fullWidth
    multiline
    error={props.meta.touched && !!props.meta.error}
    helperText={props.meta.touched && props.meta.error}
  />
);
