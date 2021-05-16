import React from 'react';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Study from './components/Study';
import Jobs from './components/Jobs';
import Language from './components/Language';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Dashboard />
        <Switch>
          <Route exact path="/study" component={Study} />
          <Route exact path="/works" component={Jobs} />
          <Route exact path="/others" component={Language} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
