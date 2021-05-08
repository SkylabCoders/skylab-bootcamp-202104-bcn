/* eslint-disable no-console */
import axios from 'axios';
import {
  loadGlobalData, loadCountry, loadVaccinesByCountry,
  loadCountryHistory, loadVaccinesByContinentWithUpdated
} from './actionCreators';
import actionTypes from './actionTypes';

jest.mock('axios');

describe('loadGlobalData', () => {
  test('should dispatch LOAD_GLOBAL', async () => {
    const mockData = { data: { Global: { All: { skylab: 'Yes' } } } };
    axios.get.mockResolvedValue(mockData);

    const dispatch = jest.fn();
    // act
    await loadGlobalData()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_GLOBAL,
      data: mockData.data.Global.All
    });
  });

  test('should dispatch LOAD_GLOBAL_ERROR', async () => {
    axios.get.mockRejectedValue();
    const dispatch = jest.fn();
    // act
    await loadGlobalData()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_GLOBAL
    });
  });
});

describe('loadCountry', () => {
  test('should dispatch LOAD_COUNTRY', async () => {
    const mockData = { data: { France: { All: {} } } };
    axios.get.mockResolvedValue(mockData);

    const dispatch = jest.fn();
    // act
    await loadCountry()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_COUNTRY,
      data: mockData.data.All
    });
  });
});

describe('loadCountryHistory', () => {
  test('should dispatch LOAD_COUNTRY_HISTORY,', async () => {
    const mockData = { data: { France: { All: {} } } };
    axios.get.mockResolvedValue(mockData);

    const dispatch = jest.fn();
    // act
    await loadCountryHistory()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_COUNTRY_HISTORY,
      data: mockData.data.All.dates
    });
  });
});

describe('loadVaccinesByCountry', () => {
  test('should dispatch LOAD_VACCINES_BY_COUNTRY', async () => {
    const mockData = { data: { France: { All: {} } } };
    axios.get.mockResolvedValue(mockData);

    const dispatch = jest.fn();
    // act
    await loadVaccinesByCountry()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_VACCINES_BY_COUNTRY,
      data: mockData.data.All
    });
  });
});

describe('loadVaccinesByContinentWithUpdated', () => {
  test('should dispatch LOAD_VACCINES_BY_COUNTRY', async () => {
    const mockData = { data: { Global: { All: {} } } };
    axios.get.mockResolvedValue(mockData);

    const dispatch = jest.fn();
    // act
    await loadVaccinesByContinentWithUpdated()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_VACCINES_BY_CONTINENT,
      data: mockData.data.All
    });
  });
});
