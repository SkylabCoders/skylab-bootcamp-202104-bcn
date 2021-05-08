import styled from 'styled-components';

export const ContainerFilms = styled.div`
  position:relative;
  display:flex;
  flex-flow:row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  max-width:1440px;
  margin: 3% auto;
  .Heading--Title{
    font-size: 1.3em;
  }
  a{
    img{
      margin:15px;
    }
  }
`;
