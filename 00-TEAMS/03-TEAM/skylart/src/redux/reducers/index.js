import { combineReducers } from 'redux';
import artworks from './artworksReducer';
import favorites from './favoritesReducer';
import detail from './detailReducer';

const rootReducer = combineReducers({
  artworks,
  favorites,
  detail,
});

export default rootReducer;
