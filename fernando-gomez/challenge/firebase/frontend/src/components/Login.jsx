/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { login, logout } from '../redux/actions/actionCreators';

function Login({ user, dispatch }) {
  return (
    <body className="d-flex h-100 text-center text-white bg-dark">
      <div className="cover-container d-flex w-1 h-1 p-1 mx-auto flex-column">
        <header className="mb-auto">
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
        <main className="px-3">
          <h1>This is a React app working with firebase</h1>
          <h3>
            {' '}
            Welcome
            {' '}
            {user.displayName}
          </h3>
          <img src={user.photoURL} alt={user.email} />
        </main>
        <footer className="mt-auto text-white-50">
          <p>Demo for firebase app</p>
        </footer>
      </div>
    </body>
  );
}

function mapStateToProps({ user }) {
  return {
    user,
  };
}

export default connect(mapStateToProps)(Login);
