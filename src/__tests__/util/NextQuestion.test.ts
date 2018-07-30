import { Stack } from 'immutable';
import { getHistoryValues, setHistory } from '../../state/historyState';
import {
  addStackToLoop,
  peekFromLoop,
  popFromLoop,
} from '../../state/loopState';

import NextQuestion from '../../util/NextQuestion';

describe('NextQuestion function', () => {
  it('should return correct nextQuestion from DE3 on A3', () => {
    expect(NextQuestion(['DE3'], { DE3: 'A3' })).toEqual(['DE9']);
  });

  it('should return correct nextQuestion from DE3 on A9', () => {
    expect(NextQuestion(['DE3'], { DE3: 'A9' })).toEqual(['DE15']);
  });

  it('should return correct nextQuestion from DE105 list with A3033', () => {
    expect(
      NextQuestion(['DE105'], {
        DE105: [
          'A3009',
          'A3012',
          'A3015',
          'A3018',
          'A3033',
          'A3021',
          'A3024',
          'A3027',
        ],
      }),
    ).toEqual(['DE534']);
  });

  it('should return correct nextQuestion from DE105 list with no A3033', () => {
    expect(
      NextQuestion(['DE105'], {
        DE105: ['A3009', 'A3012', 'A3015', 'A3018', 'A3021', 'A3024', 'A3027'],
      }),
    ).toEqual([['DE81']]);
  });

  it('should return correct nextQuestion from DE78 if in the history DE3 was A9', () => {
    setHistory({ DE3: 'A9', DE78: 'A265' });
    expect(NextQuestion(['DE78'], { DE3: 'A9', DE78: 'A265' })).toEqual([
      'DE81',
    ]);
    expect(getHistoryValues('DE3')).toEqual('A9');
  });

  it('should return correct nextQuestion from DE78 if in the history DE3 was not A9', () => {
    setHistory({ DE3: 'A6', DE78: 'A265' });
    expect(NextQuestion(['DE78'], { DE3: 'A6', DE78: 'A265' })).toEqual([
      'DE105',
    ]);
  });

  it('should return correct nextQuestion from DE112 if in the answer key is noKey', () => {
    expect(NextQuestion(['DE112'], { DE112: 'text' })).toEqual(['DE113']);
  });

  it('should handle the loopState correctly based on nextQuestion conditionals', () => {
    addStackToLoop('DE21', Stack<string>(['DE2006']));

    const resultIfOneElement = NextQuestion(['DE522'], { DE522: 'A2244' });
    expect(resultIfOneElement).toEqual(['DE2006']);

    const resultIfEmpty = NextQuestion(['DE522'], { DE522: 'A2244' });
    expect(resultIfEmpty).toEqual(['review']);
  });
});
