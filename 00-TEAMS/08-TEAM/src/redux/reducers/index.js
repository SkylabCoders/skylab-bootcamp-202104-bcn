import { combineReducers } from 'redux';
import countryReducer from './CountryReducer';
import globalDataReducers from './GlobalDataReducer';
import vaccineByCountryReducer from './VaccinesByCountryReducer';
import VaccinesReducers from './vaccinesReducer';

const rootReducers = combineReducers({
  globalData: globalDataReducers,
  vaccinesContinentData: VaccinesReducers,
  countryData: countryReducer,
  vaccineByCountryData: vaccineByCountryReducer
});

export default rootReducers;
