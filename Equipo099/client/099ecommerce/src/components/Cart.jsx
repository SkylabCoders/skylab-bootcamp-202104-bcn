import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
// import itemsCart from '../constants/items';
import { deleteItem } from '../redux/actions/actionCreators';

function CartItems({ dispatch, item , items}) {
  function deleteFromCart(itemId) {
    dispatch(deleteItem(itemId));
  }
  debugger;
  return (
    <>
      <h2>Mi cesta: </h2>
      <div>
        {items.map((element) => (
          element.id === item.id
            ? (
              <>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <button type="button" onClick={() => deleteFromCart(element.id)}>-</button>
                <button type="button">+</button>
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
