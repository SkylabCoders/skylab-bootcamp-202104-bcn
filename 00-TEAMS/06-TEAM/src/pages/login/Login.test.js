/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from './test.utils';
import LoginUser from './Login';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Footer Component', () => {
  test('should contain text Login', () => {
    render(<LoginUser />, container);
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });
});
