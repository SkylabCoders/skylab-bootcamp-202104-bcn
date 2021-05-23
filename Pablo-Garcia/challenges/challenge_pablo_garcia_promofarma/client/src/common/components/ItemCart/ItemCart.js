import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeFromCart } from '../../../application/store/actions/actionCreators';
import {
  RowInSingleCart,
  ColumnImage,
  ColumnName, ColumnPrice, ColumnButton
} from './style';

const ItemCart = ({ product, productImage, productName, productPrice, dispatch }) => (
  <RowInSingleCart>
    <ColumnImage><img src={productImage} alt={productName} /></ColumnImage>
    <ColumnName><p>{productName}</p></ColumnName>
    <ColumnPrice><span>{productPrice}</span></ColumnPrice>
    <ColumnButton><button type="button" onClick={() => dispatch(removeFromCart(product))}> X</button></ColumnButton>
  </RowInSingleCart>
);
ItemCart.propTypes = {
  cart: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ cart }) {
  return { cart };
}

export default connect(mapStateToProps)(ItemCart);
