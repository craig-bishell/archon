/* eslint-env jest, browser */
import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from './Routing'; // eslint-disable-line import/no-unresolved, import/extensions
import HomeScreen from './HomeScreen';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><HomeScreen /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
