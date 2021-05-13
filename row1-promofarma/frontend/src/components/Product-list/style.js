import styled from 'styled-components';

const List = styled.ul`
  display:flex;
  flex-flow:column wrap;
  list-style: none;
  > li{
    display:flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    max-width:90%;
    box-shadow: 4px 4px 16px #efefef;
    padding:15px;
    button{
      background-color:lightgreen;
      color:#8CBF02;
      border:0;
      border-radius:4px;
    }
  }
  
`;
export default List;
