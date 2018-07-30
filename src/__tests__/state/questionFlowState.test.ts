import { map } from '../../state/stateHandler';

describe('testing question flow state stack and utility functions ', () => {
  it('should push an item to the front of the stack', () => {
    // starting flow is [['DE30']]
    map.flow.push(['DE12']);
    expect(map.flow.count()).toEqual(2);
    expect(map.flow.contains('DE30')).toBeTruthy();
    expect(map.flow.contains('DE12')).toBeTruthy();
  });
  it('should return a refernce to the value at the top of the stack ', () => {
    // starting flow is [['DE12'], ['DE30']]
    const value = map.flow.peek();
    expect(value).toEqual(['DE12']);
  });
  it('should return a stack with the top value removed ', () => {
    // starting flow is [['DE12'], ['DE30']]
    map.flow.pop();
    expect(map.flow.count()).toEqual(1);
    expect(map.flow.contains('DE30')).toBeTruthy();
    expect(map.flow.contains('DE12')).toBeFalsy();
  });
  it('flowContains should check if a question is already in the flow state ', () => {
    // starting flow is [['DE30']]
    map.flow.push(['DE12', 'DE23']);
    map.flow.push(['DE11', 'DE5']);
    map.flow.push(['DE10', 'DE9']);
    expect(map.flow.contains('DE5')).toBe(true);
    expect(map.flow.contains('DE10')).toBe(true);
    expect(map.flow.contains('DE29')).toBe(false);
  });
  it('should correctly return the reversed array from stack', () => {
    // starting flow is [['DE10', 'DE9'], ['DE11', 'DE5'], ['DE12', 'DE23'], ['DE30']]
    expect(map.flow.reverseArray()).toEqual([
      ['DE30'],
      ['DE12', 'DE23'],
      ['DE11', 'DE5'],
      ['DE10', 'DE9'],
    ]);
  });
});
