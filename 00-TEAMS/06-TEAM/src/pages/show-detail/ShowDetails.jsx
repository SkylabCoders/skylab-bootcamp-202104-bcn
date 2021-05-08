import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import {
  ButtonBack, ButtonNext, CarouselProvider, Slide, Slider
} from 'pure-react-carousel';
import { getShowById, loadRecommendedShows } from '../../application/store/actions/actionsCreator';
import {
  WrapperMovie, ContainerBackground, Description, Genres, WrapperInfo
} from '../movie-details/styles';
import Heading from '../../common/components/heading/Heading';
import { Carousel } from '../../common/components/slider-most-viewed/styles';

function ShowDetail({ selectedShow, recommendedShows, dispatch }) {
  const { showId } = useParams();

  useEffect(() => {
    dispatch(getShowById(showId));
  }, [showId]);

  useEffect(() => {
    dispatch(loadRecommendedShows(showId));
  }, []);

  const baseImgUrl = 'https://image.tmdb.org/t/p/w300/';
  const baseImgUrlPoster = 'http://image.tmdb.org/t/p/original/';

  return (
    selectedShow.id ? (
      <>
        <WrapperMovie>
          <ContainerBackground img={`${baseImgUrlPoster}${selectedShow.backdrop_path}`} />
          <div className="container__info">
            <div className="container__info_col__Left">
              <img className="slider__img" src={`${baseImgUrl}${selectedShow.poster_path}`} alt="" />
            </div>
            <div className="container__info_col__Right">
              <Heading content={selectedShow.name} />
              <Description>
                {selectedShow.overview}
              </Description>
              <Genres>
                <ul>
                  {selectedShow.genres.map((element) => (
                    <li>
                      {' '}
                      {element.name}
                      {' '}
                    </li>
                  ))}
                </ul>
              </Genres>
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
                  recommendedShows.map((movie) => (
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
          {showId}
        </h3>
      )
  );
}

ShowDetail.propTypes = {
  dispatch: PropTypes.func.isRequired,
  selectedShow: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
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
  recommendedShows: PropTypes.shape([
    {
      id: PropTypes.number,
      name: PropTypes.string
    }
  ]).isRequired
};

function mapStateToProps({ selectedShow, recommendedShows }) {
  return {
    selectedShow,
    recommendedShows
  };
}

export default connect(mapStateToProps)(ShowDetail);
