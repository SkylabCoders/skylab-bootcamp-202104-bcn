import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/index';

const ProductList = ({ products }) => (
  <div className="product-list">
    {
      products.length ? (
        <div className="product-list">Hay productos</div>
      ) : <Loader />
    }
  </div>
);

ProductList.propTypes = {
  products: PropTypes.shape([]).isRequired
  // productsToShow: PropTypes.number
};

export default ProductList;
