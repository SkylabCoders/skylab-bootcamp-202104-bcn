import React from 'react';
// import PropTypes from 'prop-types'
import UserNav from './UserNav/index';
import CategoriesNav from './CategoriesNav';

const Header = () => (
  <header>
    <UserNav />
    <CategoriesNav />
  </header>
);

Header.propTypes = {

};

export default Header;
