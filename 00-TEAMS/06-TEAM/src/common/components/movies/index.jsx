import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import loadMovies from '../../../redux/actions/actionsCreator';

const Movies = ({ myMovies, dispatch }) => {
  const baseImgUrl = 'https://image.tmdb.org/t/p/w780';
  useEffect(() => {
    dispatch(loadMovies());
  }, []);
  return (
    <div>
      {
            myMovies.map((element) => <img key={element.id} src={`${baseImgUrl}${element.poster_path}`} alt="" />)
        }

    </div>
  );
};

Movies.propTypes = {
  myMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired
};

// Este countries es el del rootReducer countries: countriesReducer
const mapStateToProps = ({ movies }) => ({
  myMovies: movies
});

export default connect(mapStateToProps)(Movies);
