import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import configureStore from './redux/store';
import Dashboard from './components/Dashboard/index';
// import Login from './components/Login/index';

function App() {
  return (
    <>
      <Provider store={configureStore()}>
        <Router>
          <Switch>
            {/* <Login /> */}
            <Route exact path="/" component={Dashboard} />
          </Switch>

        </Router>

      </Provider>
    </>
  );
}

export default App;
