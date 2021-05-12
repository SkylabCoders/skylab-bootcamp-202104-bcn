import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { loadProducts } from '../../redux/actions/actionCreators';

function ProductList({ products, dispatch }) {
  useEffect(() => {
    if (!products?.length) dispatch(loadProducts());
  }, []);

  return (
    <div>
      <h3>PRODUCTS</h3>
      <ul>
        {
        products?.map((product) => (
          <li>
            { product?.productName}
            { product?.price }
          </li>
        ))
      }
      </ul>

    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ products }) {
  return { products };
}

export default connect(mapStateToProps)(ProductList);
