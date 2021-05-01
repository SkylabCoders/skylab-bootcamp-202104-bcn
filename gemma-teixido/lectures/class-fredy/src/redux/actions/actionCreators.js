import COUNTRIES from '../../data/countries';
import actionTypes from './actionTypes';

export function loadCountries() {
  return {
    type: actionTypes.LOAD_COUNTRIES,
    countries: COUNTRIES
  };
}

export function fakeFunction() {

}
