/* eslint-env jest, browser */
import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from './Routing'; // eslint-disable-line import/no-unresolved, import/extensions
import WeaponScreen from './WeaponScreen';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><WeaponScreen /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
