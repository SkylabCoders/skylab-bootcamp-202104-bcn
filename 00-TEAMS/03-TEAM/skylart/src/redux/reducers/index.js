import { combineReducers } from 'redux';
import artworks from './artworksReducer';
import favorites from './favoritesReducer';
import detail from './detailReducer';
import category from './categoryReducer';

const rootReducer = combineReducers({
  artworks,
  favorites,
  detail,
  category,
});

export default rootReducer;
