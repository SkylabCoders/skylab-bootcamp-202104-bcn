/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadItemById, loadItems } from '../redux/actions/actionCreators';
import './List.css';

const ListItems = ({ items, dispatch }) => {
  useEffect(() => {
    if (!items.length) dispatch(loadItems());
  }, []);
  function addToCart(item) {
    dispatch(loadItemById(item));
  }
  return (
    <div className="items-list">
      {
               items.map((item) => (
                 <>
                   <li className="items-list__item">
                     <span>{item.name}</span>
                     <p className="price">{`${item.price}€`}</p>
                     <button data-testId="addToCart-button-1" type="button" onClick={() => addToCart(item)}>{' '}</button>
                   </li>
                 </>
               ))
           }
    </div>
  );
};

function mapStateToProps(store) {
  return {
    items: store.items,
  };
}

export default connect(mapStateToProps)(ListItems);
