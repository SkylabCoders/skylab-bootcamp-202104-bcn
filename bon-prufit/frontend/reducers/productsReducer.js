import actionTypes from '../actions/actionTypes';

function productsReducer( products = [], action){

    switch (action.type) {

        case actionTypes.LOAD_PRODUCTS:
            return action.products;
        
        case actionTypes.UPDATE_PRODUCT:
            return products.map(
                (product) => (product.id === action.product.id
                ? { ...product, ...action.product }
                : product),
            );

        case actionTypes.ERROR_PRODUCT:
            return error;
        
        default:
            return products;
    }
}

export default productsReducer;