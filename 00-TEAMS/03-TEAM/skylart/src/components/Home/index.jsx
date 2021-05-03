import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { loadArtworksFromApi } from '../../redux/actions/actionCreators';

function Home({ dispatch, artworks }) {
  useEffect(() => {
    // eslint-disable-next-line no-debugger
    debugger;
    dispatch(loadArtworksFromApi());
  }, []);
  return (
    <ul>
      {
      artworks.length
      && artworks.map(({ displayName }) => (
        <li key={displayName}>
          {displayName}
        </li>
      ))
      }
    </ul>
  );
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  artworks: PropTypes.shape([]).isRequired,
};

function mapStateToProps({ artworks }) {
  return {
    artworks,
  };
}

export default connect(mapStateToProps)(Home);
