import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

function Product({ productItem: { productName } }) {
  return (
    <li>{productName}</li>
  );
}

Product.propTypes = {
  productItem: PropTypes.shape({
    productName: PropTypes.string.isRequired
  }).isRequired
};

function mapStateToProps({ products }) {
  return { products };
}

export default connect(mapStateToProps)(Product);
