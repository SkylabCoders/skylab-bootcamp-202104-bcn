import { createGlobalStyle } from 'styled-components';

import UbuntuRegularWoff from './Ubuntu-Regular.woff';
import UbuntuRegularWoff2 from './Ubuntu-Regular.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Ubuntu';
        src: local('Font Name'), local('FontName'),
        url(${UbuntuRegularWoff2}) format('woff2'),
        url(${UbuntuRegularWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
