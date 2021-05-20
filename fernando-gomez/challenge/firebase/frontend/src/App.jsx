import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Contact from './components/Contact';
import configureStore from './redux/store';
import Dashboard from './components/Dashboard/index';
import StudiesAndWork from './components/StudiesAndWork';
import Github from './components/Github';
import Skills from './components/Skills';
// import Login from './components/Login/index';

function App() {
  return (
    <>
      <Provider store={configureStore()}>
        <Router>
          <Switch>
            {/* <Login /> */}
            <Route exact path="/" component={Dashboard} />
            <Route path="/studies-and-work" component={StudiesAndWork} />
            <Route path="/github" component={Github} />
            <Route path="/skills" component={Skills} />
            <Route path="/contact" component={Contact} />
          </Switch>

        </Router>

      </Provider>
    </>
  );
}

export default App;
