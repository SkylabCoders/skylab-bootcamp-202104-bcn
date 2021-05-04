import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadProducts } from '../../redux/actions/actionCreators';
import FeaturedProducts from '../Commons/FeaturedProducts';
import ProductsList from '../Commons/ProductsList';
import Slider from '../Commons/Slider';
import './dashboard.css';

const Dashboard = ({ products, dispatch }) => {
  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  return (
    <div className="dashboard">
      <Slider imgSources={[]} />
      <FeaturedProducts products={products} />
      <ProductsList products={products} productsToShow={3} pagination={10} />
    </div>
  );
};

Dashboard.propTypes = {
  products: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ products }) {
  return { products };
}

export default connect(mapStateToProps)(Dashboard);
