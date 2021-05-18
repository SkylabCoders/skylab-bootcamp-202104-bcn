import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { Auth0Provider } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import configureStore from './redux/store/configureStore';
import Login from './Components/Login';
import SelectAvatar from './Components/SelectAvatar';
import ChoosePlanet from './Components/ChoosePlanet';
import ChooseStarship from './Components/ChooseStarship';
import Profile from './Components/Profile';

function App() {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_DOMAIN}
      clientId={process.env.REACT_APP_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <Provider store={configureStore()}>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/select-avatar/:faction" component={SelectAvatar} />
            <Route path="/select-destiny" component={ChoosePlanet} />
            <Route path="/select-starship" component={ChooseStarship} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </Router>
      </Provider>
    </Auth0Provider>
  );
}

export default App;
