/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './featuredProducts.css';

const FeaturedProducts = ({ products }) => (
  <section className="feactured-products">
    {
        products.length ? (
          <div className="product-list">
            {products.slice(0, 4).map((product) => (
              <div className="product" key={product._id}>
                <Link to={`/products/${product._id}`}>
                  <h3>{product.name}</h3>
                  <img src={product.img.url} alt={product.name} />
                  <p>
                    {`${product.cost} €`}
                  </p>
                </Link>
              </div>
            ))}
          </div>

        ) : (<h2>No hay products</h2>)
    }
  </section>
);

FeaturedProducts.propTypes = {
  products: PropTypes.shape([]).isRequired
};

export default FeaturedProducts;
