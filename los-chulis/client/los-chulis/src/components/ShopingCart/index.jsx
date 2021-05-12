/* eslint-disable no-debugger */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadCart } from '../../redux/actions/actionCreator';

function ShoppingCart({ cartList, dispatch }) {
  debugger;
  useEffect(() => {
    // if (!cartList.length) {
    dispatch(loadCart());
    // }
  }, []);
  return (
    <ul>{cartList.length && cartList.map((product) => <li>{product.brand}</li>)}</ul>
  );
}

ShoppingCart.propTypes = {
  cartList: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ cartList }) {
  return { cartList };
}

export default connect(mapStateToProps)(ShoppingCart);
