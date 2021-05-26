import React from 'react';
import Card from './style';

const ProductCard = ({ name, description, price, img }) => (
  <Card>
    <img src={img} alt={name} />
    <h3>{name}</h3>
    <p>{description}</p>
    <span>{price}</span>
  </Card>
);

export default ProductCard;
