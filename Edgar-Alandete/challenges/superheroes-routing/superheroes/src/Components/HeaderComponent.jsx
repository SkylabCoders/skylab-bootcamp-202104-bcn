import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => (
  <header className="header">
    <nav className="header__navigator">
      <ul className="header__navigator-container">
        <li className="header__navigator-item">
          <Link to="./dashboard">Dashboard </Link>
        </li>
        <li className="header__navigator-item">
          <Link to="./heroes">Heroes</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default HeaderComponent;
