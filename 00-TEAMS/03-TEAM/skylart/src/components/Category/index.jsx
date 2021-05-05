/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { loadArtworksFromApi, loadDetail } from '../../redux/actions/actionCreators';
import Footer from '../Common/Footer';

function Category({ dispatch, artworks, detail }) {
  useEffect(() => {
    dispatch(loadArtworksFromApi('https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=6&q=cat'));
  }, []);
  console.log(artworks);

  useEffect(() => {
    artworks.map((artwork) => dispatch(loadDetail(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artwork}`)));
  }, [artworks]);
  console.log(detail);
  return (
    <>
      <ul>
        {detail.map((individualDetail) => (
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
  detail: PropTypes.shape([]).isRequired,
};

function mapStateToProps({ artworks, detail }) {
  return {
    artworks,
    detail,
  };
}

export default connect(mapStateToProps)(Category);
