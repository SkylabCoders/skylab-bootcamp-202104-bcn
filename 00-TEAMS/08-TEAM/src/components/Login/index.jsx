import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './style.scss';

const Login = () => {
  const {
    loginWithRedirect, logout, isAuthenticated, user
  } = useAuth0();

  const loggOutTemplate = () => (
    <>
      <p>
        Welcome
        {' '}
        {user.name}
      </p>
      <button type="button" onClick={() => logout()}>Log out</button>
    </>
  );

  const loggInTemplate = () => (
    <>
      <p>Please access with your credentials</p>
      <button type="button" onClick={() => loginWithRedirect()}>Login</button>
    </>
  );

  return (
    <>
      <div className="login">
        <h3>This is Login</h3>
        {isAuthenticated
          ? loggOutTemplate()
          : loggInTemplate()}
      </div>
    </>
  );
};

Login.propTypes = {
  auth: PropTypes.shape({
    isLoggedIn: PropTypes.bool.isRequired,
    user: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired
  }).isRequired
};

const mapStateToProps = ({ auth }) => ({
  auth
});

export default connect(mapStateToProps)(Login);
