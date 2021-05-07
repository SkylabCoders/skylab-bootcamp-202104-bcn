import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { getMovieById, getCastMovie } from '../../application/store/actions/actionsCreator';
// eslint-disable-next-line import/no-cycle
import {
  WrapperMovie, ContainerBackground, Description, Genres
} from './styles';
import Heading from '../../common/components/TitleSlider/TitleSlider';

function MovieDetail({ selectedMovie, selectedCast, dispatch }) {
  const { movieId } = useParams();
  console.log(selectedCast);
  useEffect(() => {
    dispatch(getMovieById(movieId));
  }, [movieId]);

  useEffect(() => {
    dispatch(getCastMovie(movieId));
  }, [movieId]);

  const baseImgUrl = 'https://image.tmdb.org/t/p/w300/';
  const baseImgUrlPoster = 'http://image.tmdb.org/t/p/original/';

  return (
    selectedMovie.id ? (
      <WrapperMovie>
        <ContainerBackground img={`${baseImgUrlPoster}${selectedMovie.backdrop_path}`} />
        <div className="container__info">
          <div className="container__info_col__Left">
            <img className="slider__img" src={`${baseImgUrl}${selectedMovie.poster_path}`} alt="" />
          </div>
          <div className="container__info_col__Right">
            <Heading Content={selectedMovie.title} Type="1" />
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
          </div>
        </div>
      </WrapperMovie>
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
    id: PropTypes.number,
    name: PropTypes.string
  }).isRequired
};

function mapStateToProps({ selectedMovie, selectedCast }) {
  return {
    selectedMovie,
    selectedCast
  };
}

export default connect(mapStateToProps)(MovieDetail);
