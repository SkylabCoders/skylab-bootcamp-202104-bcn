import React from 'react';
import itemsCart from '../constants/items'

const CartItems = () => {
    return (
        <h1>Mi cesta: </h1>,
        itemsCart.map(item =>{
            return (
                <>
                <h3>{item.name}</h3>
                <p>{"Precio: "+item.price}</p>
                <button type="button">-</button>
                <button type="button">+</button>
                </>
             ) 
         })
        )
    
}
export default CartItems