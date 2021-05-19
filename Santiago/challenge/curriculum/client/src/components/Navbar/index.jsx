import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <Link to="/"><li>About me</li></Link>
        <Link to="/education"><li>Education</li></Link>
        <Link to="/Experience"><li>Experience</li></Link>
        <Link to="/more"><li>More iformation</li></Link>
      </ul>
    </nav>
  );
}

export default Navbar;
