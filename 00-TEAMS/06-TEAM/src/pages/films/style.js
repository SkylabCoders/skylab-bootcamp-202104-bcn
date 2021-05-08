import styled from 'styled-components';

export const ContainerFilms = styled.div`
  position:relative;
  display:flex;
  flex-flow:column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  max-width:1440px;
  margin: 3% auto;
  .Heading--Title{
    display: block;
    width:100%;
    font-size: 1.3em;
  }
  
`;

export const Grid = styled.div`
  width:100%;
  display: flex;
  margin: 10px;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: stretch;
`;

export const CardMovie = styled.div`
  margin:10px;
`;
