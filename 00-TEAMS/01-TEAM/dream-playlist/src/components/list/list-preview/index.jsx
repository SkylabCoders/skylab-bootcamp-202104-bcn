import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getToken, getUserData, loadPlaylists, loadSongsfromPlaylist
} from '../../../redux/actions/actionCreator';
import './list-preview.css';

function ListPreview({
  token, user, playlists, dispatch, songs
}) {
  const [currentToken, setCurrentToken] = useState(token);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentPlaylist, setCurrentPlaylist] = useState(null);

  useEffect(() => {
    if (!token) dispatch(getToken());
  }, [currentToken]);

  if (currentToken === false && token) setCurrentToken(token);

  useEffect(() => {
    if (token) {
      dispatch(getUserData(currentToken));
    }
  }, [currentToken]);

  if (currentUser === null && token && user) {
    setCurrentUser(user);
  }

  useEffect(() => {
    if (token && user) dispatch(loadPlaylists(currentToken, user.id));
  }, [currentUser]);
  if (currentPlaylist === null && playlists.length) {
    setCurrentPlaylist(playlists[0]);
  }

  useEffect(() => {
    if (token && playlists) dispatch(loadSongsfromPlaylist(currentToken, playlists[0]?.id));
  }, [currentPlaylist]);

  return (
    <>
      <div className="userListTitle">
        <h1>
          This is the List of
          {' '}
          {user?.id}
        </h1>
      </div>
      <div className="containerListSongs">
        <ul>
          {songs.length && songs.map((song) => (
            <li>
              <span className="badge">{song.track.album.artists[0]?.name}</span>
              <br />
              <span className="badge">{song.track.album?.images[0]?.url}</span>
              <br />
              <span className="badge">{song.track.name}</span>
              <br />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

ListPreview.propTypes = {
  token: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string
  }).isRequired,
  playlists: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired,
  songs: PropTypes.shape([]).isRequired
};

function mapStateToProps({
  token, user, playlists, songs
}) {
  return {
    token,
    user,
    playlists,
    songs
  };
}

export default connect(mapStateToProps)(ListPreview);
