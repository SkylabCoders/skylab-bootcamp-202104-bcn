import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/heroes">Heroes</Link>
  </nav>
);

export default Nav;
