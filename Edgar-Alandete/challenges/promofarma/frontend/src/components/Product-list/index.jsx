import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadProducts } from '../../redux/actions/actionCreators';
import './styles.css';
import Product from '../Product';

function ProductList({ products, cart, dispatch }) {
  useEffect(() => {
    if (!products?.length) dispatch(loadProducts());
  }, []);

  return (
    <section className="products">
      <ul className="product-list">
        {
          products.length ? (
            products?.map((product) => (
              <Product productItem={product} cart={cart} />
            ))
          )
            : (
              <p>no hay productos en stock</p>
            )
        }
      </ul>
    </section>
  );
}

ProductList.propTypes = {
  products: PropTypes.shape([]).isRequired,
  cart: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ products, cart }) {
  return { products, cart };
}

export default connect(mapStateToProps)(ProductList);
