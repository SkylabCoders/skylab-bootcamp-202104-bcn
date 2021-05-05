/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { getMovieById } from '../../../redux/actions/actionsCreator';

function MovieDetail({ selectedMovie, dispatch }) {
  const { movieId } = useParams();

  useEffect(() => {
    dispatch(getMovieById(movieId));
  }, [movieId]);

  return (
    selectedMovie.id
      ? (
        <div>
          {selectedMovie.id}
          {selectedMovie.original_title}
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
    original_title: PropTypes.string
  }).isRequired
};

function mapStateToProps({ selectedMovie }) {
  return {
    selectedMovie
  };
}

export default connect(mapStateToProps)(MovieDetail);
