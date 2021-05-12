import { cominedReducers } from 'redux';
import productsReducer from './productsReducer';

const rootReducer = cominedReducers({
    products: productsReducer
});

export default rootReducer;