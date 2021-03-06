import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { useAuth0 } from '@auth0/auth0-react';
import { signIn, signOut } from '../../redux/actions/actionCreators';
import './login.css';

const Login = ({ auth, actions }) => {
  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
    user
  } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user) {
      actions.signIn(user);
    }
  }, [isAuthenticated, user]);

  const loggedInTemplate = () => (
    <>
      <img src={auth.user.picture} alt={auth.user.given_name} />
      <p>
        Welcome
        {' '}
        {auth.user.given_name}
      </p>
      <button type="button" onClick={() => logout({ returnTo: window.location.origin })}>Log out</button>
    </>
  );

  const loggedOutTemplate = () => (
    <>
      <p>Hello! Please login</p>
      <button type="button" onClick={() => loginWithRedirect()}>Login</button>
    </>

  );

  return (
    <div className="login">
      { auth.isLoggedIn
        ? loggedInTemplate()
        : loggedOutTemplate()}
    </div>

  );
};

Login.propTypes = {
  auth: PropTypes.shape({
    isLoggedIn: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      given_name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  actions: PropTypes.shape({
    signIn: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired
  }).isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { signIn, signOut },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
