import COUNTRIES from '../../../data/countries';
import actionTypes from './actionTypes';

export const loadCountries = () => ({
  type: actionTypes.LOAD_COUNTRIES,
  countries: COUNTRIES,
});

export const fakeFunction = () => {

};
