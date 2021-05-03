import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { loadArtworksFromApi } from '../../redux/actions/actionCreators';

function Home({ dispatch, artworks }) {
  useEffect(() => {
    dispatch(loadArtworksFromApi());
  }, []);

  const categoriesToPrint = [
    1, 5, 6, 10, 11, 13,
  ];
  function findfavoriteIdDepartment(idToMatch) {
    return categoriesToPrint.some((favoriteValue) => idToMatch === favoriteValue);
  }
  return (
    <ul>
      {
    artworks.length
    && artworks.map(({ displayName, departmentId }) => findfavoriteIdDepartment(departmentId)
        && (
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
