/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { login, logout } from './redux/actions/actionCreators';

function App({ user, dispatch }) {
  return (
    <div className="container">
      <header className="d-flex flex-wrap py-3 mb-4 border-bottom">
        <nav>
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

        </nav>
      </header>
      <h1>
        Welcome to Skylab
        {' '}
        {user.name}
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Obcaecati, ex consequatur magnam nostrum facilis facere eligendi porro!
        Consequatur sint totam enim cumque. At eaque nobis, perferendis in laborum quos quam?
      </p>
    </div>
  );
}

function mapStateToProps({ user }) {
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);
