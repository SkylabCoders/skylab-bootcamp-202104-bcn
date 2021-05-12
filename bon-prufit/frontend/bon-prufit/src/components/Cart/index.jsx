  /* eslint-disable no-debugger */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { deleteProduct, loadProducts } from '../../redux/actions/actionCreators';

function Cart({ products, dispatch }) {
  useEffect(() => {
    if (!products.length) dispatch(loadProducts());
  }, [products]);

  function handleDeleteProduct(productId) {
    dispatch(deleteProduct(productId));
  }

  function totalPrice(products) {
    const prices = products.map((product => product.cost));
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return prices.reduce(reducer);
  }
 
  return (
    <>
      <h2>Mi cesta</h2>
      <ul className="products-list">
        {products.map((product) => (
          <li>
            <span>{product.title}</span>
            <span>{product.cost}</span>
            <button type="button" className="button-delete" onClick={() => handleDeleteProduct(product.id)}>X</button>
          </li>
        ))}
        <li>
          <span>Total {products.length} productos</span> 
          <span>{totalPrice(products)}</span>
        </li>
      </ul>
    </>
  );
}

Cart.propTypes = {
  products: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    products: store.products,
  };
}

export default connect(mapStateToProps)(Cart);