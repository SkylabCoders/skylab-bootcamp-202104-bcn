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
import { connect } from 'react-redux';
import { loadMovies } from '../../../application/store/actions/actionsCreator';
import { TYPE_PARAMS } from '../../services/films';
import './style.css';

// eslint-disable-next-line react/prop-types
function SlideShow({ myMovies, dispatch }) {
  const baseImgUrl = 'https://image.tmdb.org/t/p/original';
  useEffect(() => {
    dispatch(loadMovies(TYPE_PARAMS.upcoming));
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
        {/* eslint-disable-next-line react/prop-types */}
        { myMovies.popular.slice(0, 6).map((element, i) => (
          <Slide key={element.id} index={i} className="slider__section">
            <div className="slider--wrapper--information">
              <span className="slider--information slider__title">{element.title}</span>
              <span className="slider--information slider__vote-average">
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

const mapStateToProps = ({ movies }) => ({
  myMovies: movies
});

export default connect(mapStateToProps)(SlideShow);
