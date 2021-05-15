import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { deleteAll, deleteProduct, loadProducts } from '../../redux/actions/actionCreators';

function Cart({ dispatch, cart }) {
  function handleDeleteAll(data) {
    dispatch(deleteAll(data));
    dispatch(loadProducts());
  }

  function handleRemoveItemFromCart(product) {
    dispatch(deleteProduct(product));
  }

  return (
    <>
      <h1>This is the cart</h1>
      {
      cart.map((product) => (
        <li>
          {product.productName}
          {product.quantity}
          <button type="button" onClick={() => handleRemoveItemFromCart(product)}>Remove from Cart</button>

        </li>

      ))
        }
      <button type="button" onClick={() => handleDeleteAll(cart)}>DELETE ALL</button>
    </>
  );
}

Cart.propTypes = {
  dispatch: PropTypes.func.isRequired,
  cart: PropTypes.shape([]).isRequired
};

function mapStateToProps({ cart }) {
  return { cart };
}

export default connect(mapStateToProps)(Cart);
