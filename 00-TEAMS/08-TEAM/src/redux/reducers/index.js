import { combineReducers } from 'redux';
import loginReducer from './authReducer';
import countryReducer from './CountryReducer';
import favoriteReducer from './favoriteReducer';
import globalDataReducers from './GlobalDataReducer';
import vaccineByCountryReducer from './VaccinesByCountryReducer';
import vaccinesByContinentReducer from './VaccinesByContinentReducer';

import VaccinesReducers from './vaccinesReducer';

const rootReducers = combineReducers({
  globalData: globalDataReducers,
  vaccinesContinentData: VaccinesReducers,
  countryData: countryReducer,
  vaccineByCountryData: vaccineByCountryReducer,
  vaccinesByContinent: vaccinesByContinentReducer,
  auth: loginReducer,
  favoriteCountry: favoriteReducer
});

export default rootReducers;
