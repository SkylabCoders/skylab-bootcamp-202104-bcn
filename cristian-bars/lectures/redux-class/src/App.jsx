import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/index';
import Dashboard from './components/Dashboard/Index';
import Countries from './components/Countries/Countries';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <header>
            <h1>Hello, Skylab</h1>
            <Link to="/">Dashboard</Link>
            <Link to="/countries">Countries</Link>
          </header>
          <main>
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/countries" exact component={Countries} />
            </Switch>
          </main>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
