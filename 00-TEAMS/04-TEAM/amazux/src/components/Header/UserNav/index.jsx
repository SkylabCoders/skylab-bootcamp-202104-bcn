import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../../Login';

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
    <Login />

    <div className="navigation__devolution">
      Devoluciones y pedidos
    </div>
    <Link to="/Cart">
      <div className="navigation__cart">
        <button type="button"> </button>
        <span className="navigation__cart-number">3</span>
      </div>
    </Link>
  </nav>
);

UserNav.propTypes = {

};

export default UserNav;
