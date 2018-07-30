import { getHistoryValues, isEqual, setHistory } from './historyState';
import {
  addStackToLoop,
  addToLoop,
  isLoopEmpty,
  peekFromLoop,
  popFromLoop,
} from './loopState';
import {
  count,
  flowContains,
  flowPeek,
  flowPop,
  flowPush,
  flowReverse,
} from './questionFlowState';

/**
 * Map of the state functions from their state implementations to this shared interface to dynamically call
 */
export const map = {
  flow: {
    contains: flowContains,
    peek: flowPeek,
    pop: flowPop,
    push: flowPush,
    count,
    reverseArray: flowReverse,
  },
  loop: {
    isEmpty: isLoopEmpty,
    peek: peekFromLoop,
    pop: popFromLoop,
    push: addStackToLoop,
    pushOne: addToLoop,
  },
  // tslint:disable-next-line:object-literal-key-quotes
  history: { '==': isEqual, get: getHistoryValues, set: setHistory },
};
