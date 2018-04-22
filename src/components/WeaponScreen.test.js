/* eslint-env jest, browser */
import React from 'react';
import ReactDOM from 'react-dom';
import WeaponScreen from './WeaponScreen';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeaponScreen />, div);
  ReactDOM.unmountComponentAtNode(div);
});
