import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/stores';
import Dashboard from './components/Dashboard';
import tasks from './components/Tasks';
import NotFound from './components/NotFound';
import TaskDetail from './components/TaskDetail';
import './App.css';

function App() {
  return (
    <>
      <Provider store={store()}>
        <Router>
          <header className="header">
            <h1>To Do List</h1>
            <nav>
              <Link to="/">Dashboard</Link>
              <Link to="/tasks">tasks</Link>
            </nav>
          </header>
          <main className="main">
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/tasks" exact component={tasks} />
              <Route path="/tasks/:taskId" component={TaskDetail} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </Router>
      </Provider>

    </>
  );
}

export default App;
