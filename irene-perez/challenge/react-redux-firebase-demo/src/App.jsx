/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { login, logout } from './redux/actions/actionCreators';
import './App.css';

function App({ user, dispatch }) {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <nav className="App-header__nav">
            {
              user.isLoggedIn
                ? (
                  <button
                    type="button"
                    className="nav-button button"
                    onClick={() => dispatch(logout())}
                  >
                    Logout
                  </button>
                )
                : (
                  <button
                    type="button"
                    className="nav-button button"
                    onClick={() => dispatch(login())}
                  >
                    Login
                  </button>
                )
            }
          </nav>
        </header>
        <h1>
          Wellcome
          {' '}
          {user.displayName}
          !!
        </h1>
        <img src={user.photoURL} alt={user.email} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisci elit,
          sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrum exercitationem ullam
          corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
        </p>
      </div>
    </>
  );
}

function mapStateToProps({ user }) {
  return {
    user
  };
}

export default connect(mapStateToProps)(App);
