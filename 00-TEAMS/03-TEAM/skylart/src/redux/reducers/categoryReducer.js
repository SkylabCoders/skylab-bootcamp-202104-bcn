import actionTypes from '../actions/actionTypes';

function categoryReducer(details = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_CATEGORY:
      // return details.filter((detail) => detail.objectID !== action.artworkId);
      // return details.map(
      //   (detail) => ((detail.objectID === action.artworkId)?
      return [...details, action.detail];
      // : detail),);
    default:
      return details;
  }
}

export default categoryReducer;
