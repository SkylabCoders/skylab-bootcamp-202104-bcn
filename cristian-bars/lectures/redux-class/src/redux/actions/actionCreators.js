import COUNTRIES from '../../data/countries';
import actionTypes from './actionsTypes';

export function loadCountries() {
  return {
    type: actionTypes.LOAD_COUNTRIES,
    countries: COUNTRIES
  };
}

export function fakeCountries() {

}
