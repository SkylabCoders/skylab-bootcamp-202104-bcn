import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import store from './redux/store';
import HeaderLayout from './application/components/layout/Layout';

function App() {
  return (
    <Auth0Provider
      domain="blopez-devv.eu.auth0.com"
      clientId="6LYLNXO67WSQsZKKBqxW4TZPjTL9waa7"
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <HeaderLayout />
      </Provider>
    </Auth0Provider>
  );
}
export default App;
