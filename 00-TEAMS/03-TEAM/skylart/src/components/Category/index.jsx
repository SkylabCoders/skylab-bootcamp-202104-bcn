import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { loadArtworksFromApi, loadCategory } from '../../redux/actions/actionCreators';
import Footer from '../Common/Footer';
import './Category.scss';

function Category({ dispatch, artworks, category }) {
  const { categoryId } = useParams();
  useEffect(() => {
    dispatch(loadArtworksFromApi(categoryId));
  }, []);

  useEffect(() => {
    artworks.slice(1, 16).map((artworkId) => dispatch(loadCategory(artworkId)));
  }, [artworks]);
  return (
    <>
      <ul className="category">
        {category.length && category?.map((individualDetail) => (
          <li className="category__item">
            <img
              src={individualDetail.primaryImageSmall}
              alt={individualDetail.primaryImageSmall}
            />
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
  category: PropTypes.shape([]).isRequired,
};

function mapStateToProps({ artworks, category }) {
  return {
    artworks,
    category,
  };
}

export default connect(mapStateToProps)(Category);
