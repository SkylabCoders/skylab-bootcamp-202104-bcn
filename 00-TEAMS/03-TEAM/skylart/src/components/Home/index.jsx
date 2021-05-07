import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadCategoriesFromApi } from '../../redux/actions/actionCreators';
import categoriesToPrint from '../../redux/store/constants/categoriesToPrint';
import { urlDepatments } from '../../redux/store/constants/urls';
import './Home.scss';

function Home({ dispatch, artworks }) {
  useEffect(() => {
    dispatch(loadCategoriesFromApi(urlDepatments));
  }, []);

  function findfavoriteIdDepartment(idToMatch) {
    return categoriesToPrint.some((favoriteValue) => idToMatch === favoriteValue.id);
  }

  return (
    <>
      <ul className="category-list">
        {
          artworks.length && artworks.map(
            ({ displayName, departmentId }) => findfavoriteIdDepartment(departmentId)
              && (
                <Link
                  to={`/category/${departmentId}`}
                  className="category-list__item"
                >
                  <li key={displayName}>
                    <span className="category-name">{displayName}</span>
                  </li>
                </Link>
              ),
          )
        }
      </ul>
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
