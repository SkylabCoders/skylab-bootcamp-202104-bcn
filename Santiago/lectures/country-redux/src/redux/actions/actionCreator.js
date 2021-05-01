import COUNTRIES from '../../data/countries';
import actionTypes from './actionTypes';

export function loadCountries() {
  return {
    type: actionTypes.LOAD_COUNTRIES,
    // payload: {countries:COUNTRIES}
    countries: COUNTRIES
  };
}

export function fakeCountries() {

}
