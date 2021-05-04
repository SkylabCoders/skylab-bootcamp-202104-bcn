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
import Form from './components/form';
import ListPreview from './components/list/list-preview';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Link to="/">Dashboard</Link>
        <Link to="/login">LogIn</Link>
        <Link to="/form">Form</Link>
        <Link to="/list-preview">List</Link>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" component={LogIn} />
          <Route path="/form" component={Form} />
          <Route path="/list-preview" component={ListPreview} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
