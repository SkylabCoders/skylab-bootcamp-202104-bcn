import React from 'react';
import {
  Switch, Route, BrowserRouter, Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import Dashboard from './components/Dashboard';
import HeroDetails from './components/HeroDetails';
import NotFound from './components/NotFound';
import HeroList from './components/HeroList';
import configureStore from './redux/stores/index';
import './index.css';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_DOMAIN}
      clientId={process.env.REACT_APP_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <Provider store={configureStore()}>
        <BrowserRouter>
          <h1>Tour of heroes</h1>
          <nav type="button">
            <Link to="/">Dashboard</Link>
            <Link to="/list">Hero list</Link>
          </nav>
          <Login />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/detail/:heroId" component={HeroDetails} />
            <Route path="/list" component={HeroList} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </Auth0Provider>

  );
}

export default App;
