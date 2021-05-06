/* eslint-disable no-debugger */
/* eslint-disable no-console */
import { React, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { useAuth0 } from '@auth0/auth0-react';
import { login, getToken } from '../../redux/actions/actionCreator';
import './login.css';

function LogIn({ auth, actions, token }) {
  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
    user
  } = useAuth0();

  const [currentToken, setCurrentToken] = useState(token);

  useEffect(() => {
    if (isAuthenticated) {
      actions.login(user);
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    debugger;
    if (!token) actions.getToken();
  }, [currentToken]);

  if (currentToken === false && token) setCurrentToken(token);

  const loggedInTemplate = () => (
    <>
      <p className="loginMessage">
        Welcome,
        {' '}
        {auth?.user?.name}
      </p>
      <button id="auth-button" type="button" onClick={() => logout(isAuthenticated, user)}>Log out</button>
    </>
  );

  const loggedOutTemplate = () => (
    <>
      <p className="loginMessage">
        Please, log in ➡️
      </p>
      <button id="auth-button" type="button" onClick={() => loginWithRedirect()}>Login</button>
    </>
  );
  return (
    <>
      {
      auth.isLoggedIn
        ? loggedInTemplate()
        : loggedOutTemplate()
      }
    </>
  );
}

LogIn.propTypes = {
  auth: PropTypes.shape({
    isLoggedIn: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      sub: PropTypes.string.isRequired
    })
  }).isRequired,
  token: PropTypes.string.isRequired,

  actions: PropTypes.shape({
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    getToken: PropTypes.func.isRequired
  }).isRequired
};

function mapStateToProps({ auth, token }) {
  return {
    auth,
    token
  };
}

function mapDispatchStateToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { login, getToken },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchStateToProps)(LogIn);
