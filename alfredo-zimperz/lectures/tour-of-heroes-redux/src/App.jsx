import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/stores';
import Dashboard from './components/Dashboard';
import Heroes from './components/Heroes';
import NotFound from './components/NotFound';
import HeroDetail from './components/HeroDetail';
import './styles.css';
import './App.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <h1>Tour of Heroes</h1>
          <nav>
            <Link to="/">Dashboard</Link>
            <Link to="/heroes">Heroes</Link>
          </nav>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/heroes" exact component={Heroes} />
            <Route path="/heroes/:heroId" component={HeroDetail} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>

    </>
  );
}

export default App;
