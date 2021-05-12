/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addToCart, loadProducts } from '../redux/actionsCreators';

function List({ products, dispatch }) {
  useEffect(() => {
    if (!products.length) dispatch(loadProducts());
  }, []);

  return (
    <>
      <ul>
        {products.map((product) => (
          <>
            <li>{product.name}</li>
            <button
              onClick={() => dispatch(addToCart(product))}
              type="button"
            >
              Add to cart
            </button>
          </>
        ))}

      </ul>

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
