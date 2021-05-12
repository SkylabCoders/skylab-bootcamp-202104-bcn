// import axios from 'axios';
import actionTypes from './actionTypes';

// const url = 'http://localhost:2300/products';

function loadProducts() {
  return { type: actionTypes.LOAD_PRODUCT };
  //   return async (dispatch) => {
  //     try {
  //       const { data } = await axios(url);
  //       dispatch({
  //         type: actionTypes.LOAD_PRODUCT,
  //         products: data,
  //       });
  //     } catch (error) {
  //       dispatch({
  //         type: 'LOAD_PRODUCT_ERROR',

//       });
//     }
//   };
}

export default loadProducts;
