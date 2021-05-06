import React from 'react';
import { useParams } from 'react-router-dom';

const Products = () => {
  const { id } = useParams();
  const title = 'Products';

  return (
    <section className="products">
      <h2>{title}</h2>
      <h3>
        id:
        {id}
      </h3>
    </section>
  );
};

export default Products;
