import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import loadMovies from '../../../redux/actions/actionsCreator';
import './styles.css';

const MoviesSlideHead = ({ myMovies, dispatch }) => {
  const baseImgUrl = 'https://image.tmdb.org/t/p/w300';

  useEffect(() => {
    dispatch(loadMovies());
  }, []);

  return (
    <section className="slider">
      <ul>
        {
            myMovies.map((element) => <li key={element.id}><img key={element.id} src={`${baseImgUrl}${element.poster_path}`} alt="" /></li>)
        }
      </ul>
    </section>
  );
};

MoviesSlideHead.propTypes = {
  myMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired
};

// Este countries es el del rootReducer countries: countriesReducer
const mapStateToProps = ({ movies }) => ({
  myMovies: movies
});

export default connect(mapStateToProps)(MoviesSlideHead);
