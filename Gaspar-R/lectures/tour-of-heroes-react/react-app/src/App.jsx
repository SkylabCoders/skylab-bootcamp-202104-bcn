import React from 'react';
import './style.css';
import './App.css';
import {
  BrowserRouter, Route, Switch, Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashborad';
import NotFound from './components/NotFound';
import HeroDetail from './components/HeroDetail';
import store from './redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <h1> Tour of Heroes</h1>
          <nav>
            <Link to="/components/Dashboard">Dashboard</Link>
            <Link to="/components/HeroDetail">Details </Link>
            <Link to="/components/404">404 </Link>
          </nav>
          <Switch>
            <Route path="/components/Dashboard" exact component={Dashboard} />
            <Route path="/detail/:heroId" exact component={HeroDetail} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
