/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { login, logout } from './redux/actions/actionCreators';
import './App.css';

function App({ user, dispatch }) {
  return (
    <>
      <h1>Welcome to the jungle</h1>
      {
      user.isLoggedIn
        ? (
          <div>
            <p>{user?.displayName}</p>
            <button
              type="button"
              onClick={() => dispatch(logout())}
            >
              Logout

            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => dispatch(login())}
          >
            Login
          </button>
        )
    }
    </>

  );
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(App);
