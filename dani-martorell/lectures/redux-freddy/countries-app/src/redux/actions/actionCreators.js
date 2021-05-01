import COUNTRIES from '../../data/countries';
import actionTypes from './actionTypes';

export default function loadCountries() {
  return {
    type: actionTypes.LOAD_COUNTRIES,
    countries: COUNTRIES,
  };
}
