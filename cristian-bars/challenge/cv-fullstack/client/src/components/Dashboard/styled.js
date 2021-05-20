import styled from 'styled-components';

const size = {
  mobile: '600px',
  tablet: '900px'
};

const device = {
  tabletSize: `(min-width: ${size.mobile})`,
  desktopSize: `(min-width: ${size.tablet})`
};

export const PersonalImg = styled.img`
  width: 70px;
`;

export const Container = styled.div`
  width: 100%;
  background-color: pink;
  
  @media ${device.tabletSize} { 
    width: 80%;
    background-color: green;
  }
  
  @media ${device.desktopSize} { 
    width: 50%;
  background-color: blue;
  }
`;
