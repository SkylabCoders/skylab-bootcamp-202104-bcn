import styled from 'styled-components';

const GlobalStyle = styled.div`
  
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #f4f4f4;
  
  nav {
    display:flex;
    flex-flow:row nowrap;
    justify-content: center;
    align-items: center;
    background-color: #000000; 
    padding:10px;
    a{
      color:#fff;
      text-decoration: none;
      font-family: 'Verdana',sans-serif;
      font-size:15px;
      margin:0 10px;
      padding:4px 10px;
    }
  }
`;

export default GlobalStyle;
