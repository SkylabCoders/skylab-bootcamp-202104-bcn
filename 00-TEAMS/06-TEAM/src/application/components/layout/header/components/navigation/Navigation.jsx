import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Login from '../../../../../../common/components/Login/Login';
import GlobalFonts from '../../../../../../common/fonts/fonts';
import BrandLogo from '../../../assets/BrandLogo.svg';
import {
  Navigation, BrandImage, BrandWrapper, LoginWrapper, NavigationWrapper, LoginBtn
} from './styles';

const Navbar = () => (

  <Navigation>
    <div className="header__wrapper__container">
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
          <li>
            <NavLink activeClassName="active" className="nav-item nav-link" exact to="/search">Search Movies</NavLink>
          </li>
        </ul>
      </NavigationWrapper>
      <LoginWrapper className="navbar-login">
        <ul className="navbar-nav ml-auto">
          <LoginBtn>
            <Login />
          </LoginBtn>
        </ul>
      </LoginWrapper>
    </div>
  </Navigation>
);

export default Navbar;
