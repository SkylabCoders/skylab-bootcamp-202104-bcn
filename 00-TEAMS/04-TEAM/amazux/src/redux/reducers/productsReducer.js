import actionTypes from '../actions/actionTypes';
// import PRODUCTS from '../../data/products.mock';

function productsReducer(products = [], action) {
  let updatedProducts = { ...products };

  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      updatedProducts = action.products;
      break;
    default:
      break;
  }
  return updatedProducts;
}

export default productsReducer;
