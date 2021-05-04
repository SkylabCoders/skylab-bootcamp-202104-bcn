import React from 'react-dom';
import { useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addUser } from '../../redux/Actions/actionCreator';

const Login = ({ dispatch }) => {
  const [loginOrRegister, setLoginOrRegister] = useState(null);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const LOGIN = 'login';
  const REGISTER = 'register';

  const handleSubmit = () => {
    // if (loginOrRegister === LOGIN) {

    // } else
    if (loginOrRegister === REGISTER) {
      dispatch(addUser({ email, password, wishlist: [] }));
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    setLoginOrRegister(LOGIN);
  };

  const handleRegister = () => {
    setLoginOrRegister(REGISTER);
  };

  return (
    <>
      <h1>Sacul spacelines</h1>
      <h2>Wookie subtitle</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="EMAIL"
          type="email"
          onChange={handleEmailChange}
          required
        />
        <input
          placeholder="PASSWORD"
          type="password"
          onChange={handlePasswordChange}
          required
        />
        <input type="submit" value="Login" onClick={handleLogin} />
        <input type="submit" value="Register" onClick={handleRegister} />
      </form>

    </>
  );
};

Login.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  user: state.userActionReducer
});

export default connect(mapStateToProps)(Login);
