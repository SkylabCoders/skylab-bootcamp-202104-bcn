import React from 'react';
import logo from '../../../assets/logo.svg';
import './Header.scss';
import Login from '../../LogIn';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <ul className="container__left-elements">
          <img src={logo} alt="logo" />
          <li className="left-elements">Home</li>
          <li className="left-elements">
            Category
            {' '}
            <span className="arrow-category">▼</span>
            <ul className="left-elements__list">
              <li className="left-elements__item">Egyptian Art</li>
              <li className="left-elements__item">Asian Art</li>
              <li className="left-elements__item">Arts of Africa, Oceania and America</li>
              <li className="left-elements__item">Euro paintings</li>
              <li className="left-elements__item">Greek and Roman</li>
              <li className="left-elements__item">The American Wing</li>
            </ul>
          </li>
          <li className="left-elements">Favorites</li>
        </ul>
        <ul className="container__right-elements">
          <Login />
        </ul>
      </div>
    </header>
  );
}

export default Header;
