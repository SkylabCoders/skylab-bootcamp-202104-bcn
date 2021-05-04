/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-debugger */
import axios from 'axios';
import actionTypes from './actionTypes';

const URL = 'https://covid-api.mmediagroup.fr/v1/';
const casesUrl = 'cases';
const vaccinesUrl = 'vaccines';

export const loadGlobalData = (url = `${URL}${casesUrl}`) => async (dispatch) => {
  const { data } = await axios.get(url);
  dispatch({
    type: actionTypes.LOAD_GLOBAL,
    data: data.Global.All
  });
};

export const loadCountry = (country) => async (dispatch) => {
  const url = `${URL}${casesUrl}?country=${country}`; // TODO VALIDACION DE INPUT CASES AND TEXT
  const response = await axios.get(url);
  dispatch({
    type: actionTypes.LOAD_COUNTRY,
    data: response.data.All
  });
};

export const loadVaccinesData = (url = `${URL}${vaccinesUrl}`) => async (dispatch) => {
  const { data } = await axios.get(url);

  dispatch({
    type: actionTypes.LOAD_VACCINES,
    data: data.Asia.All
  });
};

export const loadVaccinesByCountry = (country) => async (dispatch) => {
  const url = `${URL}${vaccinesUrl}?country=${country}`; // TODO VALIDACION DE INPUT CASES AND TEXT
  const response = await axios.get(url);
  dispatch({
    type: actionTypes.LOAD_VACCINES_BY_COUNTRY,
    data: response.data.All
  });
};
