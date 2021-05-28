import styled from 'styled-components';

export const PanelTask = styled.div`
  display:flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: flex-start;
  max-width:60%;
  margin:25px auto;
  background-color:#ffffff;
  box-shadow: 4px 4px 16px #efefef;
`;
export const CounterTask = styled.span`
  display:inline-flex;
  width: 90%;
  margin: 25px auto 10px;
  font-family: 'Verdana', sans-serif;
`;
export const ListTasks = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100%;

  ul {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    list-style: none;
    padding-left: 0;

    li {
      width: 100%;
      max-width: 90%;
      border: 1px solid rgba(74, 87, 93, 0.23);
      margin: 10px; 
    }
  }
`;
