import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadTvShows } from '../../application/store/actions/actionsCreator';
import './styles/styles.css';

const TvShows = ({ myShows, dispatch }) => {
  const baseImgUrl = 'https://image.tmdb.org/t/p/w200';

  useEffect(() => {
    dispatch(loadTvShows());
  }, []);

  // eslint-disable-next-line no-console
  console.log(myShows);

  return (
    <div className="shows-conatiner">
      {myShows.map((element) => (
        <img key={element.id} src={`${baseImgUrl}${element.poster_path}`} alt="" />
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
