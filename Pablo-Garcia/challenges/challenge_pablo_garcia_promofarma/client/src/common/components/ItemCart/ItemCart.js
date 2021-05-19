import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeFromCart } from '../../../application/store/actions/actionCreators';
import { ItemSingleCart, RowInSingleCart, ColImageProduct, ColNameProduct, ColPriceProduct } from './style';

const ItemCart = ({ product, productImage, productName, productPrice, dispatch }) => (
  <ItemSingleCart>
    <RowInSingleCart>
      <ColImageProduct><img src={productImage} alt={productName} /></ColImageProduct>
      <ColNameProduct><p>{productName}</p></ColNameProduct>
      <ColPriceProduct><span>{productPrice}</span></ColPriceProduct>
      <button type="button" onClick={() => dispatch(removeFromCart(product))}> X</button>
    </RowInSingleCart>
  </ItemSingleCart>
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
