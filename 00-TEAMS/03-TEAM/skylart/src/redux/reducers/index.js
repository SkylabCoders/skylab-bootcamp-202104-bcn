import { combineReducers } from 'redux';
import artworks from './artworksReducer';
import category from './categoryReducer';
import favorites from './detailReducer';
import detail from './favoritesReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
  artworks,
  favorites,
  detail,
  category,
  auth,
});

export default rootReducer;
