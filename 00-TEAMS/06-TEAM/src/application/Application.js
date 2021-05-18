import React from 'react';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import { createStore } from './store';
import HeaderLayout from './components/layout/Layout';
import GlobalApp from './styles/GlobalStyles';

function App() {
  return (
    <GlobalApp>
      <Auth0Provider
        domain="dev-skylab.eu.auth0.com"
        clientId="NtRILJGUuayWtHP9G8fFFDWgTFNMubaY"
        redirectUri={window.location.origin}
      >
        <Provider store={createStore()}>
          <HeaderLayout />
        </Provider>
      </Auth0Provider>
    </GlobalApp>
  );
}

export default App;
