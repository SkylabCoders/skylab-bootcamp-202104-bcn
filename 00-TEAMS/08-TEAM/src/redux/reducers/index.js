import { combineReducers } from 'redux';
import countryReducer from './CountryReducer';
import favoriteReducer from './favoriteReducer';
import globalDataReducers from './GlobalDataReducer';
import vaccineByCountryReducer from './VaccinesByCountryReducer';
import vaccinesByContinentReducer from './VaccinesByContinentReducer';
import CountryHistoryReducer from './CountryHistoryReducer';

import VaccinesReducers from './vaccinesReducer';

const rootReducers = combineReducers({
  globalData: globalDataReducers,
  vaccinesContinentData: VaccinesReducers,
  countryData: countryReducer,
  countryHistoryData: CountryHistoryReducer,
  vaccineByCountryData: vaccineByCountryReducer,
  vaccinesByContinent: vaccinesByContinentReducer,
  favoriteCountry: favoriteReducer
});

export default rootReducers;
