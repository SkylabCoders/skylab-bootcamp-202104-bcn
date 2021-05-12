import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addProductToCart, loadProducts } from '../../redux/actions/actionCreators';
// import PRODUCTS from '../../constants/products.mock';

function ProductsList({ products, dispatch }) {
  useEffect(() => {
    if (!products) dispatch(loadProducts);
  }, []);

  return (
    <>

      <h1>Lista de Produtos</h1>
      {
        products?.map((product) => (
          <tr>
            <td>
              {product.title}
            </td>
            <td>
              {product.cost}
            </td>
            <button type="button" onClick={() => dispatch(addProductToCart({ title: product.title }))}>Añadir ao Carrito</button>
          </tr>
        ))
    }
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
