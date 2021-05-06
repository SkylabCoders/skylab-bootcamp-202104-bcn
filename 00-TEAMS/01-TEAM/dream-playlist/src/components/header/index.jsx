import React from 'react';
import LogIn from '../Login';
import './index-header.css';

function Header() {
  return (
    <header>
      <div className="header-container">
        <img src="https://www.ecestaticos.com/image/clipping/557/418/cf475d592df7554d671971a7838a5461/el-maquillaje-retro-que-ariana-grande-ha-hecho-viral-paso-a-paso.jpg" className="icon" alt="icono" />
        <LogIn />
      </div>
    </header>
  );
}

export default Header;
