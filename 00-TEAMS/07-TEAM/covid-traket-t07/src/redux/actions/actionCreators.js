import axios from 'axios';
import actionTypes from './actionTypes';

const URL = 'https://covid-api.mmediagroup.fr/v1/';
const casesUrl = 'cases';
// eslint-disable-next-line no-unused-vars
const vaccinesUrl = 'vaccines';

const loadGlobalData = (url = `${URL}${casesUrl}`) => async (dispatch) => {
  const response = await axios.get(url);
  dispatch({
    type: actionTypes.LOAD_GLOBAL,
    data: response.data
  });
};

export default loadGlobalData;
