import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { loadArtworksFromApi, loadDetail } from '../../redux/actions/actionCreators';
import Footer from '../Common/Footer';

function Category({ dispatch, artworks, detail }) {
  useEffect(() => {
    dispatch(loadArtworksFromApi('https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=6&q=cat'));
  }, []);
  return (
    <>
      <ul>
        {artworks.length && artworks.map((id) => {
          useEffect(() => {
            dispatch(loadDetail(id));
          }, []);
          return (
            <li>
              <p>{detail.artistDisplayName}</p>
            </li>
          );
        })}
      </ul>
      <Footer />
    </>
  );
}

Category.propTypes = {
  dispatch: PropTypes.func.isRequired,
  artworks: PropTypes.shape([]).isRequired,
  detail: PropTypes.shape({}).isRequired,
};

function mapStateToProps({ artworks, detail }) {
  return {
    artworks,
    detail,
  };
}

export default connect(mapStateToProps)(Category);
