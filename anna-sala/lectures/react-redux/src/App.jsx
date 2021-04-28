import React from 'react';
import './styles.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import HeroDetail from './components/HeroDetail';
import HeroesList from './components/HeroesList';
import NotFound from './components/Not Found';

function App() {
  return (
    <>
      <Router>
        <h1>Tour of Heroes</h1>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/heroes">Heroes</Link>
        </nav>

        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/heroes" component={HeroesList} />
          <Route exact path="/detail/:heroId" component={HeroDetail} />
          <Route component={NotFound} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
