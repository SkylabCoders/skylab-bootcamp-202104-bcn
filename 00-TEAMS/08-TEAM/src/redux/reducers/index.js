import { combineReducers } from 'redux';
import countryReducer from './CountryReducer';
import favoriteReducer from './favoriteReducer';
import globalDataReducer from './globalDataReducer';
import vaccineByCountryReducer from './vaccineByCountryReducer';
import vaccinesByContinentReducer from './vaccinesByContinentReducer';
import CountryHistoryReducer from './CountryHistoryReducer';
import vaccineReducer from './vaccineReducer';

const rootReducers = combineReducers({
  globalData: globalDataReducer,
  vaccinesContinentData: vaccineReducer,
  countryData: countryReducer,
  countryHistoryData: CountryHistoryReducer,
  vaccineByCountryData: vaccineByCountryReducer,
  vaccinesByContinent: vaccinesByContinentReducer,
  favoriteCountry: favoriteReducer
});

export default rootReducers;
