import { Stack } from 'immutable';

/** the loop state object. This object is an object of key-stacks where key is the questionID the stack is associated with */
let loopStateObject = {};

/**
 * The push function will push the value passed in to the stack associated with the questionID in the loop state object
 * @param id QuestionID to push into
 * @param value value to push into the stack of the questionID
 */
const push = (id: string, value: string) => {
  loopStateObject[id] = loopStateObject[id].push(value);
};

// TODO: Do we need this function? I added the addStackToLoop function and I'm not sure
// if we need this one or not
/**
 * The addToLoop function will push the value passed in to the stack by calling the push function
 * @param id    QuestionID to push into
 * @param value value to push into the stack of the questionID
 */
export const addToLoop = (id: string, value: string) => {
  if (id in loopStateObject) {
    push(id, value);
  } else {
    const newVal = {};
    newVal[id] = Stack<string>([value]);
    loopStateObject = { ...loopStateObject, ...newVal };
  }
};

/**
 * Add to the loopState object the id-stack object passed in. This will any already assigned id in the loop state object
 * @param id    QuestionID to push into
 * @param stack stack to add to the loop state by assigning the questionID to the passed in stack
 */
export const addStackToLoop = (id: string, stack: Stack<string>) => {
  const newVal = {};
  newVal[id] = Stack<string>(stack);
  loopStateObject = { ...loopStateObject, ...newVal };
};

/**
 * checks the loop state object to determine if the stack associated with the questionID is empty
 * @param id QuestionID to determine if the stack is empty or not
 * @returns  true if either the stack associated with the questionID is empty, or doesn't exist. False otherwise
 */
export const isLoopEmpty = (id: string) => {
  if (!(id in loopStateObject) || loopStateObject[id].size === 0) {
    return true;
  } else {
    return false;
  }
};

/**
 * Pops an element off of the loop state object from the questionID passed in as a parameter
 * @param id QuestionID to pop from
 */
export const popFromLoop = (id: string) => {
  loopStateObject[id] = loopStateObject[id].pop();
};

/**
 * Returns the element at the top of the stack associated with the QuestionID received as a parameter
 * @param id QuestionID to peek from
 * @returns  Element at the top of the stack at id
 */
export const peekFromLoop = (id: string): string => loopStateObject[id].peek();
