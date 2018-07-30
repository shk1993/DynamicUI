import * as React from 'react';
import ICurrentQuestion from '../interfaces/currentQuestion';

/**
 * Displays the current values in history as a preformatted view
 */
export default (props: ICurrentQuestion) => (
  <pre>{JSON.stringify(props.values, undefined, 2)}</pre>
);
