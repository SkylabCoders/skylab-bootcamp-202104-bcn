import React, { useState } from 'react';
import SideNav from './SideNav/index';
import './CategoriesNav.css';

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
          : (
            <div className="navbar-menu">
              <button className="navbar__menu-button" type="button" onClick={openSideNav}>   </button>
              <div className="navbar__menu-head">Todo</div>
            </div>
          )}
      </div>
      <p className="navbar__adverstiment-text">
        Tu compra de supermercado con
        {' '}
        <strong>Amazux Prime</strong>
      </p>
    </nav>
  );
};

CategoriesNav.propTypes = {

};

export default CategoriesNav;
