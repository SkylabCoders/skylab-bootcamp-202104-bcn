/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { loadArtworksFromApi, loadCategory } from '../../redux/actions/actionCreators';
import Footer from '../Common/Footer';

function Category({ dispatch, artworks, category }) {
  useEffect(() => {
    dispatch(loadArtworksFromApi(6));
  }, []);

  useEffect(() => {
    artworks.slice(1, 6).map((artworkId) => dispatch(loadCategory(artworkId)));
  }, [artworks]);
  return (
    <>
      <ul>
        {category.map((individualDetail) => (
          <>
            {' '}
            <p>{individualDetail.accessionYear}</p>
            <img
              src={individualDetail.primaryImageSmall}
              alt={individualDetail.primaryImageSmall}
            />
          </>
        ))}
      </ul>
      <Footer />
    </>
  );
}

Category.propTypes = {
  dispatch: PropTypes.func.isRequired,
  artworks: PropTypes.shape([]).isRequired,
  category: PropTypes.shape([]).isRequired,
};

function mapStateToProps({ artworks, category }) {
  return {
    artworks,
    category,
  };
}

export default connect(mapStateToProps)(Category);
