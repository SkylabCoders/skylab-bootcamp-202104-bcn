/* eslint-disable react/prop-types */
import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import { connect } from 'react-redux';
// import configureStore from './redux/stores';
import Dashboard from './components/Dashboard';
import tasks from './components/Tasks';
import NotFound from './components/NotFound';
import TaskDetail from './components/TaskDetail';
import { login, logout } from './redux/actions/actionCreators';
import './App.css';

function App({ user, dispatch }) {
  return (
    <>
      {/* <Provider store={configureStore()}> */}
      <Router>
        <header className="header">
          <nav className="header--login">
            {
            user.isLoggedIn
              ? (
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </button>
              )
              : (
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => dispatch(login())}
                >
                  Login
                </button>
              )
          }
            <span>
              Welcome to Todo List
              {' '}
              {user.displayName}
            </span>
            <img src={user.photoURL} alt={user.email} />

          </nav>

          <h1>To Do List</h1>
          <nav>
            <Link to="/">Task list</Link>
            <Link to="/tasks">Edit tasks</Link>
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
      {/* </Provider> */}
    </>
  );
}

function mapStateToProps({ user }) {
  return {
    user
  };
}

export default connect(mapStateToProps)(App);
