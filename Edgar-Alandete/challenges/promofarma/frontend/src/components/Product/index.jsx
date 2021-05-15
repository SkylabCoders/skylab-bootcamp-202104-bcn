/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { addProduct } from '../../redux/actions/actionCreators';

function Product({
  productItem: {
    _id, productName, stock, price
  }, cart, dispatch
}) {
  const [selectedProduct, setSelectedProduct] = useState();

  useEffect(() => {
    if (cart.length) {
      if (selectedProduct) {
        console.log('todo');
      }
    }
  }, [cart]);
  function handleAddItemToCart() {
    const newProduct = {
      _id, productName, stock, price
    };
    dispatch(addProduct(newProduct));
    setSelectedProduct(newProduct);
  }

  return (
    <>
      <li>
        {`Product name: ${productName}`}
        <button type="button" onClick={handleAddItemToCart}>ADD to cart</button>
        <ul>
          <li>{`Stock: ${stock}`}</li>
          <li>{`Price ${price} €`}</li>
        </ul>
      </li>
    </>
  );
}

Product.propTypes = {
  dispatch: PropTypes.func.isRequired,
  productItem: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,

  cart: PropTypes.shape([]).isRequired
};

function mapStateToProps({ products, cart }) {
  return { products, cart };
}

export default connect(mapStateToProps)(Product);
