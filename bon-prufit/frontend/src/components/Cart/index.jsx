/* eslint-disable no-underscore-dangle */
/* eslint-disable no-debugger */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { deleteProductFromCart, loadCart } from '../../redux/actions/actionCreators';

function Cart({ cart, dispatch }) {
  useEffect(() => {
    if (!cart.length) dispatch(loadCart());
  }, []);

  function handleDeleteProduct(productId) {
    dispatch(deleteProductFromCart(productId));
  }

  function totalPrice(cartToCount) {
    let result = 0;
    if (cartToCount.length) {
      console.log(cartToCount);
      const prices = cartToCount.map(((product) => product.cost));
      console.log(prices);
      result = (accumulator, currentValue) => accumulator + currentValue;
      result = prices.reduce(result);
    }
    return result;
  }

  return (
    <>
      <h2>Mi cesta</h2>
      <ul className="products-list">
        {cart.map((product) => (
          <li>
            <span>{product.title}</span>
            <span>{product.cost}</span>
            <button type="button" className="button-delete" onClick={() => handleDeleteProduct(product._id)}>X</button>
          </li>
        ))}
        <li>
          <span>
            Total
            {' '}
            {cart.length}
            {' '}
            productos
          </span>
          <span>{cart.length && totalPrice(cart)}</span>
        </li>
      </ul>
    </>
  );
}

Cart.propTypes = {
  cart: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ cart }) {
  return {
    cart
  };
}

export default connect(mapStateToProps)(Cart);
