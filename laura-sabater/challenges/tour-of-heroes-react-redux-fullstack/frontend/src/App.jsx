import React from 'react';
import {
  BrowserRouter, Route, Switch, Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard';
import HeroesList from './components/HeroesList';
import HeroDetail from './components/HeroDetail';
import NotFound from './components/NotFound';
import configureStore from './redux/stores';
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
            <Link to="/heroes">Heroes</Link>
          </nav>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/heroes" component={HeroesList} />
            <Route path="/detail/:heroId" component={HeroDetail} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>

    </>
  );
}

export default App;
