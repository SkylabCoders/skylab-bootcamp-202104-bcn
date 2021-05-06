import React, {
  useEffect
} from 'react';
import {
  CarouselProvider,
  Slider,
  Slide
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadGenres, loadMovies } from '../../../application/store/actions/actionsCreator';
import { TYPE_PARAMS } from '../../services/films';
import './style.css';

function SlideShow({ myMovies, dispatch }) {
  const baseImgUrl = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    dispatch(loadMovies(TYPE_PARAMS.upcoming));
  }, []);
  useEffect(() => {
    dispatch(loadGenres());
  }, []);
  const truncatestring = (str) => (str.length > 150 ? `${str.substring(0, 149)}...` : str);
  return (
    <CarouselProvider
      naturalSlideWidth={1000}
      naturalSlideHeight={650}
      totalSlides={6}
      visibleSlides={1}
      currentSlide={0}
      isPlaying="true"
      interval={3000}
      infinite="true"
    >
      <Slider>
        { myMovies.popular.slice(0, 6).map((element, i) => (
          <Slide key={element.id} index={i} className="slider__section">
            <div className="slider--wrapper--information">
              <span className="slider--information slider__title">{element.title}</span>
              <span className="slider--information slider__vote-average">
                IMDB:
                {' '}
                {truncatestring(element.overview)}
              </span>
            </div>
            <Link to={`${element.id}`}>
              <img className="slider__image" key={element.id} src={`${baseImgUrl}${element.backdrop_path}`} alt="" />
            </Link>
            {' '}
          </Slide>
        ))}
      </Slider>
    </CarouselProvider>
  );
}

SlideShow.propTypes = {
  myMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ movies }) => ({
  myMovies: movies
});

export default connect(mapStateToProps)(SlideShow);
