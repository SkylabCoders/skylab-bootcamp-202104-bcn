import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
// import itemsCart from '../constants/items';
import { loadCart } from '../redux/actions/actionCreators';
function CartItems({ dispatch, itemSelect, items}) {
  useEffect(() => {
    dispatch(loadCart())
  }, [itemSelect])
  // function deleteFromCart(itemId) {
    //   dispatch(deleteItem(itemId));
    // }
    debugger;
    return (
    <>
      <h2>Mi cesta: </h2>
        {itemSelect.map((item) => (
        <p>{item.name}</p>
        ))}
    </>
  );
}

CartItems.propTypes = {
  item: PropTypes.shape([{}]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(store) {
  return {
    itemSelect: store.selectedItem,
    items: store.items
  };
}

export default connect(mapStateToProps)(CartItems);
