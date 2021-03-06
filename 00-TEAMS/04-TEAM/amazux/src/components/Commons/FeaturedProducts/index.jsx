/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loader from '../Loader';
import './featuredProducts.css';

const FeaturedProducts = ({ products, productsToShow }) => (
  <section className="feactured-products">
    {
        products.length ? (
          <div className="product-list">
            {products.slice(0, productsToShow).map((product) => (
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

        ) : <Loader />
    }
  </section>
);

FeaturedProducts.propTypes = {
  products: PropTypes.shape([]).isRequired,
  productsToShow: PropTypes.number
};

FeaturedProducts.defaultProps = {
  productsToShow: 4
};

export default FeaturedProducts;
