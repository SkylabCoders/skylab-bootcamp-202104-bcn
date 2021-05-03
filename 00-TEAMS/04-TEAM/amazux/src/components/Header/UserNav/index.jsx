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
      <div className="navigation__locationImg" />
      <div className="navigation__locationAdress">Enviar a Joseluis</div>
    </div>
    <div className="navigation__search">
      <input type="text" placeholder="Search product" />
    </div>
    <Link to="/">
      <div className="navigation__login" />
    </Link>
    <div className="Navigation__devolution">
      Devoluciones y pedidos
    </div>
    <div className="navigation__cart">
      <button type="button">Cart</button>
    </div>
  </nav>
);

UserNav.propTypes = {

};

export default UserNav;
