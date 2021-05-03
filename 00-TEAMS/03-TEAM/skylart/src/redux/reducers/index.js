import { combineReducers } from 'redux';
import artworksReducer from './artworksReducer';
import detailReducer from './detailReducer';
import favoritesReducer from './favoritesReducer';

const rootReducer = combineReducers({
  artworks: artworksReducer,
  favorites: favoritesReducer,
  detail: detailReducer,
});

export default rootReducer;
