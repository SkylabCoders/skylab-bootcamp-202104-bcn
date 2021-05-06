import { React, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { useAuth0 } from '@auth0/auth0-react';
import { login } from '../../redux/actions/actionCreator';

function LogIn({ auth, actions }) {
  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
    user
  } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      actions.login(user);
    }
  }, [isAuthenticated, user]);

  const loggedInTemplate = () => (
    <>
      <p>
        Welcome
        {' '}
        {auth?.user?.name}
      </p>
      <button type="button" onClick={() => logout(isAuthenticated, user)}>Log out</button>
    </>
  );

  const loggedOutTemplate = () => (
    <>
      <p>Hello Stranger, Please access with your credentials.</p>
      <button type="button" onClick={() => loginWithRedirect()}>Login</button>
    </>
  );
  return (
    <>
      {auth.isLoggedIn
        ? loggedInTemplate()
        : loggedOutTemplate()}
    </>
  );
}

LogIn.propTypes = {
  auth: PropTypes.shape({
    isLoggedIn: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  }).isRequired,

  actions: PropTypes.shape({
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
  }).isRequired
};

function mapStateToProps({ auth }) {
  return {
    auth
  };
}

function mapDispatchStateToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { login },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchStateToProps)(LogIn);
