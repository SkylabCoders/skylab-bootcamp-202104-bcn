import React from 'react';
import PropTypes from 'prop-types';
import './sidenav.css';

const SideNav = ({ closeSideNav }) => (
  <div id="sidenav" className="sidenav">
    <button type="button" className="sidenav__close-button" onClick={closeSideNav}>×</button>

    Lorem ipsum dolor sit amet
    consectetur adipisicing elit.
    Maiores a quia, non quo debitis
    doloremque eaque, blanditiis fugiat voluptates
    vel ad enim id obcaecati delectus
    assumenda reiciendis facilis explicabo animi.
  </div>
);

SideNav.propTypes = {
  closeSideNav: PropTypes.func.isRequired

};

export default SideNav;
