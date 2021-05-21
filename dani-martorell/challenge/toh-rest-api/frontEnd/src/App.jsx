import React from 'react';
import configureStore from './redux/stores';
import {
  BrowserRouter, Route, Switch, Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard';
import HeroesList from './components/Heroes';
import HeroDetail from './components/HeroDetail';
import NotFound from './components/NotFound';
import './styles.css';
import './App.css';

function App() {
  return (
    <>
      <Provider store={configureStore()}>
        <BrowserRouter>
          <h1>Tour of Heroes</h1>
          <nav>
            <Link to="/">Dashboard</Link>
            <Link to="/Heroes">Heroes</Link>
          </nav>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/Heroes" component={HeroesList} />
            <Route path="/detail/:heroId" component={HeroDetail} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>

    </>
  );
}

export default App;