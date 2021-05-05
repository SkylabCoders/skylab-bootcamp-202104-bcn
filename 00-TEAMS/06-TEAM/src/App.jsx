import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import store from './redux/store';
<<<<<<< HEAD
import Movies from './common/components/movies';
import slideShow from './common/components/slideShow/slideShow';
=======
import HeaderLayout from './application/components/layout/Layout';
>>>>>>> 116aa0102078dfabbb4b7c9c95f6a9234804e664

function App() {
  return (
    <Auth0Provider
      domain="blopez-devv.eu.auth0.com"
      clientId="6LYLNXO67WSQsZKKBqxW4TZPjTL9waa7"
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
<<<<<<< HEAD
        <Router>
          <header>
            <h1>HELLO</h1>
            <Link to="/countries">Countries</Link>
          </header>
          <main>
            <Switch>
              <Route path="/" component={slideShow} />
              <Route path="/countries" component={Movies} />
            </Switch>
          </main>
        </Router>
=======
        <HeaderLayout />
>>>>>>> 116aa0102078dfabbb4b7c9c95f6a9234804e664
      </Provider>
    </Auth0Provider>
  );
}

export default App;
