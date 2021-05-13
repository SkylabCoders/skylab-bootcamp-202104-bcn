import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadProducts, addToCart } from '../../redux/actions/actionCreator';
import './productList.css';

const ProductList = ({ products, dispatch }) => {
  function addProductToCart(product) {
    const btn = document.getElementById(product.id);
    if (product.stock > 0) {
      dispatch(addToCart(product));
    } else {
      btn.disabled = true;
    }
  }

  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  return (
    <ul className="productList">
      {products.map((product) => (
        <li className="productList__item">
          <span>{product.brand}</span>
          <div>
            <span>
              {product.price}
              {' '}
              €
            </span>
            <button type="button" id={product.id} disabled={!product.stock} onClick={() => addProductToCart(product)} className={product.stock === 0 ? 'productList__button productList__button--disabled ' : 'productList__button productList__button--active'}> </button>
          </div>
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
