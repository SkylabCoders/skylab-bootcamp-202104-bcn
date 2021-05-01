import axios from 'axios';
import actionTypes from './actionsTypes';

const URL = 'https://restcountries.eu/rest/v2/all';

export default function loadCountries(url = URL) {
  return async (dispatch) => {
    const response = await axios.get(url);
    dispatch({
      type: actionTypes.LOAD_COUNTRIES,
      countries: response.data
    });
  };
}

export function fakeCountries() {

}
