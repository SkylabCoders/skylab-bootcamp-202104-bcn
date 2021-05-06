import React from 'react';
import PropTypes from 'prop-types';
import './addToCartButton.css';

const AddToCartButton = ({ product }) => (
  <button type="button" className="addToCartButton">
    Add
    {' '}
    {product.name}
    {' '}
    to cart
  </button>
);

AddToCartButton.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    img: {
      url: PropTypes.string.isRequired,
      hdUrl: PropTypes.string.isRequired
    }
  }).isRequired
};

export default AddToCartButton;
