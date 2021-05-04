import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { login, logout } from '../../redux/actions/actionCreator';

function LogIn({ auth, actions }) {
  const loggedInTemplate = () => (
    <>
      <p>Welcome Gemma</p>
      <button type="button" onClick={() => actions.logout()}>Log out</button>
    </>
  );

  const loggedOutTemplate = () => (
    <>
      <p>Hello Stranger, Please access with your credentials.</p>
      <button type="button" onClick={() => actions.login()}>Login</button>
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
    isLoggedIn: PropTypes.bool.isRequired
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
      { login, logout },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchStateToProps)(LogIn);
