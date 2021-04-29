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
import TasksList from './Components/TasksList/TasksList';

function App() {
  return (
    <main className="main">
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
    </main>
  );
}

export default App;
