/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from '../Loader/index';
import './productList.css';

const ProductList = ({ products, productsToShow }) => {
  const [initialPosition, setInitialPosition] = useState(0);
  const [lastPosition, setLastPosition] = useState(productsToShow);

  const prev = () => {
    setInitialPosition(initialPosition - (productsToShow * 2));
    setLastPosition(lastPosition - (productsToShow * 2));
  };

  const next = () => {
    setInitialPosition(initialPosition + (productsToShow * 2));
    setLastPosition(lastPosition + (productsToShow * 2));
  };

  const productList = (initialProductPosition, finalProductPosition) => (
    <ul className="products__list">
      {products.slice(initialProductPosition, finalProductPosition).map((element) => (
        <li key={element.name} className="products__item">
          <Link to={`/products/${element._id}`}>
            <img className="products__img" src={element.img.url} alt={element.name} />
            <div className="products__details">
              <span className="products__name">{element.name}</span>
              <span className="products__price">
                {element.cost}
                {' '}
                €
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="product-list">
      <button
        id="prevButton"
        className={
            initialPosition > 0
              ? 'product-list__button--visible'
              : 'product-list__button--hidden'
          }
        type="button"
        onClick={prev}
      >
        {'<'}
      </button>
      {
      products.length ? (
        <div className="products">
          {productList(initialPosition, lastPosition)}
          {productList(initialPosition + productsToShow, lastPosition + productsToShow)}
        </div>
      ) : <Loader />
    }
      { products.length > lastPosition && (
        <button
          id="nextButton"
          className={
            products.length > lastPosition
              ? 'product-list__button--visible'
              : 'product-list__button--hidden'
          }
          type="button"
          onClick={next}
        >
          {'>'}
        </button>
      )}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.shape([]).isRequired,
  productsToShow: PropTypes.number.isRequired
};

export default ProductList;
