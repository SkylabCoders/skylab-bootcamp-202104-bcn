/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

function Cart({ cart, dispatch }) {
  return (
    <ul>
      {cart.map((product) => <li>{product.name}</li>)}
    </ul>
  );
}

Cart.propTypes = {
  cart: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ cart }) {
  return { cart };
}
export default connect(mapStateToProps)(Cart);
