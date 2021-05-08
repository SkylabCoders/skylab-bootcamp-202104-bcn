/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Login from './index';
import { render, screen } from '../../utils/test-utils';

describe('Login Component', () => {
  test('render should contain HolaQTal', () => {
    render(<Login />, {
      initialState: {
        auth: {
          isLoggedIn: true,
          user: { name: 'HolaQTal' },
        },
      },
    });

    expect(screen.getByText(/HolaQTal/i)).toBeInTheDocument();
  });
  test('should contain Log In', () => {
    render(<Login />, {
      initialState: {
        auth: {
          isLoggedIn: false,
        },
      },
    });

    expect(screen.getByText(/Log In/i)).toBeInTheDocument();
  });
});
