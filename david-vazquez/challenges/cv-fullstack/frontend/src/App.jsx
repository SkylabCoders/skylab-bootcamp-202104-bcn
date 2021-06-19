import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import store from './redux/store/store';
import Header from './components/Header';
import Resume from './components/Resume';
import './App.css';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <Provider store={store()}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
