import React from 'react';
import './styles.css';
import './App.css';
import {
  BrowserRouter, Route, Switch, Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard';
import HeroDetail from './components/HeroDetail';
import NotFound from './components/NotFound';
import store from './redux/stores';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <h1>Tour of heroes</h1>
          <nav>
            <Link to="/">Dashboard</Link>
            <Link to="/detail">Details</Link>
            <Link to="/404">404</Link>
          </nav>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/detail/:heroId" component={HeroDetail} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
