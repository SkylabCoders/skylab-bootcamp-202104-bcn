import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '../../../../../../common/assets/brandlogo.svg';

import { HeaderWrapper, BrandImage, NavigationWrapper, NavigationItems, NavigationItem } from './styles';

const Navigation = () => (
  <HeaderWrapper>
    <BrandImage src={BrandLogo} alt={BrandLogo} />
    <NavigationWrapper>
      <NavigationItems>
        <NavigationItem>
          <Link to="/">Home</Link>
        </NavigationItem>
        <NavigationItem>
          <Link to="/blog">Blog</Link>
        </NavigationItem>
        <NavigationItem>
          <Link to="/contact" className="btn-border">Contact Us</Link>
        </NavigationItem>
      </NavigationItems>
    </NavigationWrapper>
  </HeaderWrapper>
);

export default Navigation;
