/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import { render } from '../TestUtils';
import Login from '../../Components/Login';
import configureStore from '../../redux/store/configureStore';

describe('Given a Login component', () => {
  test('Should print Login section with a loggedOutTemplate when loged out', () => {
    const { container } = render(
      <Auth0Provider
        domain={process.env.REACT_APP_DOMAIN}
        clientId={process.env.REACT_APP_CLIENT_ID}
        redirectUri={window.location.origin}
      >
        <Provider store={configureStore()}>
          <Login />
        </Provider>
      </Auth0Provider>, {
        initialState: {
          auth: {
            isLoggedIn: false
          }
        }
      }
    );

    const loginLogOutTitle = container.querySelector('.auth__title');
    expect(loginLogOutTitle.textContent).toBe('Sacul spacelines');
  });
});

describe('Given a Login component', () => {
  test('Should print Choose faction section when loged in', () => {
    const { container } = render(<Login />, {
      initialState: {
        auth: {
          isLoggedIn: true
        }
      }
    });
    const loginLogInTitle = container.querySelector('.logout-button');
    expect(loginLogInTitle.textContent).toBe('Log out');
  });
});

describe('Given a Login component', () => {
  test('When handleAcceptTherms is called a setThermsAccepted should have been called', () => {
    Login.handleAcceptTherms = jest.fn();
    Login.setThermsAccepted = jest.fn();

    Login.handleAcceptTherms();

    expect(Login.setThermsAccepted).toHaveBeenCalled();
  });
});
