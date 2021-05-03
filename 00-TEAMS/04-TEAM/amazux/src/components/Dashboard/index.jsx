import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadProducts } from '../../redux/actions/actionCreators';

const Dashboard = ({ products, dispatch }) => {
  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {
        products?.length && (
          products.map((product) => <li>{product.name}</li>)
        )
      }
      </ul>

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
