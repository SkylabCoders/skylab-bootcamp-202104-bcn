import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import ItemCart from '../ItemCart/ItemCart';
import Title from '../../../application/components/Title/Title';
import { CartWrapper, List, TotalCart } from './style';

const Cart = ({ cart }) => (
  <CartWrapper>
    <Title type="2" content="Cart" />
    <List>
      {cart.map((product) => (
        <ItemCart
          product={product}
          productImage={product.img}
          productName={product.name}
          productPrice={product.price}
        />
      ))}
    </List>
    <TotalCart>
      TOTAL:
    </TotalCart>
  </CartWrapper>
);

Cart.propTypes = {
  cart: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

function mapStateToProps({ cart }) {
  return { cart };
}

export default connect(mapStateToProps)(Cart);
