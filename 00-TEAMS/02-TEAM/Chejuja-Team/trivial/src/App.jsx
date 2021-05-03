import React from 'react';
import {
  BrowserRouter, Switch, Route // Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import Dashboard from './components/Dashboard/index';
import GameMode from './components/GameMode';
import './App.css';
import WelcomeRules from './components/WelcomeRules';
import Game from './components/Game';
// import Login from './components/Login';
// import Ranking from './components/Ranking';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Dashboard />
        <Switch>
          <div className="main-window">
            <Route path="/" exact component={WelcomeRules} />
            <Route path="/game-mode" exact component={GameMode} />
            <Route path="/play" exact component={Game} />
            {/* <Route path="/log-in" exact component={Login} />
          <Route path="/ranking" exact component={Ranking} /> */}
          </div>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
