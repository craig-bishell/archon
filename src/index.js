/* eslint-env browser */
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import store from './redux/configureStore';
import Application from './components/Application';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
