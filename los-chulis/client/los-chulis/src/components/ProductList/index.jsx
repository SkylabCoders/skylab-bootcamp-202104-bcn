/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadProducts, addToCart } from '../../redux/actions/actionCreator';
import './productList.css';

const ProductList = ({ products, dispatch, cartList }) => {
  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  const [activeButton, setDisable] = useState(true);
  function disableButton(product) {
    const btn = document.getElementById(product._id);
    (cartList.forEach((cartProduct) => {
      if (cartProduct._id === product._id && product.stock === cartProduct.quantity) {
        btn.disabled = true;
        setDisable(false);
        btn.className = 'productList__button productList__button--disabled';
      }
    }));
    if (product.stock === 1) {
      btn.disabled = true;
      setDisable(false);
      btn.className = 'productList__button productList__button--disabled';
    }
    setDisable(true);
    return 'productList__button productList__button--active';
  }
  return (
    <ul className="productList">
      {products.length ? products.map((product) => (
        <li className="productList__item" key={product._id}>
          <span>{product.brand}</span>
          <div>
            <span>
              {product.price}
              {' '}
              €
            </span>
            <button
              type="button"
              id={product._id}
              disabled={!product.stock}
              data-testid="button-add-to-cart"
              onClick={() => {
                disableButton(product);
                if (activeButton) { dispatch(addToCart(product)); }
              }}
              className={product.stock === 0
                ? 'productList__button productList__button--disabled '
                : 'productList__button productList__button--active'}
            >
              {' '}
            </button>
          </div>
        </li>
      )) : <p>No products</p>}
    </ul>
  );
};
ProductList.propTypes = {
  products: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired,
  cartList: PropTypes.shape([]).isRequired
};
function mapStateToProps({ products, cartList }) {
  return {
    products,
    cartList
  };
}
export default connect(mapStateToProps)(ProductList);
