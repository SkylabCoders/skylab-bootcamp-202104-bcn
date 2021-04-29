import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/heroes">Heroes</Link>
  </nav>
);

export default Navbar;
