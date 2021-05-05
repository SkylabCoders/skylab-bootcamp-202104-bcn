/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Login from './index';
import { render, screen } from './test-utils';

describe('Login Component', () => {
  test('should contain pepe', () => {
    render(<Login />, {
      initialState: {
        auth: {
          isLoggedIn: true,
          user: { given_name: 'pepe' }
        }
      }
    });

    expect(screen.getByText(/pepe/i)).toBeInTheDocument();
  });
  test('should contain stranger', () => {
    render(<Login />, {
      initialState: {
        auth: {
          isLoggedIn: false
        }
      }
    });

    expect(screen.getByText(/Please login/i)).toBeInTheDocument();
  });
});
