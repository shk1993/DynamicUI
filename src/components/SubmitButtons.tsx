import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { AnyObject } from 'final-form';
import * as React from 'react';

/**
 * Displays the back and next/submit buttons underneath the questions
 * @param props pristine - if true, submit is disabled, handler - back button callback function, currentQuesiton - array of strings of the current quesiton
 * @returns     Two material-ui buttons, one for back and the other for next
 */
export default (props: {
  backHandler: () => void;
  currentQuestion: string[];
  submitHandler: () => void;
  nextHandler: () => void;
  values: AnyObject;
}) => (
  <Grid container>
    <Grid item xs={6}>
      <Button
        size="large"
        color="secondary"
        onClick={props.backHandler}
        fullWidth
      >
        Back
      </Button>
    </Grid>
    <Grid item xs={6}>
      <Button
        size="large"
        color="primary"
        fullWidth
        disabled={
          !(
            props.values[
              props.currentQuestion[props.currentQuestion.length - 1]
            ] &&
            props.values[
              props.currentQuestion[props.currentQuestion.length - 1]
            ].length
          ) && !props.currentQuestion.includes('specs')
        }
        onClick={
          props.currentQuestion.includes('specs')
            ? props.submitHandler
            : props.nextHandler
        }
      >
        {props.currentQuestion.includes('specs') ? 'Submit' : 'Next'}
      </Button>
    </Grid>
  </Grid>
);
