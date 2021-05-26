import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProductsList from '../../common/components/Listing/Listing';
import Cart from '../../common/components/Cart/Cart';
import Title from '../../application/components/Title/Title';
import { MainContent, Content, GridProducts, PanelCart } from './style';

const List = ({ products }) => (
  <MainContent>
    <Title type="2" content="Listing Products" />
    <Content>
      <GridProducts>
        <ProductsList products={products} />
      </GridProducts>
      <PanelCart>
        <Cart />
      </PanelCart>
    </Content>
  </MainContent>
);

List.propTypes = {
  products: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

function mapStateToProps({ products }) {
  return { products };
}

export default connect(mapStateToProps)(List);
