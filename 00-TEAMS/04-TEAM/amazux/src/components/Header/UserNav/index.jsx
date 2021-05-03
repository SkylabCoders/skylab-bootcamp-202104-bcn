import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'
// import search from '../../../images/search-slim.svg';

const UserNav = () => (
  <nav className="navigation">
    <div className="navigation__content-img">
      <Link to="/">
        <div className="navigation__img" />
      </Link>
    </div>

    <div className="navigation__location">
      <div className="navigation__location-img" />
      <div className="navigation__direction">
        <div className="navigation__location-name">Enviar a Joseluis</div>
        <div className="navigation__location-adress">Calle falsa 123</div>
      </div>

    </div>
    <div className="navigation__search">
      <input type="text" placeholder="Search product" />
    </div>
    <div className="navigation__user-login">
      <Link to="/">
        <div className="navigation__login" />
      </Link>
    </div>

    <div className="navigation__devolution">
      Devoluciones y pedidos
    </div>
    <div className="navigation__cart">
      <button type="button"> </button>
      <span className="navigation__cart-number">3</span>
    </div>
  </nav>
);

UserNav.propTypes = {

};

export default UserNav;