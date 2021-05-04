import React, {
  useEffect,
  useState
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
import loadMovies from '../../../redux/actions/actionsCreator';
import './style.css';

function slideShow({ myMovies, dispatch }) {
  const baseImgUrl = 'https://image.tmdb.org/t/p/original';
  const [autoPlayBool, setBool] = useState(true);
  useEffect(() => {
    dispatch(loadMovies());
    setBool(true);
  }, []);

  return (
    <CarouselProvider
      naturalSlideWidth={1000}
      naturalSlideHeight={650}
      totalSlides={4}
      visibleSlides={1}
      currentSlide={0}
      isPlaying={autoPlayBool}
      interval={60000}
      infinite="true"
    >
      <Slider>
        { myMovies.slice(0, 4).map((element, i) => (
          <Slide key={element.id} index={i} className="slider__section">
            <span className="slider--information slider__title">{element.title}</span>
            <span className="slider--information slider__vote-average">
              IMDB:
              {' '}
              {element.vote_average}
            </span>
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

slideShow.propTypes = {
  myMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ movies }) => ({
  myMovies: movies
});

export default connect(mapStateToProps)(slideShow);
