import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Navigation, BrandImage, BrandWrapper, LoginWrapper, NavigationWrapper
} from './styles';
import GlobalFonts from '../../../../../../fonts/fonts';
import BrandLogo from '../../../../../../assets/BrandLogo.png';

const Navbar = () => (

  <Navigation>
    <GlobalFonts />
    <BrandWrapper>
      <Link className="navbar-brand" to="/">
        <BrandImage src={BrandLogo} alt="" />
      </Link>
    </BrandWrapper>

    <NavigationWrapper className="navbar-main">
      <ul className="navbar-nav">
        <li>
          <NavLink activeClassName="active" className="nav-item nav-link" exact to="/films">Películas</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" className="nav-item nav-link" exact to="/tv-shows">Tv Shows</NavLink>
        </li>
      </ul>
    </NavigationWrapper>

    <LoginWrapper className="navbar-login">
      <ul className="navbar-nav ml-auto">
        <NavLink activeClassName="active" className="nav-item nav-link" exact to="/login">Entrar</NavLink>
      </ul>
    </LoginWrapper>
  </Navigation>
);

export default Navbar;
