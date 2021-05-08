import styled from 'styled-components';

const SearchBar = styled.div`
  margin: 5px 15px;
  max-width: 220px;
  > *{
    display:flex;
    flex-flow:row wrap;
    justify-content: space-between;
    align-items: stretch;
  }
  
  input{
    color:#212121;
    border:0;
    padding:3px 15px;
    & :focus,
    & :active{
      border:0;
    }
  }
  button{
    border:0;
    width:20px;
    height:25px;
  }
`;

export default SearchBar;
