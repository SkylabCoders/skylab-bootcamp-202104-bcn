import React from 'react';
import PropTypes from 'prop-types';
import './sidenav.css';

const SideNav = ({ closeSideNav }) => (
  <>
    <div id="sidenav" className="sidenav">
      <div className="sidenav__user-bar">
        {/* <img clasName="sidenav__user-icon" /> */}
        Hola User
      </div>
      <ul>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Maiores a quia, non quo debitis</li>
        <li>blanditiis fugiat voluptates</li>
        <li>doloremque eaque</li>
      </ul>
    </div>
    <button type="button" className="sidenav__close-button" onClick={closeSideNav}>×</button>
  </>
);

SideNav.propTypes = {
  closeSideNav: PropTypes.func.isRequired
};

export default SideNav;
