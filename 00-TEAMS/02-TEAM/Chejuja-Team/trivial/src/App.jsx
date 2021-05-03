import React from 'react';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';
import Provider from 'redux'

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Dashboard />
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={WelcomeRules}>
        <Route path="/game-mode" exact component={GameMode}>
        <Route path="/play" exact component={Game}>
        <Route path="/log-in" exact component={Login}>
        <Route path="/ranking" exact component={Ranking}>
      </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
