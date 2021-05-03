import React from 'react';
import PropTypes from 'prop-types';

const FeaturedProducts = ({ products }) => (
  <section className="feactured-products">
    {
        products.length ? (<h2>Hay products</h2>) : (<h2>No hay products</h2>)
    }
  </section>
);

FeaturedProducts.propTypes = {
  products: PropTypes.shape([]).isRequired
};

export default FeaturedProducts;
