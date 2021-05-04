import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { loadCategoriesFromApi } from '../../redux/actions/actionCreators';
import Footer from '../Common/Footer';
import categoriesToPrint from '../../redux/store/constants/categoriesToPrint';
import { urlDepatments } from '../../redux/store/constants/urls';
import './Home.scss';

function Home({ dispatch, artworks }) {
  useEffect(() => {
    dispatch(loadCategoriesFromApi(urlDepatments));
  }, []);

  function findfavoriteIdDepartment(idToMatch) {
    return categoriesToPrint.some((favoriteValue) => idToMatch === favoriteValue);
  }
  return (
    <>
      <ul className="category-list">
        {
          artworks.length && artworks.map(
            ({ displayName, departmentId }) => findfavoriteIdDepartment(departmentId)
              && (
              <li key={displayName} className="category-list__item">
                <span className="category-name">{displayName}</span>
              </li>
              ),
          )
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
