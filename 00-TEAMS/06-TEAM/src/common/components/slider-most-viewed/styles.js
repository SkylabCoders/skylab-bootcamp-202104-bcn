import styled from 'styled-components';

export const Carousel = styled.div`
  
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

  .buttons-container {
    display: flex;
    justify-content: space-between;
    min-height: 10px;
    margin: 0;
    top: 20%;
    -ms-transform: translateY(-50%);
    transform: translateY(-580%);

    &__backButton,
    &__nextButton {
      font-size: 30px;
      width: 30px;
      opacity: 0.5;
      height: 90px;
    }
  }
`;
