import styled from 'styled-components';

export const WrapperMovie = styled.div`
  position:relative;
  display:block;
  .container__info{
    position: absolute;
    top: 0;
    left:0;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    min-height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    .container__info_col__Left{
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-end;
      align-items: center;
      width: 40%;
      img{
        margin:25px;
      }
    }
    .container__info_col__Right{
      display: flex;
      flex-flow: column wrap;
      justify-content: flex-start;
      align-items: flex-start;
      width: 60%;
      *{
        margin-left:0;
        font-family: 'Ubuntu',sans-serif;
      }
    }
  }
`;

export const ContainerBackground = styled.div`
  background-image: url(${(props) => props.img});
  width: 100%;
  height: 65vh;
  background-size: 100%;
  background-position: 0% 39%;
  background-repeat: no-repeat;
`;

export const Description = styled.p`
  font-family: 'Ubuntu',sans-serif;
  font-size:1.10em;
  line-height: 1.5em;
  color:#fff;
  max-width:50%;
`;

export const Genres = styled.span`
  font-family: 'Ubuntu',sans-serif;
  font-size:0.95em;
  line-height: 1.5em;
  color:#fff;
  width:100%;
    ul{
      display:flex;
      flex-flow:row wrap;
      justify-content: flex-start;
      align-self: center;
      max-width: 55%;
      list-style: none;
      padding-left:0 !important;
      li{
        display:flex;
        justify-content: center;
        align-items: center;
        border:1px solid #fff;
        border-radius:10px;
        width:15%;
        min-height:30px;
        font-size: 0.75em;
        margin: 0 15px;
        padding:0;
      }
    }
`;
