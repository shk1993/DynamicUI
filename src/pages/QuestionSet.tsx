import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import arrayMutators from 'final-form-arrays';
import * as React from 'react';
import { Form } from 'react-final-form';
import ComponentField from '../components/ComponentField';
import { QuestionHistory } from '../components/QuestionHistory';
import SubmitButtons from '../components/SubmitButtons';
import { IQuestionData } from '../interfaces/questions';
import { map } from '../state/stateHandler';
import InitialQuestion from '../util/InitialQuestion';
import NextQuestion from '../util/NextQuestion';

/**
 * The main react component. It repeatingly renders the next question until the user has finished submitting the form
 */
export default class QuestionSet extends React.Component {
  /**
   * Keeps track of one state variable, an array of current questions to render
   */
  state = {
    currentQuestion: InitialQuestion(),
  };

  handleEnterEvent: (e?: Event) => void;

  handleBackButton = () => {
    if (map.flow.count() > 1) {
      map.flow.pop();
      this.setState({
        currentQuestion: map.flow.peek(),
      });
    }
  };

  /**
   * goes to next question when enter key or submit button is clicked
   * if the user is in a textfield the enter functionality is disabled
   * @param val   question flow object with users responses
   * @returns     anonymous void function that advances to the next question based on click or key press
   */
  handleEnterKeyPress = (val: IQuestionData) => {
    return (e: Event) => {
      let isEnterPressed = false;
      if (e.type === 'keydown') {
        const keyboardEvent = e as KeyboardEvent;
        const questionType =
          keyboardEvent &&
          keyboardEvent.srcElement &&
          keyboardEvent.srcElement.className;
        const questionRenderType =
          questionType && questionType.substring(0, 8).toLowerCase();
        if (
          keyboardEvent.keyCode === 13 &&
          !(questionRenderType && questionRenderType === 'textarea')
        ) {
          isEnterPressed = true;
        }
      }
      if (e.type === 'click' || isEnterPressed) {
        this.setCurrentQuestion(val);
      }
    };
  };

  /**
   * Uppdates the state based on the new variable in the flow state object
   */
  updateQuestionState = () => {
    this.setState({
      currentQuestion: map.flow.peek(),
    });
  };

  /**
   * Checks if the value saved in the history is the same as the value passed in
   * @param e                  event handler object for the keydown event
   * @param renderPrevQuestion function that changes the flow state by popping off the current question and rendering the previous question
   */
  handleBackKeyPress = (e: KeyboardEvent, renderPrevQuestion: () => void) => {
    const keyBoardEvent = e && e.srcElement && e.srcElement.className;
    const questionType =
      keyBoardEvent && keyBoardEvent.substring(0, 8).toLowerCase();
    if (e.keyCode === 8 && !(questionType && questionType === 'textarea')) {
      renderPrevQuestion();
    }
  };

  setCurrentQuestion = (values: IQuestionData) => {
    if (
      values[this.state.currentQuestion[0]] &&
      values[this.state.currentQuestion[0]].length
    ) {
      const nextQuestion = NextQuestion(this.state.currentQuestion, values);
      map.flow.push(nextQuestion);
      this.setState({
        currentQuestion: nextQuestion,
      });
    }
  };

  render() {
    return (
      <Form
        onSubmit={(values: IQuestionData) => {
          setTimeout(
            () => alert(`Submitted! \n${JSON.stringify(values, null, 2)}`),
            500,
          );
        }}
        mutators={{
          ...arrayMutators,
        }}
        render={({
          handleSubmit,
          pristine,
          form: {
            mutators: { push },
          },
          values,
        }) => (
          <Grid container justify="center">
            {(this.handleEnterEvent = this.handleEnterKeyPress(values))}
            <Grid item xs={6}>
              <Card raised>
                <CardHeader title={'Vehicle Inquiry Form'} />
                <CardContent>
                  <QuestionHistory
                    updateQuestionState={this.updateQuestionState}
                  />
                  <ComponentField
                    currentQuestion={this.state.currentQuestion}
                    values={values}
                    push={push}
                  />
                  <SubmitButtons
                    currentQuestion={this.state.currentQuestion}
                    backHandler={this.handleBackButton}
                    submitHandler={handleSubmit}
                    nextHandler={this.handleEnterEvent}
                    values={values}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
      />
    );
  }
}
