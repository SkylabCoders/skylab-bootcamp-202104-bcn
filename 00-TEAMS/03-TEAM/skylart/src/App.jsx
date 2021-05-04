import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import configureStore from './redux/store';
import Header from './components/Common/Header';
import Home from './components/Home';
import Category from './components/Category';
import Detail from './components/Detail';
import Favorites from './components/Favorites';
import LogIn from './components/LogIn';
import './styles/styles.scss';

function App() {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_DOMAIN}
      clientId={process.env.REACT_APP_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <Provider store={configureStore}>
        <BrowserRouter>
          <Header />
          <LogIn />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/category" component={Category} />
            <Route path="/detail/:artworkId" component={Detail} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/login" component={LogIn} />
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </Provider>
    </Auth0Provider>
  );
}

export default App;
