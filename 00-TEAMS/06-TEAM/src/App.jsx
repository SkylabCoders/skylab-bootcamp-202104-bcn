import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import store from './redux/store';
import HeaderLayout from './application/components/layout/Layout';

function App() {
  return (
    <>
      <Auth0Provider
        domain={process.env.REACT_APP_DOMAIN}
        clientId={process.env.REACT_APP_CLIENT_ID}
        redirectUri={window.location.origin}
      />
      <div className="App">
        <Provider store={store}>
          <HeaderLayout />
        </Provider>
      </div>
      <Auth0Provider />
    </>
  );
}

export default App;
