/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { login, logout } from './redux/actions/actionCreators';

function App({ user, dispatch }) {
  return (
    <div className="container">
      <header>
        <h1>My first Firebase</h1>
        <nav>
          {!user.isLoggedIn
            ? (<button type="button" className="btn btn-secondary" onClick={() => dispatch(login())}>Login</button>)
            : (<button type="button" className="btn btn-secondary" onClick={() => dispatch(logout())}>Logout</button>)}
        </nav>
      </header>
      <h1>
        Welcome to the Firebase
        {' '}
        {user.displayName}
      </h1>
      <img src={user.photoURL} alt={user.email} />

    </div>
  );
}

function mapStateToProps({ user }) {
  return {
    user
  };
}

export default connect(mapStateToProps)(App);
