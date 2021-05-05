import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import SearchInput from '../SearchInput';

const Header = () => (
  <nav>
    <Link className="nav-element" to="/">
      <img className="nav-icon" src="../../assets" alt="icon" />
    </Link>
    <Link className="nav-element" to="/global">Global</Link>
    <Link className="nav-element" to="/mysavedplaces">My Saved Places</Link>
    <Link className="nav-element" to="/advices">Advices</Link>
    <SearchInput />
    <Link className="nav-element" to="/login">Login</Link>
  </nav>
);

export default Header;
