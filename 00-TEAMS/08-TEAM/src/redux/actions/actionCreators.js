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

export const loadVaccinesByContinent = (url = `${URL}${vaccinesUrl}`) => async (dispatch) => {
  const { data } = await axios.get(url);

  const allContinents = ['Africa', 'Asia', 'Oceania', 'European Union', 'North America', 'South America'];
  let continents = allContinents.map((continent) => ([
    continent,
    data[continent].All.people_vaccinated,
    data[continent].All.people_partially_vaccinated,
    data[continent].All.updated

  ]));

  const getAmericasData = (array) => {
    const peopleVaccinatedAmericas = array[4][1] + array[5][1];
    const peoplePartiallyVaccinatedAmericas = array[4][2] + array[5][2];
    const updated = array[4][3];

    const americasData = ['Americas', peopleVaccinatedAmericas, peoplePartiallyVaccinatedAmericas, updated];
    const segmentArray = array.splice(0, 4);
    const segmentArraywithAmericas = [...segmentArray, americasData];
    return segmentArraywithAmericas;
  };
  continents = getAmericasData(continents);
  dispatch({
    type: actionTypes.LOAD_VACCINES_BY_CONTINENT,
    data: continents
  });
};

export const loadVaccinesContinentData = (url = `${URL}${vaccinesUrl}`) => async (dispatch) => {
  const { data } = await axios.get(url);
  const allContinents = ['Africa', 'Asia', 'Oceania', 'European Union', 'North America', 'South America'];
  // eslint-disable-next-line no-debugger
  let continents = allContinents.map((continent) => ([
    continent,
    data[continent].All.people_vaccinated,
    data[continent].All.people_partially_vaccinated
  ]));

  const getAmericasData = (array) => {
    const peopleVaccinatedAmericas = array[4][1] + array[5][1];
    const peoplePartiallyVaccinatedAmericas = array[4][2] + array[5][2];
    const americasData = ['Americas', peopleVaccinatedAmericas, peoplePartiallyVaccinatedAmericas];
    const segmentArray = array.splice(0, 4);
    const segmentArraywithAmericas = [...segmentArray, americasData];
    return segmentArraywithAmericas;
  };
  continents = getAmericasData(continents);

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
      case 'Americas':
        element.unshift('019');
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
    type: actionTypes.LOAD_VACCINES_MAP,
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