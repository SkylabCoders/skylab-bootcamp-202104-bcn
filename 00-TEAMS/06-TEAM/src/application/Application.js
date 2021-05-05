import React from 'react';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import store from './store';
import HeaderLayout from './components/layout/Layout';
import GlobalApp from './styles/GlobalStyles';

function App() {
  return (
    <GlobalApp>
      <Auth0Provider
        domain="blopez-devv.eu.auth0.com"
        clientId="6LYLNXO67WSQsZKKBqxW4TZPjTL9waa7"
        redirectUri={window.location.origin}
      >
        <Provider store={store}>
          <HeaderLayout />
        </Provider>
      </Auth0Provider>
    </GlobalApp>
  );
}

export default App;
