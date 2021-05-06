/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { loadProducts } from '../../redux/actions/actionCreators';
import Loader from '../Commons/Loader';
import AddToCartButton from '../Commons/AddToCartButton';
import './Products.css';

const Products = ({ products, dispatch }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (!products.length) dispatch(loadProducts());
  }, []);

  useEffect(() => {
    if (products.length && id) setSelectedProduct(products.find((product) => product._id === id));
  }, [products]);

  return (
    selectedProduct
      ? (
        <section className="product">
          <div className="product__image">
            <img src={selectedProduct.img.hdUrl} alt={selectedProduct.name} />
          </div>
          <div className="product__info">
            <h2 className="product__title">{selectedProduct.name}</h2>
            <p className="product__category">
              Category:
              {' '}
              {selectedProduct.category}
            </p>
            <p className="product__price">
              Price:
              {' '}
              {selectedProduct.cost}
              {' '}
              €
            </p>
            <AddToCartButton product={selectedProduct} />
            <p className="product__description">
              Description:
              {' '}
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
                eligendi! Aperiam, facilis. Aliquid numquam accusantium quaerat
                exercitationem officiis veniam odit sit vitae autem qui?
                Repellat possimus velit accusamus ea soluta.
              </span>
            </p>
            <p className="product__sku">
              SKU:
              {' '}
              {selectedProduct._id}
            </p>
          </div>
        </section>
      ) : <Loader />
  );
};

Products.propTypes = {
  products: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ products }) {
  return { products };
}

export default connect(mapStateToProps)(Products);
