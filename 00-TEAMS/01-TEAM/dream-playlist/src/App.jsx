import React from 'react';
import
{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Dashboard from './components/dashboard';
import LogIn from './components/login';
import Form from './components/form';
import ListPreview from './components/list/list-preview';
import './App.css';

function App() {
  return (
    <>
      <Auth0Provider
        domain="dev-3db04cth.eu.auth0.com"
        clientId="CCZmdYZKT9IOokDnCcKfQAufIrtQEbX5"
        redirectUri={window.location.origin}
      >
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
      </Auth0Provider>
    </>
  );
}

export default App;
