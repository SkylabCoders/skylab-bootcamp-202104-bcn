import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CartHeader = ({ cart }) => {
  function getTotalCost(total, cost) {
    return total + cost;
  }

  function cartListTotalCost() {
    const total = cart.map((x) => x.cost);
    return total.reduce(getTotalCost);
  }

  return (
    <div className="cart-header">
      <h3>
        Total:
        {' '}
        { cart.length ? cartListTotalCost() : 0 }
      </h3>
      <div />
    </div>
  );
};

CartHeader.propTypes = {
  cart: PropTypes.shape([]).isRequired
};

function mapStateToProps({ cart }) {
  return { cart };
}
export default connect(mapStateToProps)(CartHeader);
