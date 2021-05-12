import actionTypes from '../actions/actionTypes';

function productsReducer( products = [], action){

    switch (action.type) {

        case actionTypes.LOAD_PRODUCTS:
            return action.products;

        case actionTypes.ERROR_PRODUCT:
            return error;
        
        default:
            return products;
    }
}

export default productsReducer;