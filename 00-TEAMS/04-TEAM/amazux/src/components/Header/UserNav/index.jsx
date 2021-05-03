import React from 'react';
// import PropTypes from 'prop-types'
import logo from '../../../images/amazon_logo_RGB.jpg';
import login from '../../../images/login-white.png';
import basket from '../../../images/shopping-basket-white.png';
// import search from '../../../images/search-slim.svg';

const UserNav = () => (
  <div className="navigation">
    <div className="navigation__img">
      <img src={logo} alt="company-logo" />
    </div>
    <div className="navigation__search">
      <input type="text" placeholder="Search product" />
    </div>
    <div className="navigation__login">
      <img src={login} alt="Login" />
    </div>
    <div className="navigation__basket">
      <img src={basket} alt="Shopping basket" />
    </div>
  </div>

);

UserNav.propTypes = {

};

export default UserNav;
