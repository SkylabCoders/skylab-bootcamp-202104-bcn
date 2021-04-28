import React from 'react';
import './styles.css';
import './App.css';
import {
  BrowserRouter, Route, Switch, Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import NotFound from './components/NotFound';
import Dashboard from './components/Dashboard/index';
import HeroDetail from './components/HeroDetail';
import store from './redux/stores/index';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <h1>Tour of Heroes</h1>
          <nav>
            <Link to="/">Dashbooard</Link>
            <Link to="/detail">Details</Link>
            <Link to="404">404</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/detail/:heroId" component={HeroDetail} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
