import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
// import itemsCart from '../constants/items';
import { deleteItem } from '../redux/actions/actionCreators';

function CartItems({ dispatch, itemId , items}) {
  function deleteFromCart(itemId) {
    dispatch(deleteItem(itemId));
  }
  debugger;
  return (
    <>
      <h2>Mi cesta: </h2>
      <div>
        {items.map((element) => (
          element.id === itemId
            ? (
              <>
                <p>{element.name}</p>
                <p>{element.price+"€"}</p>
                <button type="button" onClick={() => deleteFromCart(element.id)}>-</button>
                <button type="button">+</button>
              </>
            )
            : null
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
    itemId: store.selectedItem,
    items: store.items
  };
}

export default connect(mapStateToProps)(CartItems);
