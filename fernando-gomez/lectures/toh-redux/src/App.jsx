import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import NotFound from './Components/NotFound';
import './styles.css';
import HeroDetail from './Components/HeroDetail';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
