import React from 'react';
import './footer.css';
import BrandLogo from '../assets/BrandLogo.svg';

const Footer = () => (
  <>
    <div className="footer">
      <div className="footer-logo">
        <img className="footer-logo__img" src={BrandLogo} alt="" />
      </div>
      <div className="footer-info">
        <p>Quiénes somos</p>
        <p>Condiciones de uso</p>
        <p>Política de privacidad y cookies</p>
        <p>Trabaja con nosotros</p>
      </div>
      <div className="footer-films">
        <p>Películas más vistas</p>
        <p>Películas recomendadas</p>
        <p>Películas populares</p>
        <p>Películas de terror</p>
      </div>
    </div>
  </>
);

export default Footer;
