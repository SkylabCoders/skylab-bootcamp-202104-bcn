import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addProductCart } from '../../redux/actions/actionCreators';
import PRODUCTS from './fakeProducts';

function ProductsList(dispatch) {
  return (
    <>

      <h1>Lista de Produtos</h1>
      {
        PRODUCTS.map((product) => (
          <tr>
            <td>
              {product.title}
            </td>
            <td>
              {product.cost}
            </td>
            <button type="button" onClick={() => dispatch(addProductCart({ title: product.title }))}>Añadir ao Carrito</button>
          </tr>
        ))
    }
    </>
  );
}

ProductsList.protoTypes = {
  products: PropTypes.shape([{}]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(store) {
  return {
    products: store.products
  };
}

export default connect(mapStateToProps)(ProductsList);
