import React from 'react';
import logo from '../../../assets/logo.png';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <ul className="header__left-elements">
        <img src={logo} alt="logo" />
        <li className="left-elements">Home</li>
        <li className="left-elements">
          <ul>Category</ul>
          <li className="left-elements__item">Egyptian Art</li>
          <li className="left-elements__item">Asian Art</li>
          <li className="left-elements__item">Arts of Africa, Oceania and America</li>
          <li className="left-elements__item">Euro paintings</li>
          <li className="left-elements__item">Greek and Roman</li>
          <li className="left-elements__item">The American Wing</li>
        </li>
        <li className="left-elements">Favorites</li>
      </ul>
      <ul className="header__right-elements">
        <li className="right-elements">Login</li>
      </ul>
    </header>
  );
}

export default Header;
