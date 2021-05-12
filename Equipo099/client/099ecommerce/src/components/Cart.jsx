import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
// import itemsCart from '../constants/items';
import { deleteItem } from '../redux/actions/actionCreators';
import './Cart.css'

function CartItems({ dispatch, item , items}) {
  function deleteFromCart(itemId) {
    dispatch(deleteItem(itemId));
  }

  return (
    <>
      <div className="basket">
      <h2>Mi cesta: </h2>
        {items.map((element) => (
          element.id === item.id
            ? (
              <>
              <div className="basket__item">
                <p>{item.name}</p>
                <p>{item.price}</p>
                <button type="button" onClick={() => deleteFromCart(element.id)}>-</button>
                <button type="button">+</button>
              </div>
              </>
            )
            : <p>no hay nada</p>
        ))}
      </div>
    </>
  );
}

CartItems.propTypes = {
  item: PropTypes.shape([{}]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(store) {
  return {
    item: store.selectedItem,
    items: store.items
  };
}

export default connect(mapStateToProps)(CartItems);
