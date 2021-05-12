import React from 'react';
import itemsCart from '../constants/items'

const CartItems = () => {
    return (
        <h1>Mi cesta: </h1>,
        itemsCart.map(item =>{
            return (
                <>
                <p>{item.name}</p>
                <p>{"Precio: "+item.price}</p>
                </>
             ) 
         })
    )
}
export default CartItems