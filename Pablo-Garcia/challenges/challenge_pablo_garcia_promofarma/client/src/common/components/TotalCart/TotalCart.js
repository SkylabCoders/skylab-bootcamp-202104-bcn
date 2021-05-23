import React, { useEffect, useState } from 'react';

const TotalCart = ({ cart }) => {
  const [totalPrice, setTotal] = useState(0);
  const [totalProducts, setProducts] = useState(0);

  const calculateTotalPrice = (prev, { price }) => prev + price;
  const calculateTotalProducts = (prev, { quantity }) => prev + quantity;

  useEffect(() => {
    if (cart.length) {
      const price = cart.reduce(calculateTotalPrice, 0);
      const products = cart.reduce(calculateTotalProducts, 0);
      setProducts(products);
      setTotal(price.toFixed(2));
    } else {
      setProducts(0);
      setTotal(0);
    }
  }, [cart]);

  return (
    <div>
      Total
      {' '}
      <div>{`${totalPrice}€`}</div>
    </div>
  );
};

export default TotalCart;
