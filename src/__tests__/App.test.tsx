import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '../App';
import { silenceConsoleErrors } from '../util/testingUtilityFunctions';

beforeAll(() => silenceConsoleErrors());

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
