import React, { useEffect } from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel';
import PropTypes from 'prop-types';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { connect } from 'react-redux';
import { loadMovies } from '../../../../application/store/actions/actionsCreator';
import './styles/style.css';

const MostViwedMovies = ({ myMovies, type, dispatch }) => {
  const baseImgUrl = 'https://image.tmdb.org/t/p/w200/';
  useEffect(() => {
    dispatch(loadMovies(type));
  }, []);

  return (
    <CarouselProvider
      naturalSlideWidth={70}
      naturalSlideHeight={100}
      totalSlides={20}
      visibleSlides={6}
      step={4}
    >
      <Slider className="slider">
        {
         myMovies[type].map((element) => <Slide className="slider__item" key={element.id}><img className="slider__img" src={`${baseImgUrl}${element.poster_path}`} alt="" /></Slide>)
        }
      </Slider>
      <div className="buttons-container">
        <ButtonBack className="buttons-container__backButton">&#60;</ButtonBack>
        <ButtonNext className="buttons-container__nextButton">&#62;</ButtonNext>
      </div>

    </CarouselProvider>
  );
};

MostViwedMovies.propTypes = {
  myMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

const mapStateToProps = ({ movies }) => ({
  myMovies: movies
});

export default connect(mapStateToProps)(MostViwedMovies);
