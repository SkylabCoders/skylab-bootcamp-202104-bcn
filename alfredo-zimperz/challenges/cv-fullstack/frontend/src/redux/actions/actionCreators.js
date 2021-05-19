import axios from 'axios';
import actionTypes from './actionTypes';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const CVS_ENDPOINT = process.env.REACT_APP_API_CV_ENDPOINT;
const CONTACTS_ENDPOINT = process.env.REACT_APP_API_CONTACT_ENDPOINT;

export const loadCv = (url = BASE_URL + CVS_ENDPOINT) => async (dispatch) => {
  try {
    const { data } = await axios(url);
    dispatch({
      type: actionTypes.LOAD_CV,
      cv: data[0],
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export const createContact = (contact, url = BASE_URL + CONTACTS_ENDPOINT) => async (dispatch) => {
  dispatch({ type: actionTypes.CONTACT_PENDING });

  try {
    await axios.post(url, contact);
    dispatch({
      type: actionTypes.CONTACT_SUCCESS,
    });
  } catch (error) {
    dispatch({ type: actionTypes.CONTACT_RESET });
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export const resetContact = () => (dispatch) => dispatch({
  type: actionTypes.CONTACT_RESET,
});
