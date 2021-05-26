import styled from 'styled-components';

export const List = styled.ul`
  display:flex;
  flex-flow:row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  list-style: none;
`;

export const ItemList = styled.li`
  max-width: 350px;
  margin:15px;
  border: 1px solid rgba(193, 189, 189, 0.36);
`;

export const GridButtons = styled.div`
  display:flex;
  flex-flow:row wrap;
  justify-content: space-between;
  align-items: center;
  width:100%;
`;

export const Quantity = styled.div`
  display:flex;
  flex-flow:row wrap;
  justify-content: space-between;
  align-items: stretch;
  width:40%;
  button{
    border:0;
    background-color:#56af6b;
    color:#fff;
    font-size: 1.25rem;
    padding: 6px 12px;
    line-height: 1.5em;
    width: 42%
  }
`;

export const AddCart = styled.div`
  display:flex;
  flex-flow:row wrap;
  justify-content: space-evenly;
  align-items: stretch;
  width:40%;
  button{
    border:0;
    background-color:#56af6b;
    color:#fff;
    font-size: 1.08rem;
    padding: 8px 14px;
    line-height: 1.5em;
  }
`;
