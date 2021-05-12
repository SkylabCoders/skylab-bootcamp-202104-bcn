import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

function ProductList({ products }) {
  return (
    <div>
      <h3>PRODUCTS</h3>

      {
        products.map((product) => product.productName)
      }

    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.shape([]).isRequired
};

function mapStateToProps({ products }) {
  return products;
}

export default connect(mapStateToProps)(ProductList);
