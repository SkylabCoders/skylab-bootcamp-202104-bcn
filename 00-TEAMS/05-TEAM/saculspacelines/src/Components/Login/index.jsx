import React from 'react-dom';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';
import { bindActionCreators } from 'redux';
import { login } from '../../redux/Actions/actionCreator';
import ChooseFaction from '../ChooseFaction';
import './form.css';
import starwarspolicyvideo from '../../Images/starwarspolicyvideo.mp4';

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
      <ChooseFaction />
      <button type="button" onClick={() => logout({ returnTo: window.location.origin })}>Log out</button>
    </>
  );

  const loggedOutTemplate = () => (
    <section className="login">
      <video
        autoPlay
        muted
        loop
        id="starwarspolicy"
      >
        <source src={starwarspolicyvideo} type="video/mp4" />
        Video not supported
      </video>
      <div className="login__auth auth">
        <h1 className="auth__title">Sacul spacelines</h1>
        <h2 className="auth__subtitle">
          { '}'}
          {' '}
          Sacul Spacelines
          {' '}
          { '{'}
        </h2>
        <form>
          <input
            type="checkbox"
            onChange={() => handleAcceptTherms()}
            required
          />
          <p>Accept privacy policy</p>
          <button
            type="submit"
            onClick={thermsAccepted ? () => {
              loginWithRedirect();
            } : null}
          >
            Log In

          </button>
        </form>
      </div>
    </section>
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
