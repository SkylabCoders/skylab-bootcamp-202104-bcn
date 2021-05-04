/* eslint-disable no-debugger */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { filterProductsByKeyList, splitQueryStringIntoArray } from '../../helpers/index';
import { loadProducts } from '../../redux/actions/actionCreators';

const Search = ({ products, dispatch }) => {
  const { searchQuery } = useParams();
  const [foundProducts, setFoundProducts] = useState([]);
  useEffect(() => {
    if (!products.length) {
      dispatch(loadProducts());
    }
  }, []);

  useEffect(() => {
    console.log('searchQuery');
    const keyWordsArray = splitQueryStringIntoArray(searchQuery);
    if (products.length) setFoundProducts(filterProductsByKeyList(products, keyWordsArray));
    console.log('found', foundProducts);
  }, [searchQuery, products]);

  return (
    <div>
      <h2>{searchQuery}</h2>
    </div>
  );
};

Search.propTypes = {
  products: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ products }) {
  return { products };
}

export default connect(mapStateToProps)(Search);
