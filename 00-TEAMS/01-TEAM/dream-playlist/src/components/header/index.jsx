import React from 'react';
import './index-header.css';
// import PropTypes from 'prop-types';

function Header() {
  return (
    <header>
      <div className="icon">
        <span />
      </div>
      <div className="header-container">
        <ul className="header-list">
          <li>Name</li>
          <li>photo</li>
          <li>Logout</li>
        </ul>
      </div>
    </header>
  );
}

Header.propTypes = {

};

export default Header;
