import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { loadArtworksFromApi } from '../../redux/actions/actionCreators';
import Footer from '../Common/Footer';

function Category({ dispatch, artworks }) {
  useEffect(() => {
    dispatch(loadArtworksFromApi('https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=6&q=cat'));
  }, []);
  return (
    <>
      <ul>
        {artworks.length && artworks.map((artwork) => (
          <li>
            <p>{artwork}</p>
          </li>
        ))}
      </ul>
      <Footer />
    </>
  );
}

Category.propTypes = {
  dispatch: PropTypes.func.isRequired,
  artworks: PropTypes.shape([]).isRequired,
};

function mapStateToProps({ artworks }) {
  return {
    artworks,
  };
}

export default connect(mapStateToProps)(Category);
