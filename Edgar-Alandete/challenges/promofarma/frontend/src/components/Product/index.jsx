/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { addProduct } from '../../redux/actions/actionCreators';
import buttonDisabler from '../../assets/utils';

function Product({
  productItem, cart, dispatch
}) {
  const productToUpdate = { ...productItem };
  const [selectedProduct, setSelectedProduct] = useState();

  useEffect(() => {
    const button = document.getElementById(selectedProduct?._id);
    if (cart.length && selectedProduct) {
      const cartProduct = cart.find((product) => (
        product._id === selectedProduct._id
      ));
      buttonDisabler(cartProduct, button);
    } else if (button) button.disabled = false;
  }, [cart]);

  function handleAddItemToCart() {
    dispatch(addProduct(productToUpdate));
    setSelectedProduct(productToUpdate);
  }

  return (
    <>
      <li>
        {`Product name: ${productItem.productName}`}
        <button type="button" id={productItem._id} onClick={handleAddItemToCart}>ADD to cart</button>
        <ul>
          <li>{`Stock: ${productItem.stock}`}</li>
          <li>{`Price ${productItem.price} €`}</li>
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
