import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addProductToCart, loadProducts } from '../../redux/actions/actionCreators';
import './list.css';

function ProductsList({ products, dispatch }) {
  useEffect(() => {
    if (!products.length) dispatch(loadProducts());
  }, []);

  return (
    <>
      <h1 className="list-tittle">Productos</h1>
      <ul className="products-list">
        {
          products?.map((product) => (
            <li className="products-list__product">
              <span className="product-name">
                {product.title}
              </span>
              <span className="product-cost">
                {product.cost}
              </span>
              <button type="button" className="button-add" onClick={() => dispatch(addProductToCart(product))}>+</button>
            </li>
          ))
        }
      </ul>
    </>
  );
}

ProductsList.propTypes = {
  products: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ products }) {
  return {
    products
  };
}

export default connect(mapStateToProps)(ProductsList);
