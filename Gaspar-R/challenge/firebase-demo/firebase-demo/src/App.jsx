/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { login, logout } from './redux/actions/actionCreators';

function App({ user, dispatch }) {
  return (
    <div className="Container">
      <header className="d-flex flex-wrap justify-content py-3 mb-4 border-bottom">

        <nav>
          {
            user.isLoggedIn
              ? (
                <button
                  className="btn btn-secondary"
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
        </nav>
      </header>
      <h1>React app with firebase</h1>
      <p>
        Demo for firebase app
      </p>

    </div>
  );
}

function mapStateToProps({ user }) {
  return {
    user
  };
}

export default connect(mapStateToProps)(App);
