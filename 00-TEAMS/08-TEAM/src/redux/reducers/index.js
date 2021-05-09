import { combineReducers } from 'redux';
import countryReducer from './CountryReducer';
import favoriteReducer from './favoriteReducer';
import globalDataReducer from './globalDataReducer';
import vaccineByCountryReducer from './vaccineByCountryReducer';
import vaccineByContinentReducer from './vaccinesByContinentReducer';
import CountryHistoryReducer from './CountryHistoryReducer';
import vaccineReducer from './vaccineReducer';

const rootReducers = combineReducers({
  globalData: globalDataReducer,
  vaccinesContinentData: vaccineReducer,
  countryData: countryReducer,
  countryHistoryData: CountryHistoryReducer,
  vaccineByCountryData: vaccineByCountryReducer,
  vaccinesByContinent: vaccineByContinentReducer,
  favoriteCountry: favoriteReducer
});

export default rootReducers;
