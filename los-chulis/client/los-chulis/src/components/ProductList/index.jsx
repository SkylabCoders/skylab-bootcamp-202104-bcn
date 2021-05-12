import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadProducts, addToCart } from '../../redux/actions/actionCreator';

const ProductList = ({ products, dispatch }) => {
  function addProductToCart(product) {
    dispatch(addToCart(product));
  }

  useEffect(() => {
    // if (!products.length) {
    dispatch(loadProducts());
    // }
  }, []);
  return (
    <ul>
      {products.map((product) => (
        <li>
          {product.brand}
          {' '}
          {product.price}
          <button type="button" onClick={() => addProductToCart(product)}>boton</button>
        </li>
      ))}

    </ul>
  );
};

ProductList.propTypes = {
  products: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(store) {
  return { products: store.products };
}

export default connect(mapStateToProps)(ProductList);
