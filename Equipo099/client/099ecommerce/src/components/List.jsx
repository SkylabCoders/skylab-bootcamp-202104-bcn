import React from 'react';
import itemsCart from '../constants/items'

const ListItems = () => {
    // function addToCart(itemId){
    //     dispatch(addItem(itemId));
    // }
    return (
        itemsCart.map(item =>{
           return (
               <>
            <p>{item.name}</p>
            <p>{"Precio: "+item.price}</p>
            <p>{"Stock: "+item.stock}</p>
            <button type="button" onClick={() => console.log((item.id))}>Add to Cart</button>
            </>
            ) 
        })
    )
}
export default ListItems