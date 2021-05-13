/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadCart, deleteFromCart, updateCart } from '../../redux/actions/actionCreator';

function ShoppingCart({ cartList, dispatch }) {
  useEffect(() => {
    dispatch(loadCart());
  }, []);

  function getTotalCost(total, cost) {
    return total + cost;
  }
  function cartListTotalCost() {
    const total = cartList.map((x) => x.price);
    return total.reduce(getTotalCost);
  }
  function buyCartList() {
    cartList.forEach((product) => {
      const updatedProduct = { ...product, stock: product.stock - 1 };
      dispatch(updateCart(updatedProduct));
    });
  }

  const result = cartList.filter((item, index) => cartList.indexOf(item) === index);
  return (
    <>
      <ul>
        {cartList.length
      && result.map((product) => (
        <li key={product._id}>
          {cartList.filter((element) => product === element).length}
          {'x '}
          {product.brand}
          {': '}
          {product.price}
          {' €  '}
          <button type="button" onClick={() => dispatch(deleteFromCart(product))}>-</button>
        </li>
      ))}
      </ul>
      <div>
        Total:
        {' '}
        {cartList.length ? cartListTotalCost() : 0}
      </div>
      <button type="button" onClick={buyCartList}>COMPRAR</button>
    </>
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
