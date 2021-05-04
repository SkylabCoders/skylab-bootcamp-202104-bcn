import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <Link to="/">Dashboard</Link>
    <Link to="/global">Global</Link>
    <Link to="/mysavedplaces">My Saved Places</Link>
    <Link to="/advices">Advices</Link>
    <Link to="/login">Login</Link>
  </nav>
);

export default Header;
