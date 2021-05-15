import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { addProduct } from '../../redux/actions/actionCreators';

function Product({
  productItem: {
    _id, productName, stock, price
  }, dispatch
}) {
  function handleAddItemToCart() {
    const newProduct = {
      _id, productName, stock, price
    };
    dispatch(addProduct(newProduct));
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
  }).isRequired
};

function mapStateToProps({ products }) {
  return { products };
}

export default connect(mapStateToProps)(Product);
