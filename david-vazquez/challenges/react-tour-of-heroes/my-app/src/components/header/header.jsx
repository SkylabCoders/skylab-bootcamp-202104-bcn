import React from 'react';
import {
  Link,
} from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Tour of Heroes</h1>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/heroes">List</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
