import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { loadArtworksFromApi } from '../../redux/actions/actionCreators';
import Footer from '../Common/Footer';
import './Home.scss';

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
    <>
      <ul className="category-list">
        {
          artworks.length
          && artworks.map(({ displayName, departmentId }) => findfavoriteIdDepartment(departmentId)
              && (
              <li key={displayName} className="category-list__item">
                {displayName}
              </li>
              ))
        }
      </ul>
      <Footer />
    </>
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
