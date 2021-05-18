/* eslint-disable global-require */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import('./index');

jest.mock('react-dom', () => ({ render: jest.fn() }));

test('Index renders with App and root div', () => {
  const root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);

  require('./index');

  expect(ReactDOM.render).toHaveBeenCalledWith(<App />, root);
});
