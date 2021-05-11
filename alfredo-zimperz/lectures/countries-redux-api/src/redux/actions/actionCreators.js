import axios from 'axios';
import actionTypes from './actionTypes';

const URL = 'https://restcountries.eu/rest/v2/all';

export function loadCountries(url = URL) {
  return async (dispatch) => {
    const response = await axios.get(url);
    dispatch({
      type: actionTypes.LOAD_COUNTRIES,
      countries: response.data,
    });
  };
}

export function fakeFunction() {
  return {
    type: 'FAKE_TYPE',
    data: 'fakeData',
  };
}
