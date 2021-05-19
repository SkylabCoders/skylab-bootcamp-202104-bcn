import styled from 'styled-components';

export const ItemSingleCart = styled.table`
  display: table;
  width:100%;
`;

export const RowInSingleCart = styled.tr`
  display:flex;
  flex-flow:row wrap;
  justify-content: space-between;
  align-items: center;
  width:100%;
`;

export const ColumnInRow = styled.td`
  width:auto;
`;

export const ColImageProduct = styled.div`
  width:20%;
  img{max-width:100px; border:1px solid #56af6b;}
`;
export const ColNameProduct = styled.div`
  display:block;
 width:65%;
  p{font-size:0.90rem;}
`;
export const ColPriceProduct = styled.div`
  display:block;
 width:15%;
  span{
    display: block;
    font-size: 1rem;
    max-width: 90%;
    margin: 0 auto;
    
`;
