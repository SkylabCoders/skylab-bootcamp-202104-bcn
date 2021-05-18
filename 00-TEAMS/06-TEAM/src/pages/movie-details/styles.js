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
export const WrapperInfo = styled.div`
  position:relative;
  display:block;
`;
export const ContainerBackground = styled.div`
  background-image: url(${(props) => props.img});
  width: 100%;
  height: 95vh;
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
  font-family: 'Ubuntu', sans-serif;
  font-size: 0.95em;
  line-height: 1.5em;
  color: #fff;
  width: 100%;

  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-self: center;
    max-width: 55%;
    list-style: none;
    padding-left: 0 !important;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #06bd75;
      border-radius: 10px;
      width: 22%;
      min-height: 30px;
      font-size: 0.80em;
      font-weight: 600;
      letter-spacing: 1.5px;
      margin: 0 15px;
      padding: 0 15px;
    }
  }
`;
export const Cast = styled.span`
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
      max-width: 74%;
      list-style: none;
      padding-left:0 !important;
      li{
        display:flex;
        justify-content: center;
        align-items: center;
        width:15%;
        min-height:30px;
        font-size: 0.85em;
        margin: 0;
        padding:0;
      }
    }
`;
export const CarouselRelated = styled.div`
  
  .slider {
    overflow: hidden;
    position: relative;
      ul{
        li{
          padding:0 !important;
          min-height:300px;
          width: 250px !important;
          .carousel__inner-slide {
            animation: cambio 20s infinite normal;
            height: 100%;
            left: calc(50% - 100px);
            width: auto;
          }
        }
      }
    &__img {
      width: 200px;
      height: 280px;
      margin-left: 4px;

      &:hover {
        cursor: pointer;
        overflow: hidden;
        border: 2px solid yellow;
      }
    }
  }

  .backButton {
    min-height: 10px;
    margin: 0;
    top: 20%;
    -ms-transform: translateY(-50%);
    transform: translateY(-580%);
    font-size: 30px;
    width: 30px;
    opacity: 0.5;
    height: 90px;
  }
  
  .nextButton {
    min-height: 10px;
    margin: 0;
    top: 20%;
    float: right;
    transform: translateY(-580%);
    font-size: 30px;
    width: 30px;
    opacity: 0.5;
    height: 90px;
  }
`;
