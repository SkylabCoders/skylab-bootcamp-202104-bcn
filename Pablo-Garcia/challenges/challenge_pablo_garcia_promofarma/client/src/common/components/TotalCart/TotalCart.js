import React from 'react';
import TotalWrapper from './style';

const TotalCart = ({ cart }) => {
  const calcTotalPrice = () => cart.reduce((total, item) => total + item.price, 0);
  const totalPrice = calcTotalPrice();
  return (
    <TotalWrapper>
      <span>Total</span>
      {' '}
      {totalPrice}
    </TotalWrapper>
  );
};

export default TotalCart;
