import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import {
  ButtonBack, ButtonNext, CarouselProvider, Slide, Slider
} from 'pure-react-carousel';
import { getMovieById, getCastMovie, loadRecomended } from '../../application/store/actions/actionsCreator';
import {
  WrapperMovie, ContainerBackground, Description, Genres, Cast, WrapperInfo
} from './styles';
import Heading from '../../common/components/heading/Heading';
import { Carousel } from '../../common/components/slider-most-viewed/styles';

function MovieDetail({
  selectedMovie, selectedCast, recomendedMovies, dispatch
}) {
  const { movieId } = useParams();

  useEffect(() => {
    dispatch(getMovieById(movieId));
  }, [movieId]);

  useEffect(() => {
    dispatch(getCastMovie(movieId));
  }, [movieId]);

  useEffect(() => {
    dispatch(loadRecomended(movieId));
  }, []);

  const baseImgUrl = 'https://image.tmdb.org/t/p/w300/';
  const baseImgUrlPoster = 'http://image.tmdb.org/t/p/original/';

  return (
    selectedMovie.id ? (
      <>
        <WrapperMovie>
          <ContainerBackground img={`${baseImgUrlPoster}${selectedMovie.backdrop_path}`} />
          <div className="container__info">
            <div className="container__info_col__Left">
              <img className="slider__img" src={`${baseImgUrl}${selectedMovie.poster_path}`} alt="" />
            </div>
            <div className="container__info_col__Right">
              <Heading content={selectedMovie.title} type={1} />
              <span>{selectedMovie.runtime}</span>
              <Description>
                {selectedMovie.overview}
              </Description>
              <Genres>
                <ul>
                  {selectedMovie.genres.map((element) => (
                    <li>
                      {' '}
                      {element.name}
                      {' '}
                    </li>
                  ))}
                </ul>
              </Genres>
              <Cast>
                <ul>
                  {
                    selectedCast.cast?.slice(0, 5).map((element) => (
                      <li>{element.name}</li>
                    ))
                  }
                </ul>

              </Cast>
            </div>
          </div>
        </WrapperMovie>
        <WrapperInfo>
          <Carousel>
            <CarouselProvider
              naturalSlideWidth={70}
              naturalSlideHeight={100}
              totalSlides={20}
              visibleSlides={6}
              step={3}
              infinite="true"
            >
              <Slider className="slider">
                {
                  recomendedMovies.map((movie) => (
                    <Slide className="slider__item" key={movie.id}>
                      <Link to={`/detail/${movie.id}`}>
                        <img className="slider__img" src={`${baseImgUrl}${movie.poster_path}`} alt="" />
                      </Link>
                    </Slide>
                  ))
                }
              </Slider>
              <div className="buttons-container">
                <ButtonBack className="backButton">&#60;</ButtonBack>
                <ButtonNext className="nextButton">&#62;</ButtonNext>
              </div>
            </CarouselProvider>
          </Carousel>
        </WrapperInfo>
      </>
    )
      : (
        <h3>
          There is no hero with id=
          {movieId}
        </h3>
      )
  );
}

MovieDetail.propTypes = {
  dispatch: PropTypes.func.isRequired,
  selectedMovie: PropTypes.shape({
    id: PropTypes.number,
    original_title: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.shape({
      map: PropTypes.func.isRequired,
      id: PropTypes.number,
      name: PropTypes.string
    }),
    poster_path: PropTypes.string,
    runtime: PropTypes.number,
    title: PropTypes.string,
    backdrop_path: PropTypes.string

  }).isRequired,
  selectedCast: PropTypes.shape({
    cast: []
  }).isRequired,
  recomendedMovies: PropTypes.shape([
    {
      id: PropTypes.number,
      name: PropTypes.string
    }
  ]).isRequired
};

function mapStateToProps({ selectedMovie, selectedCast, recomendedMovies }) {
  return {
    selectedMovie,
    selectedCast,
    recomendedMovies
  };
}

export default connect(mapStateToProps)(MovieDetail);
