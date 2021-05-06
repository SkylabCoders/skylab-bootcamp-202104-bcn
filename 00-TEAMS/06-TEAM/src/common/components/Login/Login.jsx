import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { useAuth0 } from '@auth0/auth0-react';
import { login } from '../../../application/store/actions/actionsCreator';
import Profile from './styles';

function Login({ auth, actions }) {
  const {
    loginWithRedirect,
    isAuthenticated,
    user
  } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user) {
      actions.login(user);
    }
  }, [isAuthenticated, user]);

  const loggedInTemplate = () => (
    <>
      <Profile>
        <img src={user?.picture} alt={user.name} />
        <div className="UserName">
          Welcome
          {' '}
          <p>
            {auth?.user?.name}
          </p>
        </div>
      </Profile>
    </>
  );

  const loggedOutTemplate = () => (
    <>
      <button type="button" onClick={() => loginWithRedirect()}>Registrarse</button>

    </>
  );

  return (
    <>
      { auth.isLoggedIn
        ? loggedInTemplate()
        : loggedOutTemplate()}
    </>
  );
}

Login.propTypes = {
  auth: PropTypes.shape({
    isLoggedIn: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired
    })
  }).isRequired,
  actions: PropTypes.shape({
    login: PropTypes.func.isRequired
  }).isRequired
};

function mapStateToProps({ auth }) {
  return {
    auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { login },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
