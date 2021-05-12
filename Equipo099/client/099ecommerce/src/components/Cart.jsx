import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
// import itemsCart from '../constants/items';
import { deleteItem, loadCart } from '../redux/actions/actionCreators';
function CartItems({ dispatch, itemSelect}) {
  let precioTotal= 0;
  useEffect(() => {
    dispatch(loadCart())
  }, [itemSelect])
  function deleteFromCart(itemId) {
      dispatch(deleteItem(itemId));
    }
    debugger;
    return (
    <>
      <h2>Mi cesta: </h2>
        {itemSelect.map((item) => (
          <>
        <p>{item.name}</p>
        <p>{item.price+"€"}</p>
        <button type="button" onClick={()=>deleteFromCart(item.id)}>X</button>
        {precioTotal += item.price}
        </>
        ))}
        <h2>{"Precio= "+precioTotal}</h2>
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
