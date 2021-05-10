import React from 'react';
import './styles.css';
import './App.css';
import {
  BrowserRouter, Route, Switch, Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Dashboard from './componentes/Dashboard';
import HeroDetail from './componentes/HeroDetail/Index';
import NotFound from './componentes/NotFound';
import configureStore from './redux/stores/index';

function App() {
  return (
    <>
      <Provider store={configureStore()}>
        <BrowserRouter>
          <h1>Tour of Heroes</h1>
          <nav>
            <Link to="/">Dashboard</Link>
            <Link to="/detail">Heroes</Link>
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
