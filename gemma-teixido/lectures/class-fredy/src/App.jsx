import React from 'react';
import
{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Countries from './components/Countries';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <header>
            <h1>Hola</h1>
            <Link to="/">Dashboard</Link>
            <Link to="/countries">Countries</Link>
          </header>
          <main>
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/countries" component={Countries} />
            </Switch>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
