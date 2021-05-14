import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link, Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './common/store/index';
import Dashboard from './pages/Daskboard/dashboard';
import Tasks from './pages/tasks/tasks';
import TaskDetail from './pages/taskDetails/taskDetail';

function App() {
  return (
    <>
      <Provider store={store()}>
        <Router>
          <nav>
            <Link to="/">Panel</Link>
            <Link to="/tasks">Tasks</Link>
          </nav>
          <div>
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/tasks" exact component={Tasks} />
              <Route path="/tasks/:taskId" component={TaskDetail} />
              <Redirect to="/" />
            </Switch>
          </div>
        </Router>
      </Provider>
    </>

  );
}

export default App;
