import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import authReducers from './authReducers';
import sliderTitleMostViewedReducer from './draw-titles/sliderTitleMostViewedReducer';
import sliderTitleLastRelasesReducer from './draw-titles/sliderTitleLastRelassesReducer';
import sliderTitleMostValuedReducer from './draw-titles/sliderTitleMostValuedReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  auth: authReducers,
  titleMostViewed: sliderTitleMostViewedReducer,
  titleLastRelases: sliderTitleLastRelasesReducer,
  titleMostValued: sliderTitleMostValuedReducer
});

export default rootReducer;
