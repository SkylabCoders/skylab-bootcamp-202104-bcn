import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import { addToCart, loadProducts } from '../../../application/store/actions/actionCreators';
import { List, ItemList, GridButtons, Quantity, AddCart } from './style';

const ProductsList = ({ products, dispatch }) => {
  useEffect(() => {
    if (!products.length) dispatch(loadProducts());
  }, []);

  return (
    <>
      <List>
        {
          products.map((product, index) => (
            <ItemList key={product._id} data-testid={`product-item-${index}`}>
              <ProductCard
                img={product.img}
                name={product.name}
                description={product.description}
                price={product.price}
              />
              <GridButtons>
                <Quantity>
                  <button
                    type="button"
                    onClick={() => dispatch()}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={() => dispatch()}
                  >
                    -
                  </button>
                </Quantity>
                <AddCart>
                  <button
                    data-testid="add-to-card"
                    type="button"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add to cart
                  </button>
                </AddCart>
              </GridButtons>

            </ItemList>
          ))
        }
      </List>
    </>
  );
};
ProductsList.propTypes = {
  products: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ products }) {
  return { products };
}
export default connect(mapStateToProps)(ProductsList);
