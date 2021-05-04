import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { login, logout } from '../../redux/actions/actionCreators';

function Login({ auth, actions }) {
  const loggedInTemplate = () => (
    <>
      <p>Welcome Gilberto. Skylab mola.</p>
      <button type="button" onClick={() => actions.logout()}>Log out</button>
    </>
  );

  const loggedOutTemplate = () => (
    <>
      <p>Hello stranger. Please access with your credentials.</p>
      <button type="button" onClick={() => actions.login()}>Login</button>
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
  }).isRequired,
  actions: PropTypes.shape({
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { login, logout },
      dispatch,
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
