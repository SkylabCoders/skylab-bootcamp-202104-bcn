/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadCart, deleteFromCart, updateCart } from '../../redux/actions/actionCreator';
import './shoppingCart.css';

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
    <div className="shopping-cart">
      <h3>MI CESTA</h3>
      <ul className="shopping-cart__product-list">
        {cartList.length
      && result.map((product) => (
        <li key={product._id}>
          {cartList.filter((element) => product === element).length}
          {'x '}
          {product.brand}
          {': '}
          <span className="shopping-cart__price">
            {product.price}
            {' €  '}
          </span>
          <button type="button" onClick={() => dispatch(deleteFromCart(product))}>-</button>
        </li>
      ))}
      </ul>
      <div className="shopping-cart__total-cost">
        Total:
        {' '}
        {cartList.length ? cartListTotalCost() : 0}
      </div>
      <button type="button" onClick={buyCartList}>COMPRAR</button>
    </div>
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
