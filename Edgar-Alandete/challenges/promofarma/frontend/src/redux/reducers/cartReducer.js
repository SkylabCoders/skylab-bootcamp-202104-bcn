/* eslint-disable no-case-declarations */
/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/actionTypes';

function cartReducer(products = [], action) {
  let newProducts = [...products];
  switch (action.type) {
    case actionTypes.DELETE_PRODUCT:
      newProducts.splice(newProducts.findIndex((product) => (
        product._id === action.product._id), 1));
      break;
    case actionTypes.ADD_PRODUCTS:
      let productToAdd;
      const itemIndex = newProducts
        .findIndex(({ _id }) => action.product._id === _id);

      if (itemIndex > -1) {
        newProducts.map(
          // eslint-disable-next-line no-return-assign
          (product) => (action.product._id === product._id
            // eslint-disable-next-line no-param-reassign
            ? { ...product, quantity: product.quantity += 1 }
            : product)
        );
      } else {
        productToAdd = { ...action.product, quantity: 1 };
        newProducts = [...newProducts, productToAdd];
      }
      break;
    case actionTypes.DELETE_ALL:
      newProducts = [];
      break;

    default:
      return products;
  }

  return newProducts;
}

export default cartReducer;
