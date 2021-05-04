import React from 'react';
import PropTypes from 'prop-types';
import './sidenav.css';

const SideNav = ({ closeSideNav }) => (
  <div className="sidenav-box">
    <div className="sidenav__blackground"> </div>
    <div id="sidenav" className="sidenav">
      <div className="sidenav__user-bar">
        <div className="sidenav__user-icon"> </div>
        <div clasName="sidenav__user-welcome">
          Hola, User
        </div>
      </div>
      <menu className="sidenav__menu-header">Menu</menu>
      <ul className="sidenav__menu-list">
        <li>Lorem ipsum dolor sit amet</li>
        <li>Maiores a quia, non quo debitis</li>
        <li>blanditiis fugiat voluptates</li>
        <li>doloremque eaque</li>
      </ul>
    </div>
    <button type="button" className="sidenav__close-button" onClick={closeSideNav}>×</button>
  </div>
);

SideNav.propTypes = {
  closeSideNav: PropTypes.func.isRequired
};

export default SideNav;
