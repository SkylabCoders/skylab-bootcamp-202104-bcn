import React from 'react';
import {
  BrowserRouter, Route, Switch, Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard';
import HeroDetail from './components/HeroDetail';
import NotFound from './components/NotFound/index';
import store from './redux/stores';
import HeroList from './components/HeroList';
import './styles.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <h1>Tour Of Heroes</h1>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/list">Heroes</Link>
        </nav>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/list" exact component={HeroList} />
          <Route path="/detail/:heroId" component={HeroDetail} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
