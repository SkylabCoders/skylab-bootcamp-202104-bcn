import { createGlobalStyle } from 'styled-components';

import FontRegularWoff from './Poppins-Regular.woff';
import UbuntuRegularWoff2 from './Poppins-Regular.woff2';

import FontMediumWoff from './Poppins-Medium.woff';
import FontMediumWoff2 from './Poppins-Medium.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: local('Font Name'), local('FontName'),
        url(${UbuntuRegularWoff2}) format('woff2'),
        url(${FontRegularWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
    },
    @font-face {
      font-family: 'PoppinsMedium';
      src: local('Font Name'), local('FontName'),
      url(${FontMediumWoff2}) format('woff2'),
      url(${FontMediumWoff}) format('woff');
      font-weight: 500;
      font-style: auto;
    }
`;
