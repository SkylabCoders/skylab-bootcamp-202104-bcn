import React, { useState } from 'react';
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

  // const list = productsToShow;
  // const min = 0;
  return (
    <div className="product-list">
      <button type="button" onClick={prev}>{'<'}</button>
      {
      products.length ? (
        <div className="products">
          <ul className="products__list">
            {products.slice(initialPosition, lastPosition).map((element) => (
              <li key={element.name} className="products__item">
                <img className="products__img" src={element.img.url} alt={element.name} />
                <div className="products__details">
                  <span className="products__name">{element.name}</span>
                  <span className="products__price">
                    {element.cost}
                    {' '}
                    €
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <ul className="products__list">
            {products.slice(initialPosition + productsToShow, lastPosition + productsToShow)
              .map((element) => (
                <li key={element.name} className="products__item">
                  <img className="products__img" src={element.img.url} alt={element.name} />
                  <div className="products__details">
                    <span className="products__name">{element.name}</span>
                    <span className="products__price">
                      {element.cost}
                      {' '}
                      €
                    </span>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      ) : <Loader />
    }
      <button type="button" onClick={next}>{'>'}</button>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.shape([]).isRequired,
  productsToShow: PropTypes.number.isRequired
};

export default ProductList;
