/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './index';
import {
  render
} from '../../test-utils';
import { signIn } from '../../redux/actions/actionCreators';

jest.mock('@auth0/auth0-react');
jest.mock('../../redux/actions/actionCreators');

const user = {
  email: 'johndoe@me.com',
  email_verified: true,
  sub: 'google-oauth2|12345678901234'
};

describe('Login Component', () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      user,
      logout: jest.fn(),
      loginWithRedirect: jest.fn()
    });
    signIn.mockReturnValue(jest.fn);
  });

  test('should call signIn function', () => {
    render(<Login />, {
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
    expect(signIn).toHaveBeenCalled();
  });
});
