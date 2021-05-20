import React from 'react';

const Header = () => (
  <>
    <header className="main-container">
      <ul className="main-container__list-container">
        <li className="list-container__item">
          <i className="fas fa-tools" />
          Tech stack
        </li>
        <li className="list-container__item">
          <i className="fas fa-code-branch" />
          Experience
        </li>
        <li className="list-container__item">
          <i className="fas fa-graduation-cap" />
          Studies
        </li>
        <li className="list-container__item">
          <i className="fas fa-address-book" />
          Referals
        </li>
      </ul>
    </header>
  </>
);

export default Header;
