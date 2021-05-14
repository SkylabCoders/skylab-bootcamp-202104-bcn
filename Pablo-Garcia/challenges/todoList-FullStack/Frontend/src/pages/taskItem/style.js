import styled from 'styled-components';

const CardTask = styled.div`
  display: block;
  max-width: 50%;
  margin: 0 auto;
  border:1px solid red;
  a{
    display:flex;
    flex-flow:row wrap;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color:#3c3c3c;
    font-family: 'Verdana', sans-serif;
    font-size:16px;
  }
`;

export default CardTask;
