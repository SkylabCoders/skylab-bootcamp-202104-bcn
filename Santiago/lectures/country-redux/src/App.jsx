import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import './App.css';
import Provider from 'react-redux';
import Dashboard from './components/Dashboard';
import Countries from './components/Countries';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <header>
            <h1>HELLO</h1>
            <Link to="/">Dashboard</Link>
            <Link to="/countries">Countries</Link>
          </header>
          <main>
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/countries" component={Countries} />
            </Switch>
          </main>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
