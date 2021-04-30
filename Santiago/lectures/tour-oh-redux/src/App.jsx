import React from 'react';
import {
  Switch, Route, BrowserRouter, Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard';
import HeroDetails from './components/HeroDetails';
import NotFound from './components/NotFound';
import HeroList from './components/HeroList';
import store from './redux/stores/index';
import './index.css';
import './App.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <h1>Tour of heroes</h1>
          <nav type="button">
            <Link to="/">Dashboard</Link>
            <Link to="/list">Hero list</Link>
          </nav>

          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/detail/:heroId" component={HeroDetails} />
            <Route path="/list" component={HeroList} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
