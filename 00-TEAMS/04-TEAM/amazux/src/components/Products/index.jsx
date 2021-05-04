import React from 'react';
import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';

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

Products.propTypes = {

};

export default Products;
