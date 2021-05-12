import React from 'react';
<<<<<<< HEAD
import itemsCart from '../constants/items';

function ListItems() {
  // function addToCart(itemId){
  //     dispatch(addItem(itemId));
  // }
  return (
    itemsCart.map((item) => (
      <>
        <p>{item.name}</p>
        <p>{`Precio: ${item.price}`}</p>
        <p>{`Stock: ${item.stock}`}</p>
        <button type="button" onClick={() => console.log((item.id))}>Add to Cart</button>
      </>
    ))
  );
}
export default ListItems;
=======

const ListItems = ({items, dispatch}) => {
    
  
    function addToCart(itemId){
        dispatch(loadItemById(itemId))
    }

    return (
        items.map(item =>{
           return (
               <>
            <p>{item.name}</p>
            <p>{"Precio: "+item.price}</p>
            <p>{"Stock: "+item.stock}</p>
            <button type="button" onClick={() => addToCart(item.id)}>Add to Cart</button>
            </>
            ) 
        })
    )
}

function mapStateToProps(store) {
    return {
      items: store.items,
    };
  }
  
  export default connect(mapStateToProps)(ListItems);
>>>>>>> challenge/team099
