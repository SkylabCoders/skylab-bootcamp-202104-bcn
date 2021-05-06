/* eslint-disable no-debugger */
/* eslint-disable no-console */
import { React, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { useAuth0 } from '@auth0/auth0-react';
import { login, getToken, getUserData } from '../../redux/actions/actionCreator';
import './login.css';

function LogIn({
  auth, actions, token, spotifyUser
}) {
  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
    user
  } = useAuth0();

  const [currentToken, setCurrentToken] = useState(token);
  const [currentUser, setCurrentUser] = useState(null);

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

  useEffect(() => {
    if (token && auth) {
      actions.getUserData(currentToken, auth?.user?.sub);
    }
  }, [currentToken]);

  if (currentUser === null && token && spotifyUser) {
    setCurrentUser(spotifyUser);
  }

  const loggedInTemplate = () => (
    <>
      <p className="loginMessage">
        Welcome,
        {' '}
        {auth?.user?.name}
        {console.log(spotifyUser)}
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
  spotifyUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    display_name: PropTypes.string
  }).isRequired,

  actions: PropTypes.shape({
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    getToken: PropTypes.func.isRequired,
    getUserData: PropTypes.func.isRequired
  }).isRequired
};

function mapStateToProps({ auth, token, user }) {
  return {
    auth,
    token,
    spotifyUser: user
  };
}

function mapDispatchStateToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { login, getToken, getUserData },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchStateToProps)(LogIn);
