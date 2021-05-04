import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { login } from '../../redux/actions/actionCreators';

const Login = ({ auth, actions }) => {
  const {
    loginWithRedirect, logout, isAuthenticated, user
  } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user) { actions.login(user); }
  }, [isAuthenticated, user]);
  const loggInTemplate = () => (
    <>
      <p>
        Welcome
        {' '}
        {auth.user.name}
      </p>
      <button type="button" onClick={() => logout({ returnTo: window.location.origin })}>Log out</button>
    </>
  );

  const loggOutTemplate = () => (
    <>
      <p>Please access with your credentials</p>
      <button type="button" onClick={() => loginWithRedirect()}>Login</button>
    </>
  );

  return (
    <>
      <h3>This is Login</h3>
      {auth.isLoggedIn
        ? loggInTemplate()
        : loggOutTemplate()}
    </>
  );
};

Login.propTypes = {
  auth: PropTypes.shape({
    isLoggedIn: PropTypes.bool.isRequired,
    user: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired
  }).isRequired,
  actions: PropTypes.shape({
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
  }).isRequired
};

const mapStateToProps = ({ auth }) => ({
  auth
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    login
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
