import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import App from './App';
import './index.css';

// TODO Move credentiales to .env
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="fredyzz.eu.auth0.com"
      clientId="G7hYqsbR0ORjzsSs2IHUiZ5tWd91QfRS"
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
