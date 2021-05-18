import React from 'react';
import FooterBar from './FooterBar';
import FooterCopyrigth from './FooterCopyright';
import './footer.css';

const Footer = () => (
  <footer className="footer">
    <FooterBar />
    <FooterCopyrigth />
  </footer>
);

Footer.propTypes = {

};

export default Footer;
