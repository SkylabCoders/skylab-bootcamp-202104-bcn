import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import NotFound from './Components/NotFound';
import Welcome from './Components/MainMenu';
import store from './redux/store';
import TasksList from './Components/TasksList';

function App() {
  return (
    <>
      <Provider store={store}>
        <Welcome />
        <TasksList />
        <Router>
          <Switch>
            <Route exact path="/" />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
