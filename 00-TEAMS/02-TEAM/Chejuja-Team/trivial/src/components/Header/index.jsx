import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from './logo.png';
import Login from '../Login/index';

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__list--item">
            <Link to="./">
              <img className="header__list--logo" src={logo} alt="CHEJUJA" />
            </Link>
          </li>
          <li className="header__list--itemgit">Titulo1</li>
          <li className="header__list--item">
            <Login />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
