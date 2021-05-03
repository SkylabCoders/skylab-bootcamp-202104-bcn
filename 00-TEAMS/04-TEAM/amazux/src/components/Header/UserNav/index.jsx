import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'
import logo from '../../../images/amazon_logo_RGB.jpg';
import login from '../../../images/login-white.png';
// import search from '../../../images/search-slim.svg';

const UserNav = () => (
  <nav className="navigation">
    <div className="navigation__img">
      <Link to="/">
        <img src={logo} alt="company-logo" />
      </Link>
    </div>
    <div className="navigation__search">
      <input type="text" placeholder="Search product" />
    </div>
    <div className="navigation__login">
      <Link to="/">
        <img src={login} alt="Login" />
      </Link>
    </div>
    <div className="navigation__cart">
      <button type="button">Cart</button>
    </div>
  </nav>
);

UserNav.propTypes = {

};

export default UserNav;
