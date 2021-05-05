import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import authReducers from './authReducers';
import sliderTitleMostViewedReducer from './draw-titles/sliderTitleMostViewedReducer';
import sliderTitleLastRelasesReducer from './draw-titles/sliderTitleLastRelassesReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  auth: authReducers,
  title: sliderTitleMostViewedReducer,
  titleLastRelases: sliderTitleLastRelasesReducer
});

export default rootReducer;
