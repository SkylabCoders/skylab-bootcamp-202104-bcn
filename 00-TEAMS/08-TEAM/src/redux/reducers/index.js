import { combineReducers } from 'redux';
import countryReducer from './CountryReducer';
import globalDataReducers from './GlobalDataReducer';
import vaccineByCountryReducer from './VaccinesByCountryReducer';
import VaccinesReducers from './VaccinesReducer';

const rootReducers = combineReducers({
  globalData: globalDataReducers,
  globalVaccinesData: VaccinesReducers,
  countryData: countryReducer,
  vaccineByCountryData: vaccineByCountryReducer
});

export default rootReducers;
