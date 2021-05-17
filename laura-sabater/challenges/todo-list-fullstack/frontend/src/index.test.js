/* eslint-disable global-require */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

jest.mock('react-dom', () => ({ render: jest.fn() }));

describe('Given render function', () => {
  test('renders with App and root div', () => {
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);
    require('./index');
    expect(ReactDOM.render).toHaveBeenCalledWith(
      <React.StrictMode>
        <App />
      </React.StrictMode>, root,
    );
  });
});
