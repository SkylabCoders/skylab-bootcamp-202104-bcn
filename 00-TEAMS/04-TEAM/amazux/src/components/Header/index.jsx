import React from 'react';
import UserNav from './UserNav/index';
import CategoriesNav from './CategoriesNav';
import './header.css';

const Header = () => (
  <header>
    <UserNav />
    <CategoriesNav />
  </header>
);

Header.propTypes = {

};

export default Header;
