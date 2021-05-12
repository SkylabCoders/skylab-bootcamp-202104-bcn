import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {loadItemById, loadItems} from '../redux/actions/actionCreators'

const ListItems = ({items, dispatch}) => {
    
    useEffect(() => {
       if (!items.length)dispatch(loadItems())
    }, [])
    function addToCart(item){
        dispatch(loadItemById(item))
    }
    return (
        items.map(item =>{
           return (
               <>
            <p>{item.name}</p>
            <p>{"Precio: "+item.price}</p>
            <p>{"Stock: "+item.stock}</p>
            <button type="button" onClick={() => addToCart(item)}>Add to Cart</button>
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
