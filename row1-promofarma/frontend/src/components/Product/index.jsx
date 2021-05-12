import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

function Product({ productItem: { productName, stock, price } }) {
  return (
    <>
      <li>
        {`Product name: ${productName}`}
        <button type="button">ADD to cart</button>
        <ul>
          <li>{`Stock: ${stock}`}</li>
          <li>{`Price ${price} €`}</li>
        </ul>
      </li>
    </>
  );
}

Product.propTypes = {
  productItem: PropTypes.shape({
    productName: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

function mapStateToProps({ products }) {
  return { products };
}

export default connect(mapStateToProps)(Product);
