/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/prop-types */
/* eslint-disable no-return-assign */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import './Cart.css';
// import itemsCart from '../constants/items';
import { deleteItem, loadCart } from '../redux/actions/actionCreators';

function CartItems({ dispatch, itemSelect }) {
  let totalPrice = 0;
  useEffect(() => {
    dispatch(loadCart());
  }, [itemSelect]);
  function deleteFromCart(itemId) {
    dispatch(deleteItem(itemId));
  }
  return (
    <>
      <div className="basket">
        <h2 className="barket-title">Mi cesta: </h2>
        {itemSelect.map((item) => (
          <div className="basket-products">
            <img src={item.img} alt="product"></img>
            <div className='basket-products__details'>
              <p>{item.name}</p>
              <p>{`${item.price}€`}</p>
            </div>
              <button type="button" onClick={() => deleteFromCart(item.id)}><i class="far fa-times-circle"></i></button>
          </div>
        ))}
        <div className="barket-price">
        <h3 className="price-title">total</h3>
        <h3 className="price-amount">{`${totalPrice.toFixed(2)} €`}</h3>
      </div>
      </div>
    </>
  );
}

CartItems.propTypes = {
  item: PropTypes.shape([{}]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    itemSelect: store.selectedItem,
    items: store.items,
  };
}

export default connect(mapStateToProps)(CartItems);
