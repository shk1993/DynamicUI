import * as React from 'react';
import { render } from 'react-testing-library';
import Review from '../../pages/Review';

describe('Review Page', () => {
  it('should render the review page and match the snapshot', () => {
    const { container } = render(
      <Review
        currentQuestion="review"
        values={{
          DE30: '06/05/2018',
          DE3: 'A9',
          DE15: 'awfeasdf',
          DE78: 'A252',
          DE81: 'A297',
          numOfLE: 'NO',
          DE21: ['A41'],
          DE2006: ['A1972', 'A1965'],
          DE522: 'A2248',
          DE2000: ['A2088', 'A2095'],
          DE2003: 'A1965',
        }}
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
