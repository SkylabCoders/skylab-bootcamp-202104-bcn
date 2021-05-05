/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './index';
import {
  render, screen, fireEvent
} from './test-utils';

jest.mock('@auth0/auth0-react');

const user = {
  email: 'johndoe@me.com',
  email_verified: true,
  sub: 'google-oauth2|12345678901234'
};

describe('Login Component', () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      isAuthenticated: false,
      user,
      logout: jest.fn(),
      loginWithRedirect: jest.fn()
    });
  });

  test('should contain Welcome', () => {
    render(<Login />, {
      initialState: {
        auth: {
          isLoggedIn: true,
          user: {
            given_name: 'Fredy',
            picture: './../images/amazon_logo_RGB.jpg'
          }
        }
      }
    });

    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
  });

  test('should contain Please login', () => {
    render(<Login />, {
      initialState: {
        auth: {
          isLoggedIn: false
        }
      }
    });

    expect(screen.getByText(/Please login/i)).toBeInTheDocument();
  });
  test('...', () => {
    const { getAllByRole } = render(<Login />, {
      initialState: {
        auth: {
          isLoggedIn: true,
          user: {
            given_name: 'asdasd',
            picture: 'asdasd'
          }
        }
      }
    });

    // const btn = ----
    //    fireEvent.click(btn);

    const { logout } = useAuth0();
    const btn = getAllByRole('button')[0];
    fireEvent.click(btn);
    expect(logout).toHaveBeenCalled();
  });
});
