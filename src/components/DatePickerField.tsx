import * as Moment from 'moment';
import * as React from 'react';
import ReactDatePicker from 'react-datepicker';
import { DatePickerProps } from '../interfaces/datePickerProp';
import { DateInput } from './DateInput';

const dateTimeFormat = 'MM/DD/YYYY HH:mm';
const dateFormat = 'MM/DD/YYYY';

/**
 * A wrapper of the DatePicker component. We use this to verify correct input of the datepicker
 * @param props DatePickerProps used for the DatePicker component
 * @returns     A wrapper around the react-datepicker component
 */
export const DatePickerField = (props: DatePickerProps) => (
  <ReactDatePicker
    customInput={<DateInput {...props} />}
    selected={
      props.input.value && Moment(props.input.value).isValid()
        ? Moment(props.input.value)
        : Moment()
    }
    onChange={moment =>
      props.input.onChange(
        moment && moment.isValid()
          ? moment.format(props.showTimeSelect ? dateTimeFormat : dateFormat)
          : undefined,
      )
    }
    showTimeSelect={props.showTimeSelect}
    dateFormat="LLL"
    placeholderText={props.showTimeSelect ? dateTimeFormat : dateFormat}
    showYearDropdown
    showMonthDropdown
    dropdownMode="select"
  />
);
