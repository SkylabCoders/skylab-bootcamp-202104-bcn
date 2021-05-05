import React from 'react';
import {
  BrowserRouter, Switch, Route // Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import store from './redux/store';
import Header from './components/Header';
import Dashboard from './components/Dashboard/index';
import GameMode from './components/GameMode';
import './App.css';
import WelcomeRules from './components/WelcomeRules';
import Game from './components/Game';
<<<<<<< HEAD
import Login from './components/Login';
=======
import AboutUs from './components/About-us/index';
// import Login from './components/Login';
>>>>>>> proyecto/chejuja
import Ranking from './components/Ranking/index';

// TODO Mode credentials to .env
function App() {
  return (
<<<<<<< HEAD
    <Auth0Provider
      domain={process.env.REACT_APP_DOMAIN}
      clientId={process.env.REACT_APP_CLIENTE_ID}
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Dashboard />
          <Switch>
            <div className="main-window">
              <Route path="/" exact component={WelcomeRules} />
              <Route path="/game-mode" exact component={GameMode} />
              <Route path="/play" exact component={Game} />
              <Route path="/log-in" exact component={Login} />
              <Route path="/ranking" exact component={Ranking} />
            </div>
          </Switch>
        </BrowserRouter>
      </Provider>
    </Auth0Provider>
=======
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Dashboard />
        <Switch>
          <div className="main-window">
            <Route path="/" exact component={WelcomeRules} />
            <Route path="/game-mode" exact component={GameMode} />
            <Route path="/play" exact component={Game} />
            {/* <Route path="/log-in" exact component={Login} /> */}
            <Route path="/ranking" exact component={Ranking} />
            <Route path="/info" exact component={AboutUs} />
          </div>
        </Switch>
      </BrowserRouter>
    </Provider>
>>>>>>> proyecto/chejuja
  );
}

export default App;
