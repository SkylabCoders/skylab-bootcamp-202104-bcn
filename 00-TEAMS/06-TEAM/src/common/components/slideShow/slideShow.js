import React, { useEffect } from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import loadMovies from '../../../redux/actions/actionsCreator';
import './style.css';

function slideShow({ myMovies, dispatch }) {
  const baseImgUrl = 'https://image.tmdb.org/t/p/original';
  useEffect(() => {
    dispatch(loadMovies());
  }, []);

  return (
    <CarouselProvider
      naturalSlideWidth={1000}
      naturalSlideHeight={650}
      totalSlides={4}
      visibleSlides={1}
      currentSlide={0}
    >
      <Slider>
        { myMovies.slice(0, 4).map((element) => (
          <Slide key={element.id} className="slider__section">
            <Link to={`${element.id}`}><img className="slider__image" key={element.id} src={`${baseImgUrl}${element.backdrop_path}`} alt="" /></Link>
            {' '}
          </Slide>
        ))}
      </Slider>
      <ButtonBack>&#60;</ButtonBack>
      <ButtonNext>&#62;</ButtonNext>
    </CarouselProvider>
  );
}

slideShow.propTypes = {
  myMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ movies }) => ({
  myMovies: movies
});

export default connect(mapStateToProps)(slideShow);
