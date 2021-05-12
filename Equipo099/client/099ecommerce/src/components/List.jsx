import React from 'react';
import itemsCart from '../constants/items'

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
