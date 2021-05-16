import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { deleteAll, deleteProduct, loadProducts } from '../../redux/actions/actionCreators';
import './styles.css';

function Cart({ dispatch, cart }) {
  function handleDeleteAll(data) {
    dispatch(deleteAll(data));
    dispatch(loadProducts());
  }

  function handleRemoveItemFromCart(product) {
    dispatch(deleteProduct(product));
  }

  return (
    <section className="cart">
      <header>
        <h3>mi cesta:</h3>
      </header>

      <ul className="cart-list">
        {
          cart.map((product) => (
            <li className="cart-list__item">
              <div className="item item--left">
                {`${product.productName} x${product.quantity}`}
              </div>

              <div className="item item--right">
                {`${product.price}€`}
                <button type="button" onClick={() => handleRemoveItemFromCart(product)}>
                  <i className="far fa-times-circle" />
                </button>
              </div>

            </li>

          ))
        }
      </ul>
      <footer className="cart-footer">
        <div>total</div>
        <div>price</div>
        <button type="button" onClick={() => handleDeleteAll(cart)}>DELETE ALL</button>
      </footer>
    </section>
  );
}

Cart.propTypes = {
  dispatch: PropTypes.func.isRequired,
  cart: PropTypes.shape([]).isRequired
};

function mapStateToProps({ cart }) {
  return { cart };
}

export default connect(mapStateToProps)(Cart);
