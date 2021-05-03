import { combineReducers } from 'redux';
import artworks from './artworksReducer';
import favorites from './detailReducer';
import detail from './favoritesReducer';

const rootReducer = combineReducers({
  artworks,
  favorites,
  detail,
});

export default rootReducer;
