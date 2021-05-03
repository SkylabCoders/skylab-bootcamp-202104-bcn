import React from 'react';
import {
  BrowserRouter, Switch // Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
<<<<<<< HEAD
import Header from './components/Header';
// import Dashboard from './components/Dashboard';
// import GameMode from './components/GameMode';
=======
// import Header from './components/Header';
// import Dashboard from './components/Dashboard';
import GameMode from './components/GameMode';
>>>>>>> deda3a7920402e3c94a43a13cf2f520a79ae98e8
// import WelcomeRules from './components/WelcomeRules';
// import Game from './components/Game';
// import Login from './components/Login';
// import Ranking from './components/Ranking';

function App() {
  return (
    <Provider store={store}>
<<<<<<< HEAD
=======
      {/* <Header />
      <Dashboard /> */}
>>>>>>> deda3a7920402e3c94a43a13cf2f520a79ae98e8
      <BrowserRouter>
        <Header />
        {/* <Dashboard /> */}
        <Switch>
<<<<<<< HEAD
          {/* <Route path="/" exact component={WelcomeRules} />
=======
          {/* <Route path="/" exact component={WelcomeRules} /> */}
>>>>>>> deda3a7920402e3c94a43a13cf2f520a79ae98e8
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
