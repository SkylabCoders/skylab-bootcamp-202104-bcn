import styled from 'styled-components';

export const Navigation = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  background-color:#000000;
  height:60px;
  .header__wrapper__container {
    display: flex;
    flex-flow:row wrap;
    justify-content: space-between;
    align-content: center;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
  }
  a{
    text-decoration: none;
    color:#fff;
    font-family: 'Ubuntu';
    text-transform: capitalize;
  }
  ul{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;  
    padding-left:0;
     li{
       list-style: none;
       margin:4px 20px;
     }
  }
`;
export const BrandImage = styled.img`
  display:block;
  margin:15px 20px;
  max-width: 180px;
`;

export const BrandWrapper = styled.div`
  width:20%;
  .navbar-brand{
    display:block;
    width:auto;
  }
`;
export const NavigationWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding-left:0;
  width:60%;
`;
export const LoginWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  width:20%;
  ul{
    margin:15px 20px;
  }
`;

export const LoginBtn = styled.div`
  button {
    background-color: #cdc11d;
    color: #000000;
    font-family: 'Ubuntu',sans-serif;
    font-weight: 600;
    text-transform: capitalize;
    border:0;
    padding:8px 35px; 
  }
`;
