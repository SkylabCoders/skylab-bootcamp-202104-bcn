import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { deleteAll, deleteProduct, loadProducts } from '../../redux/actions/actionCreators';
import './styles.css';

function Cart({ dispatch, cart }) {
  const [totalPrice, setTotal] = useState(0);
  const [products, setProducts] = useState(0);

  const calculateTotalPrice = (prev, { quantity, price }) => prev + (quantity * price);
  const calculateTotalProducts = (prev, { quantity }) => prev + quantity;

  useEffect(() => {
    if (cart.length) {
      const total = cart.reduce(calculateTotalPrice, 0);
      setTotal(total.toFixed(2));
    } else {
      setTotal(0);
    }
  }, [cart]);

  useEffect(() => {
    if (cart.length) {
      const total = cart.reduce(calculateTotalProducts, 0);
      setProducts(total);
    } else {
      setProducts(0);
    }
  }, [cart]);
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
              {/* <img src={product.productPoster} alt={product.productName} /> */}
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
        {products
          ? (
            <>
              <div>total</div>
              <div>{`(${products} productos)`}</div>
              <div>{`${totalPrice}€`}</div>
              <button type="button" onClick={() => handleDeleteAll(cart)}>DELETE ALL</button>
            </>
          )

          : (
            <p>no hay productos en la cesta</p>
          )}
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
