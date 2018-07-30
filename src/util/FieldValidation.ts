import { IAttribute } from '../interfaces/attributes';
import { IValidator } from '../interfaces/validator';

/**
 * This function returns a function that reduces all validators.
 * @param validators   array of validator functions
 * @returns A function that reduces the result of array of validtors
 */
const composeValidators = (...validators: IValidator[]) => (
  value: string | undefined,
) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

/**
 * This function filters validation key from the attributes.
 * It returns the regex validator function if validation attribute is present or returns undefined
 * @param attributes   Attributes on the render field
 * @returns       A function that validates field value matches the regex value or undefined
 */
const getRegexValidator = (attributes: IAttribute[]) => {
  const validationAttr = attributes.filter(
    (attr: IAttribute) => attr.key === 'validation',
  );
  if (
    validationAttr &&
    validationAttr.length !== 0 &&
    validationAttr[0].value
  ) {
    const regex = new RegExp(validationAttr[0].value);
    return (value: string | undefined) =>
      !value || regex.test(value) ? undefined : 'Invalid Input';
  }
  return undefined;
};

/**
 * This function filters required key from the attributes.
 * It returns the required validator function required attribute value is true or returns undefined
 * @param attributes   Attributes on the render field
 * @returns       A function that validates field value is required or undefined
 */
const getRequiredValidator = (attributes: IAttribute[]) => {
  const reqAttr = attributes.filter(
    (attr: IAttribute) => attr.key === 'required',
  );
  if (
    reqAttr &&
    reqAttr.length !== 0 &&
    reqAttr[0].value &&
    reqAttr[0].value === 'true'
  ) {
    return (value: string | undefined) => (value ? undefined : 'Required');
  }
  return undefined;
};

/**
 * This function gets the regex validator, required validator based on the attributes and returns a reduced combimned function.
 * @param attributes   Attributes on the render field
 * @returns       A function that reduces errors on all validators
 */
const composeAllValidators = (attributes: IAttribute[]) => {
  let validatorFunctions: IValidator[] = [];
  if (attributes) {
    const regexFunc = getRegexValidator(attributes);
    const reqFunc = getRequiredValidator(attributes);
    if (regexFunc) {
      validatorFunctions = validatorFunctions.concat([regexFunc]);
    }
    if (reqFunc) {
      validatorFunctions = validatorFunctions.concat([reqFunc]);
    }
  }
  return composeValidators(...validatorFunctions);
};

/**
 * This function is the function to get the validators on the field. It returns a function that reduces errors on all validators.
 * @param attributes   Attributes on the render field
 * @returns       A function that reduces errors on all validators
 */
export const getValidators = (attributes: IAttribute[] | undefined) => {
  return attributes ? composeAllValidators(attributes) : undefined;
};
