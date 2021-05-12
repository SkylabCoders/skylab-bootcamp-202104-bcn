import React from 'react';
import itemsCart from '../constants/items'

function CartItems(){
    return (
        <>
        <h2>Mi cesta: </h2>
        <div>
        {itemsCart.map(item => {
            return (
                <>
                <h3>{item.name}</h3>
                <p>{"Precio: "+item.price}</p>
                <button type="button">-</button>
                <button type="button">+</button>
                </>
             ) 
         })}
         </div>
         </>
    )
    
}
export default CartItems