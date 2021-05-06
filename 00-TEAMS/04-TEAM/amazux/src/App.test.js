/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import App from './App';
import { render, screen } from './test-utils';

describe('<App/>', () => {
  test('should return a main section, with className main', () => {
    const { container } = render(<App />, {
      initialState: {
        error: {}
      }
    });
    const mainElement = container.getElementsByTagName('main')[0];
    expect(mainElement.className).toMatch('main');
  });

  test('should show an error message', () => {
    render(<App />, {
      initialState: {
        error: { message: 'Error message' }
      }
    });
    expect(screen.getByText(/Error message/i)).toBeInTheDocument();
  });
});
