import axios from 'axios';
import actionTypes from './actionTypes';

const URL = 'https://covid-api.mmediagroup.fr/v1/';
const casesUrl = 'cases';
const vaccinesUrl = 'vaccines';
const historyUrl = 'history';
const allContinents = ['Africa', 'Asia', 'Oceania', 'European Union', 'North America', 'South America'];

export const loadGlobalData = (url = `${URL}${casesUrl}`) => async (dispatch) => {
  try {
    const { data } = await axios.get(url);
    dispatch({
      type: actionTypes.LOAD_GLOBAL,
      data: data.Global.All
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOAD_GLOBAL_ERROR
    });
  }
};

export const loadCountry = (country) => async (dispatch) => {
  const url = `${URL}${casesUrl}?country=${country}`;
  const { data } = await axios.get(url);
  dispatch({
    type: actionTypes.LOAD_COUNTRY,
    data: data.All
  });
};
export const loadCountryHistory = (country) => async (dispatch) => {
  const url = `${URL}${historyUrl}?country=${country}&status=confirmed`;
  const { data } = await axios.get(url);
  dispatch({
    type: actionTypes.LOAD_COUNTRY_HISTORY,
    data: data.All.dates
  });
};

export const loadVaccinesByCountry = (country) => async (dispatch) => {
  const url = `${URL}${vaccinesUrl}?country=${country}`;
  const { data } = await axios.get(url);
  dispatch({
    type: actionTypes.LOAD_VACCINES_BY_COUNTRY,
    data: data.All
  });
};

const getContinetData = (arrayContinents, data) => arrayContinents.map((continent) => ([
  continent,
  data[continent].All.people_vaccinated,
  data[continent].All.people_partially_vaccinated
]));

const getAmericasData = (arrayContinents) => {
  const peopleVaccinatedAmericas = arrayContinents[4][1] + arrayContinents[5][1];
  const peoplePartiallyVaccinatedAmericas = arrayContinents[4][2] + arrayContinents[5][2];
  const americasData = ['Americas', peopleVaccinatedAmericas, peoplePartiallyVaccinatedAmericas];
  const segmentArray = arrayContinents.splice(0, 4);
  const segmentArraywithAmericas = [...segmentArray, americasData];
  return segmentArraywithAmericas;
};

export const loadVaccinesContinent = (url = `${URL}${vaccinesUrl}`) => async (dispatch) => {
  const { data } = await axios.get(url);
  let continents = getContinetData(allContinents, data);
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

const getContinetDataWithUpdated = (arrayContinents, data) => arrayContinents.map((continent) => ([
  continent,
  data[continent].All.people_vaccinated,
  data[continent].All.people_partially_vaccinated,
  data[continent].All.updated
]));

const getAmericaDataWithUpdated = (arrayContinents) => {
  const peopleVaccinatedAmericas = arrayContinents[4][1] + arrayContinents[5][1];
  const peoplePartiallyVaccinatedAmericas = arrayContinents[4][2] + arrayContinents[5][2];
  const updated = arrayContinents[4][3];
  const americasData = ['Americas', peopleVaccinatedAmericas, peoplePartiallyVaccinatedAmericas, updated];
  const segmentArray = arrayContinents.splice(0, 4);
  const segmentArraywithAmericas = [...segmentArray, americasData];
  return segmentArraywithAmericas;
};

export const loadVaccinesByContinentWithUpdated = (url = `${URL}${vaccinesUrl}`) => async (dispatch) => {
  const { data } = await axios.get(url);
  let continents = getContinetDataWithUpdated(allContinents, data);
  continents = getAmericaDataWithUpdated(continents);
  dispatch({
    type: actionTypes.LOAD_VACCINES_BY_CONTINENT,
    data: continents
  });
};

export function addCountryToFav(country) {
  return {
    type: actionTypes.ADD_FAV,
    data: country
  };
}

export function deleteFavCountry(country) {
  return {
    type: actionTypes.DELETE_FAV,
    country
  };
}
