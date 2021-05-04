import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import store from './redux/store';
import Header from './components/Header';
import Global from './components/Global';
import MySavedPlaces from './components/Mysavedplaces';
import Advices from './components/Advices';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Country from './components/Country';

// TODO move credentials to .env
function App() {
  return (
    <Auth0Provider
      domain="dev-j78n23s8.us.auth0.com"
      clientId="iP4yrFnARXs4n6GwFPHVZzyM1K9owt5f"
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <BrowserRouter>
          {/* <script src="https://www.gstatic.com/charts/loader.js"></script>
<script src="https://www.google.com/jsapi"></script>
<script>
  google.charts.load('current', {packages: ['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  ...
</script> */}
          <header>
            <Header />
          </header>
          <main>
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/global" component={Global} />
              <Route path="/mysavedplaces" component={MySavedPlaces} />
              <Route path="/advices" component={Advices} />
              <Route path="/login" component={Login} />
              <Route path="/country/:country" component={Country} />
            </Switch>
          </main>
        </BrowserRouter>
      </Provider>
    </Auth0Provider>
  );
}

export default App;
