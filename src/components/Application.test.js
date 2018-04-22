/* eslint-env jest, browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Application from './Application';
import store from '../redux/configureStore';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><Application /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
