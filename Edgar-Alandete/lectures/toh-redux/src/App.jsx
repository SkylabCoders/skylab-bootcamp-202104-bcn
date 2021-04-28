import React from 'react';
import './styles.css';
import './App.css';
import {
  Route, BrowserRouter, Switch, Link,
} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Heroes from './Components/Heroes';
import NotFound from './Components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <h1>Tour of Heroes</h1>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/heroes">Heroes</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/heroes" component={Heroes} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
