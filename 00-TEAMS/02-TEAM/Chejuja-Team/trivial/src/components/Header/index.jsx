import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from './logo.png';
import LoginImg from './user.png';

function HeaderMenu() {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__list--item">
            <Link to="./">
              <img className="header__list--logo" src={logo} alt="CHEJUJA" />
            </Link>
          </li>
          <li className="header__list--itemgit">Titulo</li>
          <li className="header__list--item">
            <Link to="./" className="header__list--login">
              <p className="header__list--paragraph">UserName</p>
              <img className="header__list--loginImg" src={LoginImg} alt="img" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderMenu;
