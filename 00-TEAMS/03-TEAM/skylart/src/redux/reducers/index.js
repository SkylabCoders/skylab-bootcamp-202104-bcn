import { combineReducers } from 'redux';
import artworks from './artworksReducer';
import favorites from './detailReducer';
import detail from './favoritesReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
  artworks,
  favorites,
  detail,
  auth,
});

export default rootReducer;
