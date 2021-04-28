import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Dashboard from './Components/Dashboard';
import NotFound from './Components/NotFound';
import './styles.css';
import HeroDetail from './Components/HeroDetail';
import store from './redux/stores';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <h1>Tour of heroes</h1>
          <nav>
            <Link to="/">Dashboard</Link>
            <a href=" ">Heroes</a>
          </nav>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/detail/:heroId" component={HeroDetail} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
