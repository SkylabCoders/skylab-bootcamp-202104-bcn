import React from 'react';
import './styles.css';
import './App.css';
import {
  Route, BrowserRouter, Switch, Link,
} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Heroes from './Components/Heroes';

function App() {
  return (
    <BrowserRouter>
      <h1>Tour of Heroes</h1>
      <nav>
        <Link href="/">Dashboard</Link>
        <Link to="/heroes">Heroes</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/heroes" component={Heroes} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
