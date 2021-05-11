import React from 'react';
import './App.css';
import './styles.css';
import {
  BrowserRouter, Route, Switch, Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard';
import HeroDetail from './components/HeroDetail';
import NotFound from './components/NotFound';
import configureStore from './redux/stores';
import HeroList from './components/HeroList';

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
            <Route exact path="/" component={Dashboard} />
            <Route path="/detail/:heroId" component={HeroDetail} />
            <Route path="/heroes" component={HeroList} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
