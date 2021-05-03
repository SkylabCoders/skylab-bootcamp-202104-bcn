import styled from 'styled-components';

const Navigation = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  background-color:#000000;
  a{
    text-decoration: none;
    color:#fff;
  }
  ul{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;  
     li{
       list-style: none;
     }
  }
`;
export default Navigation;
