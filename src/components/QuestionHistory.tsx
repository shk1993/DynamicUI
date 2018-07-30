import Button from '@material-ui/core/Button';
import * as React from 'react';
import { map } from '../state/stateHandler';

export const changeQuestion = (
  currQuestion: string[],
  updateQuestionState: () => void,
) => {
  while (map.flow.peek().join(',') !== currQuestion.join(',')) {
    map.flow.pop();
  }
  updateQuestionState();
};

export const QuestionHistory = (props: { updateQuestionState: () => void }) => {
  const Arrow = '\u27f6';
  return (
    <div>
      <p>
        {map.flow.reverseArray().map(val => {
          return (
            <Button
              key={val.join(',')}
              size="small"
              onClick={() => changeQuestion(val, props.updateQuestionState)}
            >
              {`${val.join(' ')}${Arrow} `}
            </Button>
          );
        })}
      </p>
    </div>
  );
};
