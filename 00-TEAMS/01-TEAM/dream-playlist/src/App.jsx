import React from 'react';
import
{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Dashboard from './components/dashboard';
import LogIn from './components/login';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Link to="/" exact>Dashboard</Link>
        <Link to="/login">LogIn</Link>
        <Switch>
          <Route path="/login" component={LogIn} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
