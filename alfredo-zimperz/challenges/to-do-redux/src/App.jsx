import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Game from './components/Game';
import Ranking from './components/Ranking';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <header className="header">
          <h1>The Book Quiz</h1>
          <nav>
            <Link to="/">Dashboard</Link>
            <Link to="/game">Game</Link>
            <Link to="/ranking">Ranking</Link>
          </nav>
        </header>
        <main className="main">
          <Switch>
            <Route path="/" component={Dashboard} />
            <Route path="/game" component={Game} />
            <Route path="/ranking" component={Ranking} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </Router>

    </>
  );
}

export default App;
