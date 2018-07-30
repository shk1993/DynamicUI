import { FieldRenderProps } from 'react-final-form';

/**
 * Type used for the datepicker component. Combination of Field props from react-final-form and datepicker props
 */
export type DatePickerProps = FieldRenderProps & {
  /** if true, display the time select box in datepicker */
  showTimeSelect: boolean;

  /** the current value to dislay as a string */
  value?: string;
};
