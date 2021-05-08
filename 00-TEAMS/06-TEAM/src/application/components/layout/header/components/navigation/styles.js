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
    max-width: 1600px;
    margin: 0 auto;
    > div {
      max-height: 50px;
    }
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
  margin: 5px 15px;
  max-width: 180px;
`;

export const BrandWrapper = styled.div`
  width:15%;
  height: auto;
  display: inline-block;
  max-height: 50px;
  .navbar-brand{
    display:block;
    width:auto;
  }
`;

export const Search = styled.div`
  width:18%;
  height: auto;
  display: inline-block;
  max-height: 50px;
  .navbar-brand{
    display:block;
    width:auto;
  }
`;

export const NavigationWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  padding-left:0;
  width:40%;
  .navbar-nav{
    width: 51%;
    margin: 0 auto 0 100px;
  }
`;
export const LoginWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width:25%;
  margin:0;
  .navbar-nav{
    margin: 0 auto;
    width:100%;
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

export const SearchBar = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width:25%;
`;
