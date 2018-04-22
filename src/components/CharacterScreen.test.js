/* eslint-env jest, browser */
import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from './Routing'; // eslint-disable-line import/no-unresolved, import/extensions
import CharacterScreen from './CharacterScreen';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><CharacterScreen /></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
