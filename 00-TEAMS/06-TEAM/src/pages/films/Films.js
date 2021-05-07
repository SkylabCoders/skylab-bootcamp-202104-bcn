import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadGridMovies } from '../../application/store/actions/actionsCreator';
import '../tv-shows/styles/styles.css';

const showMoviesGrid = ({ myGrid, dispatch }) => {
  const baseImgUrl = 'https://image.tmdb.org/t/p/w200';

  useEffect(() => {
    dispatch(loadGridMovies());
  }, []);

  return ( // TODO LINK
    <div className="shows-conatiner">
      {myGrid.map((element) => (
        <Link to={`/detail/${element.id}`}>
          <img key={element.id} src={`${baseImgUrl}${element.poster_path}`} alt="" />
        </Link>
      ))}
    </div>
  );
};

showMoviesGrid.propTypes = {
  dispatch: PropTypes.func.isRequired,
  myGrid: PropTypes.shape({
    map: PropTypes.func.isRequired,
    poster_path: PropTypes.string
  }).isRequired
};

const mapStateToProps = ({ moviesGrid }) => ({
  myGrid: moviesGrid
});

export default connect(mapStateToProps)(showMoviesGrid);
