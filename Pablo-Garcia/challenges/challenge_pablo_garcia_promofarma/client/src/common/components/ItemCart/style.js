import styled from 'styled-components';

export const RowInSingleCart = styled.tr`
  display:flex;
  flex-flow:row wrap;
  justify-content: space-between;
  align-items: center;
  width:100%;
  margin:5px auto;
`;

export const ColumnImage = styled.td`
  width:15%;
  img{max-width:100px; border:1px solid #56af6b;}
`;
export const ColumnName = styled.td`
  display:block;
 width:55%;
  p{font-size:0.90rem; padding: 0 25px;}
`;
export const ColumnPrice = styled.td`
  display:block;
  width:15%;
  span{
    display: block;
    font-size: 1rem;
    max-width: 90%;
    margin: 0 auto;
    
`;
export const ColumnButton = styled.td`
  display:block;
  width:10%;
  button{
    border:0;
    background-color:#56af6b;
    color:#fff;
    padding:4px 15px;
  }
`;
