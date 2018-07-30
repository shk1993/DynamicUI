import { Stack } from 'immutable';
import {
  addStackToLoop,
  addToLoop,
  isLoopEmpty,
  peekFromLoop,
  popFromLoop,
} from '../../state/loopState';

describe('Testing loop state', () => {
  it('should create a new element with the given Id and value', () => {
    addToLoop('DE12', 'A1');
    expect(peekFromLoop('DE12')).toEqual('A1');
    addToLoop('DE12', 'A2');
    expect(peekFromLoop('DE12')).toEqual('A2');
    popFromLoop('DE12');
    expect(peekFromLoop('DE12')).toEqual('A1');
    popFromLoop('DE12');
  });

  it('should return true if stack is empty for an id', () => {
    let returnVal = isLoopEmpty('random');
    expect(returnVal).toEqual(true);
    addToLoop('DE12', '123');
    returnVal = isLoopEmpty('DE12');
    expect(returnVal).toEqual(false);
    popFromLoop('DE12');
    returnVal = isLoopEmpty('DE12');
    expect(returnVal).toEqual(true);
  });

  it('should push, pop and peek from individual stacks as expected', () => {
    addToLoop('DE12', 'A1');
    addToLoop('DE12', 'A2');
    addToLoop('DE12', 'A3');
    addToLoop('DE13', 'A4');
    addToLoop('DE13', 'A5');
    expect(peekFromLoop('DE13')).toEqual('A5');
    expect(peekFromLoop('DE12')).toEqual('A3');
    popFromLoop('DE12');
    popFromLoop('DE12');
    popFromLoop('DE12');
    popFromLoop('DE13');
    expect(peekFromLoop('DE13')).toEqual('A4');
    const returnVal = isLoopEmpty('DE12');
    expect(returnVal).toEqual(true);
    popFromLoop('DE13');
  });

  it('should be able to push an entire stack to the state', () => {
    const stack = Stack<string>(['DE121', 'DE443', 'STOP', 'moreLE']);
    addStackToLoop('key', stack);
    expect(peekFromLoop('key')).toEqual('DE121');
  });
});
