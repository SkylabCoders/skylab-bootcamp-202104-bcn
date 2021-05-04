import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { login, logout } from '../../redux/actions/actionCreators';

const Login = ({ auth, actions }) => (
  <div className="login">
    {
      auth.isLoggedIn
        ? <button type="button" onClick={() => actions.logout()}>Logout</button>
        : <button type="button" onClick={() => actions.login()}>Login</button>
    }
  </div>
);

Login.propTypes = {
  auth: PropTypes.shape({
    isLoggedIn: PropTypes.bool.isRequired
  }).isRequired,
  actions: PropTypes.shape({
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
  }).isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { login, logout },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
