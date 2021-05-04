import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navigation from './styles';
import BrandLogo from '../../../../../../assets/BrandLogo.svg';

const Navbar = () => (
  <Navigation>
    <div>
      <Link className="navbar-brand" to="/">
        <img src={BrandLogo} alt="" />
      </Link>
    </div>

    <div className="navbar-main">
      <ul className="navbar-nav">
        <li>
          <NavLink activeClassName="active" className="nav-item nav-link" exact to="/films">Películas</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" className="nav-item nav-link" exact to="/tv-shows">Tv Shows</NavLink>
        </li>
      </ul>
    </div>

    <div className="navbar-login">
      <ul className="navbar-nav ml-auto">
        <NavLink activeClassName="active" className="nav-item nav-link" exact to="/login">Logout</NavLink>
      </ul>
    </div>
  </Navigation>
);

export default Navbar;
