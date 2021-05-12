import { cominedReducers } from 'redux';
import productsReducer from './productsReducer';
import selectedProduct from './selectedproductReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    selectedProduct: selectedproductReducer,
});

export default rootReducer;