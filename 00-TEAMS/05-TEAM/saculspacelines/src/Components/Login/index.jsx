import React from 'react-dom';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';
import { bindActionCreators } from 'redux';
import { login } from '../../redux/Actions/actionCreator';
import Characters from '../Characters';
import Planets from '../Planets';
import Starships from '../Starships';
import Apitest from '../Apitest';

const Login = ({ auth, actions }) => {
  const [thermsAccepted, setThermsAccepted] = useState(false);

  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated
  } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user) {
      actions.login(user);
    }
  }, [isAuthenticated, user]);

  const handleAcceptTherms = () => {
    setThermsAccepted(!thermsAccepted);
  };

  const loggedInTemplate = () => (
    <>
      <button type="button" onClick={() => logout({ returnTo: window.location.origin })}>Log out</button>
      <Apitest />
      <Starships />
      <Characters />
      <Planets />
    </>
  );

  const loggedOutTemplate = () => (
    <>
      <h1>Sacul spacelines</h1>
      <h2>Wookie subtitle</h2>
      <form>
        <input
          type="checkbox"
          onChange={() => handleAcceptTherms()}
          required
        />
        <p>Aceptar términos y condiciones</p>
        <button
          type="submit"
          onClick={thermsAccepted ? () => {
            loginWithRedirect();
          } : null}
        >
          Log In

        </button>
      </form>
    </>
  );

  return (
    <>
      {auth.isLoggedIn ? loggedInTemplate() : loggedOutTemplate()}
    </>
  );
};

Login.propTypes = {
  auth: PropTypes.shape({
    isLoggedIn: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  }).isRequired,
  actions: PropTypes.shape({
    login: PropTypes.func.isRequired
  }).isRequired
};

const mapStateToProps = ({ authReducer }) => ({
  auth: authReducer
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ login }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
