/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import Header from './index';
import { render, screen } from '../../utils/test-utils';

let container = null;
beforeEach(() => {
  jest.resetModules();
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Header Component', () => {
  test('should contain Global', () => {
    render(<Header />, container);
    expect(screen.getByText(/Global/i)).toBeInTheDocument();
  });
});

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({
    isAuthenticated: false
  })
}));

describe('Header Component', () => {
  test('should contain Login when the user is not authenticated', () => {
    render(<Header />,
      container);
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });
});
