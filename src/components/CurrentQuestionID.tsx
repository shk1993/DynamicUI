import * as React from 'react';

/**
 * This shows the current question the user is on above the submit buttons, for debugging purposes
 * @param props Current question object to display at the bottom fo the page
 * @returns     React component displaying the current questions
 */
export default (props: { currentQuestion: string[] }) => (
  <span style={{ color: 'white' }}>[{props.currentQuestion}]</span>
);
