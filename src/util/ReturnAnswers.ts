import { IAnswer } from '../interfaces/answers';
import { IRenderComponent } from '../interfaces/parseRender';

export default (
  parsedRender: IRenderComponent[],
  flattenedAnswers: IAnswer[],
) => {
  let commonAnswers: IAnswer[] = [];
  /* tslint:disable:no-unused-expression */
  parsedRender &&
    parsedRender.forEach(comp => {
      if (!comp.attributes) {
        return;
      }
      const attrWithAns = comp.attributes.filter(object => {
        return object.key === 'answers';
      });
      const attrValues = attrWithAns.map(att => JSON.parse(att.value));
      commonAnswers = flattenedAnswers.filter(ans => {
        return attrValues.length > 0 && attrValues[0].indexOf(ans.key) > -1;
      });
    });
  /* tslint:enable */
  return commonAnswers.length !== 0 ? commonAnswers : flattenedAnswers;
};
