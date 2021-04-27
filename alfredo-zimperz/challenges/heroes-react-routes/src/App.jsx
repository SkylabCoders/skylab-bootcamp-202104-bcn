import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import HeroesListComponent from './Components/HeroesListComponent';
import DashboardComponent from './Components/DashboardComponent';
import HeroesDetailComponent from './Components/HeroesDetailComponent';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <header className="Header">
          <h1>Tour of heroes</h1>
          <nav>
            <ul className="nav-list">
              <Link to="/" className="nav-list__link">Dashboard</Link>
              <Link to="/heroes" className="nav-list__link">Heroes list</Link>
            </ul>
          </nav>
        </header>
        <main className="App">
          <Switch>
            <Route exact path="/" component={DashboardComponent} />
            <Route exact path="/heroes" component={HeroesListComponent} />
            <Route exact path="/heroes/:id" component={HeroesDetailComponent} />
            <Redirect to="/" />
          </Switch>

        </main>
      </Router>
    </>

  );
}

export default App;
