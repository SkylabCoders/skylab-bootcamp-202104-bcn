/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addToCart, buyProducts, loadProducts } from '../redux/actionsCreators';

function List({ products, dispatch }) {
  useEffect(() => {
    if (!products.length) dispatch(loadProducts());
  }, []);

  return (
    <>
      <ul>
        {products.map((product) => (
          <>
            <li>
              {product.name}
              , stock
              {' '}
              {product.stock}
            </li>
            <button
              onClick={() => dispatch(addToCart(product))}
              type="button"
            >
              Add to cart
            </button>
          </>
        ))}

      </ul>

      <button
        onClick={() => dispatch(buyProducts())}
        type="button"
      >
        buy
      </button>
    </>

  );
}

List.propTypes = {
  products: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps({ products }) {
  return { products };
}
export default connect(mapStateToProps)(List);
