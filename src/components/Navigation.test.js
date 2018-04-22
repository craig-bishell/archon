/* eslint-env jest, browser */
import React from 'react';
import ReactDOM from 'react-dom';

import routes from '../constants/routes';
import { Router } from './Routing'; // eslint-disable-line import/no-unresolved, import/extensions
import Navigation from './Navigation';

it('renders all routes without crashing', () => {
  Object.keys(routes)
    .forEach((route) => {
      const div = document.createElement('div');
      ReactDOM.render(<Router><Navigation current={route} /></Router>, div);
      ReactDOM.unmountComponentAtNode(div);
    });
});
