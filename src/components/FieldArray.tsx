import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import * as React from 'react';
import { FieldArray as FA } from 'react-final-form-arrays';
import { InputField } from '../components/FormFields';
import { IInputProps } from '../interfaces/formFields';
import QuestionSet from '../util/SampleQuestionSet';

/**
 * FieldArray is used for handling simple loops in the application. It initially displays a
 * simple ADD button, and if the user clicks it, the component will render all of it's children.
 * Clicking the ADD button again will render the children a second time, with different values in
 * the input components. This allows the user to input multiple values for a single question, used in loops.
 * @param props InputValues used in the input components
 * @returns     Our implementation of the FieldArray component
 */
export const FieldArray = (props: IInputProps) => {
  if (!props.attributes) {
    throw new Error('FieldArray MUST take attributes as a prop');
  }
  const childrenAttr = props.attributes.filter(
    attr => attr.key === 'children',
  )[0].value;
  const children = childrenAttr
    .substring(1, childrenAttr.length - 1)
    .split(',');
  return (
    <FA name={props.name}>
      {({ fields }) => (
        <div>
          {fields.map((LE, index) => (
            <Grid container key={LE}>
              {children.map(child => (
                <Grid item xs={6} key={child}>
                  <InputField
                    name={`${LE}.${QuestionSet[child].key}`}
                    placeholder={QuestionSet[child].text}
                    label={QuestionSet[child].text}
                    answers={[
                      {
                        key: 'noKey',
                        text: '',
                        nextQuestion: '',
                      },
                    ]}
                    values={props.values}
                  />
                </Grid>
              ))}
              <Button
                size="small"
                color="secondary"
                onClick={() => fields.remove(index)}
              >
                Remove
              </Button>
            </Grid>
          ))}
          <Button
            onClick={() => props.push && props.push('specs', undefined)}
            size="medium"
            color="primary"
          >
            Add
          </Button>
        </div>
      )}
    </FA>
  );
};
