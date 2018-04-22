/* eslint-env jest, browser */
import React from 'react';
import ReactDOM from 'react-dom';
import CharacterScreen from './CharacterScreen';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CharacterScreen />, div);
  ReactDOM.unmountComponentAtNode(div);
});
