import React, { useState } from 'react';
// import PropTypes from 'prop-types'
import SideNav from './SideNav/index';

const CategoriesNav = () => {
  const [showSideNav, setShowSideNav] = useState(false);

  function closeSideNav() {
    setShowSideNav(false);
  }

  function openSideNav() {
    setShowSideNav(true);
  }
  return (
    <nav className="navbar">
      <div className="navbar__menu">
        {showSideNav
          ? <SideNav closeSideNav={closeSideNav} />
          : <button type="button" onClick={openSideNav}>Open</button>}
        ;
      </div>
      <p>Tu compra de supermercado con Amazux Prime</p>
    </nav>

  );
};

CategoriesNav.propTypes = {

};

export default CategoriesNav;
