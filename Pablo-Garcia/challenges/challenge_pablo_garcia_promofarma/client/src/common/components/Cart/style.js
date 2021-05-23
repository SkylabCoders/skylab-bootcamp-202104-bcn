import styled from 'styled-components';

export const CartWrapper = styled.div`
  padding:15px 20px;
  box-shadow: 4px 4px 16px #ededed;
  Title{
    font-size:1.05rem;
    border-bottom:2px solid #56af6b;
  }
`;
export const List = styled.ul`
  display:flex;
  flex-flow:row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  list-style: none;
  padding-left:0;
`;

export const ItemList = styled.li`
  margin:15px;
`;
