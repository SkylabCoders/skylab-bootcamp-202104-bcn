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

export const loadVaccinesByCountry = (country) => async (dispatch) => {
  const url = `${URL}${vaccinesUrl}?country=${country}`; // TODO VALIDACION DE INPUT CASES AND TEXT
  const response = await axios.get(url);
  dispatch({
    type: actionTypes.LOAD_VACCINES_BY_COUNTRY,
    data: response.data.All
  });
};

export const loadVaccinesContinentData = (url = `${URL}${vaccinesUrl}`) => async (dispatch) => {
  const { data } = await axios.get(url);
  // eslint-disable-next-line max-len
  // const allContinents = [['002', 'Africa'], ['142', 'Asia'], ['009', 'Oceania'], ['150', 'European Union']];
  const allContinents = ['Africa', 'Asia', 'Oceania', 'European Union'];
  // eslint-disable-next-line no-debugger
  debugger;
  const continents = allContinents.map((continent) => ([
    continent,
    data[continent].All.people_vaccinated,
    data[continent].All.people_partially_vaccinated
  ]));

  continents.forEach((element) => {
    switch (element[0]) {
      case 'Africa':
        element.unshift('002');
        break;
      case 'Asia':
        element.unshift('142');
        break;
      case 'Oceania':
        element.unshift('009');
        break;
      case 'European Union':
        element.unshift('150');
        break;
      default:
        break;
    }
    if (element[1] === 'European Union') {
      // eslint-disable-next-line no-param-reassign
      element[1] = 'Europe';
    }
  });

  dispatch({
    type: actionTypes.LOAD_VACCINES,
    data: continents
  });
};

export const login = (user) => (
  {
    type: actionTypes.AUTH_LOGIN,
    user
  }
);

export const logout = () => (
  {
    type: actionTypes.AUTH_LOGOUT
  }
);
