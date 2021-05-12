import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import loadProducts from '../../redux/actions/actionCreator';

const ProductList = ({ products, dispatch }) => {
  useEffect(() => {
    if (!products.length) {
      dispatch(loadProducts());
    }
  }, []);
  return (
    <ul>{products.map((product) => <li>{product.brand}</li>)}</ul>
  );
};

ProductList.propTypes = {
  products: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return { products: store.products };
}

export default connect(mapStateToProps)(ProductList);
