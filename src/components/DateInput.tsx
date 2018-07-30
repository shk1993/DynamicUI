import TextField from '@material-ui/core/TextField';
import * as Moment from 'moment';
import * as React from 'react';
import { DatePickerProps } from '../interfaces/datePickerProp';

import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';

const dateTimeFormat = 'MM/DD/YYYY HH:mm';
const dateFormat = 'MM/DD/YYYY';

/**
 * Displays the DatePicker component inside a material-ui TextField
 * @param props DatePickerProps used to manipulate the DatePicker values
 * @returns     The react-date-picker component in a material-ui TextField
 */
export const DateInput = (props: DatePickerProps) => (
  <TextField
    {...props}
    {...props.input}
    value={props.input.value !== 'UNK' ? props.input.value : ''}
    onBlur={event =>
      Moment(
        event.target.value,
        props.showTimeSelect ? dateTimeFormat : dateFormat,
        true,
      ).isValid()
        ? props.input.onChange(event.target.value)
        : props.input.onChange(undefined)
    }
    fullWidth
    error={props.meta.touched && !!props.meta.error}
    helperText={props.meta.touched && props.meta.error}
  />
);
