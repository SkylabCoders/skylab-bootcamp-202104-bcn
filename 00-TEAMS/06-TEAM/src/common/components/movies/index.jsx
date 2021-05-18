import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadMovies } from '../../../application/store/actions/actionsCreator';

const Movies = ({ myMovies, dispatch }) => {
  const baseImgUrl = 'https://image.tmdb.org/t/p/w780';
  useEffect(() => {
    dispatch(loadMovies());
  }, []);
  return (
    <div>
      {myMovies.map((element) => <img key={element.id} src={`${baseImgUrl}${element.poster_path}`} alt="" />)}
    </div>
  );
};

Movies.propTypes = {
  dispatch: PropTypes.func.isRequired,
  myMovies: PropTypes.shape({
    map: PropTypes.func.isRequired,
    poster_path: PropTypes.string
  }).isRequired
};

const mapStateToProps = ({ movies }) => ({
  myMovies: movies
});

export default connect(mapStateToProps)(Movies);
