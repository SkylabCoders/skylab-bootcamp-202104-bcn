import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadSongs } from '../../redux/actions/actionCreator';

function Dashboard({ songs, dispatch }) {
  useEffect(() => {
    if (!songs.length) dispatch(loadSongs());
  }, []);
  return (
    <>
      <h1>This is the Dashboard</h1>
      <ul>
        {
    songs && songs.map(({ songName, artist }) => (
      <li>
        Song:
        {songName}
        {' '}
        || Artist:
        {artist}
      </li>
    ))
}
      </ul>
    </>
  );
}

Dashboard.propTypes = {
  songs: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(store) {
  return {
    songs: store.songs
  };
}

export default connect(mapStateToProps)(Dashboard);
