import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Dashboard from './Components/Dashboard';
import NotFound from './Components/NotFound';
import './styles.css';
import HeroDetail from './Components/HeroDetail';
import Heroes from './Components/Heroes';
import store from './redux/stores';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <h1>Tour of heroes</h1>
          <nav>
            <Link to="/">Dashboard</Link>
            <Link to="/heroes/">Heroes</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/detail/:heroId" component={HeroDetail} />
            <Route exact path="/heroes/" component={Heroes} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
