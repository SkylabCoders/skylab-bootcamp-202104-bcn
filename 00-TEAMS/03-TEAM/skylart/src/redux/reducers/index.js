import { combineReducers } from 'redux';
import artworks from './artworksReducer';
import category from './categoryReducer';
import detail from './detailReducer';
import auth from './authReducer';
import favorites from './favoritesReducer';

const rootReducer = combineReducers({
  artworks,
  detail,
  category,
  auth,
  favorites,
});

export default rootReducer;
