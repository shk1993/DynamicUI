import QuestionSet from '../util/SampleQuestionSet';

declare global {
  // tslint:disable-next-line:interface-name
  interface Window {
    QuestionSet: typeof QuestionSet;
    ShowQuestionSet: () => void;
  }
}

/**
 * Appends the entire QuestionSet JSON to document.body
 */
const showQuestionSet = () => {
  const pre = document.createElement('pre');
  pre.setAttribute('id', 'questionset');
  pre.innerHTML = JSON.stringify(QuestionSet, undefined, 2);
  document.body.appendChild(pre);
};

/**
 * Exports the additional components to the global window variable
 */
export default () => {
  window.QuestionSet = window.QuestionSet || QuestionSet;
  window.ShowQuestionSet = window.ShowQuestionSet || showQuestionSet;
};
