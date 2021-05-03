import React from 'react';
import {
  BrowserRouter, Switch, Route // Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
// import Dashboard from './components/Dashboard';
// import GameMode from './components/GameMode';
// import Header from './components/Header';
import Dashboard from './components/Dashboard/index';
import GameMode from './components/GameMode';
// import WelcomeRules from './components/WelcomeRules';
// import Game from './components/Game';
// import Login from './components/Login';
// import Ranking from './components/Ranking';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
<<<<<<< HEAD
        {/* <Header /> */}
        <Dashboard />
=======
        <Header />
        {/* <Dashboard /> */}
>>>>>>> 6457b88cb8111a9ef156819d249a8f0bab83a0b5
        <Switch>
          {/* <Route path="/" exact component={WelcomeRules} />
          {/* <Route path="/" exact component={WelcomeRules} /> */}
          <Route path="/game-mode" exact component={GameMode} />
          {/* <Route path="/play" exact component={Game} />
          <Route path="/log-in" exact component={Login} />
          <Route path="/ranking" exact component={Ranking} /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
