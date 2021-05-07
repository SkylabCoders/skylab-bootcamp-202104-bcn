/* eslint-disable no-console */
import axios from 'axios';
import {
  loadGlobalData, loadCountry, loadVaccinesByCountry, loadVaccinesByContinent
} from './actionCreators';
import actionTypes from './actionTypes';

jest.mock('axios');

describe('loadGlobalData', () => {
  xtest('should dispatch LOAD_GLOBAL', async () => {
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

  xtest('should dispatch LOAD_GLOBAL_ERROR', async () => {
    axios.get.mockRejectedValue();
    const dispatch = jest.fn();
    // act
    await loadGlobalData()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOAD_GLOBAL_ERROR'
    });
  });
});

describe('loadCountry', () => {
  xtest('should dispatch LOAD_COUNTRY', async () => {
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

describe('loadVaccinesByCountry', () => {
  xtest('should dispatch LOAD_VACCINES_BY_COUNTRY', async () => {
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

describe('loadVaccinesByContinent', () => {
  xtest('should dispatch LOAD_VACCINES_BY_COUNTRY', async () => {
    const mockData = { data: { Global: { All: {} } } };
    axios.get.mockResolvedValue(mockData);

    const dispatch = jest.fn();
    // act
    await loadVaccinesByContinent()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_VACCINES_BY_CONTINENT,
      data: mockData.data.All
    });
  });
});
