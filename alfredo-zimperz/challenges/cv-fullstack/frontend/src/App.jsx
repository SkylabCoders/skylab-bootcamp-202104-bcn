import React from 'react';
import {
  Switch, Link, Route,
} from 'react-router-dom';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <main className="App">
      <header className="header">
        <h1>Alfredo Zimperz</h1>
        <nav>
          <Link className="nav__link" to="/">Resume</Link>
          <Link className="nav__link" to="/portfolio">Portfolio</Link>
          <Link className="nav__link" to="/contact">Contact</Link>
        </nav>
      </header>
      <p className="importan-text">
        Fullstack developer
      </p>
      <Switch>
        <Route path="/" exact component={Resume} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
