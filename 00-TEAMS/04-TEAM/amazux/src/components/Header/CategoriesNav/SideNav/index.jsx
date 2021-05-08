import React from 'react';
import PropTypes from 'prop-types';
import './sidenav.css';

const SideNav = ({ closeSideNav }) => (
  <div className="sidenav-box">
    <div className="sidenav__background"> </div>
    <div id="sidenav" className="sidenav">
      <button type="button" className="sidenav__close-button" onClick={closeSideNav}>×</button>
      <div className="sidenav__user-bar">
        <div className="sidenav__user-icon"> </div>
        <div className="sidenav__user-welcome">
          Welcome, User
        </div>
      </div>
      <menu className="sidenav__menu-header">Menu</menu>
      <ul className="sidenav__menu-list">
        <li>Lorem ipsum dolor sit amet</li>
        <li>Maiores a quia, non quo debitis</li>
        <li>blanditiis fugiat voluptates</li>
        <li>doloremque eaque</li>
      </ul>
      <menu className="sidenav__menu-header">Help & Settings</menu>
      <ul className="sidenav__menu-list">
        <li>My account</li>
        <li>Something went wront?</li>
        <li>About Amazux</li>
        <li>Logout</li>
      </ul>
    </div>
  </div>
);

SideNav.propTypes = {
  closeSideNav: PropTypes.func.isRequired
};

export default SideNav;
