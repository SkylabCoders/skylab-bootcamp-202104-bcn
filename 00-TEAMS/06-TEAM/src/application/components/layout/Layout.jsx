import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Header from './header/Header';
import Footer from './footer/Footer';

const Layout = () => (
  <>
    <Header />
    <Footer />
  </>

);

export default withAuthenticationRequired(Layout);
