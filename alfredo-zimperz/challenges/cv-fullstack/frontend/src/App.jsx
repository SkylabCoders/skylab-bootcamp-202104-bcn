import React from 'react';
import {
  Switch, Route, Link,
} from 'react-router-dom';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <main className="App">
      <header className="header">
        <h1>App</h1>
        <nav>
          <Link to="/">Resume</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <Switch>
        <Route path="/" exact component={Resume} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </main>
  );
}

export default App;
