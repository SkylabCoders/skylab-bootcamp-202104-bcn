import React from 'react';
import {
  BrowserRouter, Route, Switch, Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import './styles.css';
import './App.css';
import HeroDetail from './components/HeroDetail';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import HeroesList from './components/List';
import store from './redux/stores/index';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <header>
          <h1>Tour of Heroes</h1>
          <nav>
            <Link to="/">Dashboard</Link>
            <Link to="/list">Heroes</Link>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/list" component={HeroesList} />
          <Route path="/detail/:heroId" component={HeroDetail} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
