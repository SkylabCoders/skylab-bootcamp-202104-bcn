/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { getMovieById } from '../../application/store/actions/actionsCreator';

function MovieDetail({ selectedMovie, dispatch }) {
  const { movieId } = useParams();
  useEffect(() => {
    dispatch(getMovieById(movieId));
  }, [movieId]);

  console.log(selectedMovie);
  const baseImgUrl = 'https://image.tmdb.org/t/p/w200/';

  return (
    selectedMovie.id
      ? (
        <div>
          <span>
            TITULO:
            {selectedMovie.title}
          </span>
          <br />
          <span>
            TITULO ORIGINAL:
            {selectedMovie.original_title}
          </span>
          <br />
          <span>
            GENERO:
            {selectedMovie.genres.map((element) => element.name)}
          </span>
          <br />
          <span>
            DURACION:
            {selectedMovie.runtime}
          </span>
          <br />
          <span>
            RESUMEN:
            {selectedMovie.overview}
          </span>
          <br />
          <span>
            BANNER:
            <br />
            <img className="slider__img" src={`${baseImgUrl}${selectedMovie.backdrop_path}`} alt="" />
          </span>
        </div>
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
    runtime: PropTypes.number,
    title: PropTypes.string,
    backdrop_path: PropTypes.string

  }).isRequired
};

function mapStateToProps({ selectedMovie }) {
  return {
    selectedMovie
  };
}

export default connect(mapStateToProps)(MovieDetail);
