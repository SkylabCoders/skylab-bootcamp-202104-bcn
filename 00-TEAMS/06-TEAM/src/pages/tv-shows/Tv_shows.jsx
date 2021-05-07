import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadTvShows } from '../../application/store/actions/actionsCreator';
import './styles/styles.css';

const TvShows = ({ myShows, dispatch }) => {
  const baseImgUrl = 'https://image.tmdb.org/t/p/w200';

  useEffect(() => {
    dispatch(loadTvShows());
  }, []);

  return (
    <div className="shows-conatiner">
      {myShows.map((element) => (
        <Link to={`/detail/${element.id}`}>
          <img key={element.id} src={`${baseImgUrl}${element.poster_path}`} alt="" />
        </Link>
      ))}
    </div>
  );
};

TvShows.propTypes = {
  dispatch: PropTypes.func.isRequired,
  myShows: PropTypes.shape({
    map: PropTypes.func.isRequired,
    poster_path: PropTypes.string
  }).isRequired
};

const mapStateToProps = ({ shows }) => ({
  myShows: shows
});

export default connect(mapStateToProps)(TvShows);
