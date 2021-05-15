/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
  loadCart, deleteFromCart, updateCart, loadProducts
} from '../../redux/actions/actionCreator';
import './shoppingCart.css';

function ShoppingCart({ cartList, dispatch }) {
  useEffect(() => {
    dispatch(loadCart());
  }, []);

  function getTotalCost(total, cost) {
    return total + cost;
  }
  function cartListTotalCost() {
    const total = cartList.map((x) => x.price * x.quantity);
    return total.reduce(getTotalCost);
  }
  function buyCartList() {
    cartList.forEach((product) => {
      const updatedProduct = { ...product, stock: product.stock - product.quantity };
      dispatch(updateCart(updatedProduct));
    });
    dispatch(loadProducts());
  }

  return (
    <div className="shopping-cart">
      <h3>MI CESTA</h3>
      <ul className="shopping-cart__product-list">
        {cartList.length
          ? cartList.map((product) => (
            <li key={product._id}>
              {product.quantity}
              {'x '}
              {product.brand}
              {': '}
              <span className="shopping-cart__price">
                {product.price}
                {' €  '}
              </span>
              <button type="button" className="button-remove" data-testid="button-remove" onClick={() => dispatch(deleteFromCart(product))}>-</button>
            </li>
          )) : <p>No products at cart</p>}
      </ul>
      <div className="shopping-cart__total-cost">
        Total:
        {' '}
        {cartList.length ? cartListTotalCost() : 0}
        {' €  '}
      </div>
      <button type="button" data-testid="button-buy" onClick={() => buyCartList()}>COMPRAR</button>
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
