import React from 'react';
import PropTypes from 'prop-types';
import './addToCartButton.css';
import { connect } from 'react-redux';
import { addProduct } from '../../../redux/actions/actionCreators';

const AddToCartButton = ({ product, dispatch }) => {
  const handleClick = () => {
    dispatch(addProduct(product));
  };
  return (
    <button type="button" className="addToCartButton" onClick={handleClick}>
      Add
      {' '}
      {product.name}
      {' '}
      to cart
    </button>
  );
};

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
  }).isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(null)(AddToCartButton);
