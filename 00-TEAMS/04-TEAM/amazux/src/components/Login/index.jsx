import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { useAuth0 } from '@auth0/auth0-react';
import { signIn, signOut } from '../../redux/actions/actionCreators';

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
      <div className="navigation__user-login">
        <div className="navigation__login" />
        <p>
          Welcome
          {' '}
          {auth.user.name}
        </p>
        <button type="button" onClick={() => logout({ returnTo: window.location.origin })}>Log out</button>
      </div>
    </>
  );

  const loggedOutTemplate = () => (
    <>
      <p>Hello stranger! Please login</p>
      <button type="button" onClick={() => loginWithRedirect()}>Login</button>
    </>
  );

  return (
    <>
      { auth.isLoggedIn
        ? loggedInTemplate()
        : loggedOutTemplate()}
    </>
  );
};

Login.propTypes = {
  auth: PropTypes.shape({
    isLoggedIn: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired
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
