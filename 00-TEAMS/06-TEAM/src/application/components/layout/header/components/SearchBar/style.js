import styled from 'styled-components';

export const ContainerResults = styled.div`
  position:relative;
  display:block;
`;

export const SearcherInput = styled.input`
 /* position:relative;
  max-width: 100%;
  width:auto;
  color:#212121;
  font-size: 16px;
  padding: 5px;*/
`;

export const ListResult = styled.div`
  display:block;
  background-color:#fff;
  ul{
    display:flex;
    flex-flow:row wrap;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    padding:0;
    margin:0;
    li{
      padding: 10px;
      a{
        display:flex;
        flex-flow:row wrap;
        justify-content: space-between;
        align-items: center;    
        text-decoration:none;
        color:#212121;
        img{
          display:block;
          width:22%;
          margin: 0 auto;
        }
      }
    }
  }
`;

export const InfoMovie = styled.div`
  display:flex;
  flex-flow:column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 70%;
  > *{
    color:#212121;
    margin:3px 0;
  }
  h4{
    font-size:15px
  }
  p{
    font-size: 13px;

  }
  
  
`;
