import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'
// import search from '../../../images/search-slim.svg';

const UserNav = () => (
  <nav className="navigation">
    <div className="navigation__contentImg">
      <Link to="/">
        <div className="navigation__img" />
      </Link>
    </div>

    <div className="navigation__location">
      Enviar a Joseluis
    </div>
    <div className="navigation__search">
      <input type="text" placeholder="Search product" />
    </div>
    <Link to="/">
      <div className="navigation__login" />
    </Link>
    <div className="navigation__cart">
      <button type="button">Cart</button>
    </div>
  </nav>
);

UserNav.propTypes = {

};

export default UserNav;
