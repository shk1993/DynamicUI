import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import ComponentList from '../components/ComponentList';
import ICurrentQuestion from '../interfaces/currentQuestion';
import { IRenderComponent } from '../interfaces/parseRender';
import { setHistory } from '../state/historyState';
import FlattenAnswers from '../util/FlattenAnswers';
import ParseRender from '../util/ParseRender';
import ReturnAnswers from '../util/ReturnAnswers';
import QuestionSet from '../util/SampleQuestionSet';

/**
 * The starting point of the main purpose of our application and called from the QuestionSet page.
 * @param props The current question, history values, and the push function
 * @returns     React component consisting of the question(s) and answer(s)
 */
export default (props: ICurrentQuestion) => {
  const renderGroup = [];
  setHistory(props.values);
  for (const question of props.currentQuestion) {
    const curQuestion = QuestionSet[question];
    const render = ParseRender(curQuestion.render);
    const flatAnswers = ReturnAnswers(
      render,
      FlattenAnswers(curQuestion.answers),
    );
    renderGroup.push({ question: curQuestion, answers: flatAnswers, render });
  }
  return (
    <div>
      {renderGroup.map(groupComp => {
        return (
          <div key={JSON.stringify(groupComp)}>
            <Typography variant="subheading">
              {groupComp.question.text}
            </Typography>
            {groupComp.render.map((comp: IRenderComponent) => {
              const Component = ComponentList[comp.component];
              return (
                <Component
                  key={JSON.stringify(comp)}
                  label={groupComp.question.text}
                  name={groupComp.question.key}
                  answers={groupComp.answers}
                  values={props.values}
                  attributes={comp.attributes}
                  push={props.push}
                />
              );
            })}
            <br />
          </div>
        );
      })}
    </div>
  );
};
