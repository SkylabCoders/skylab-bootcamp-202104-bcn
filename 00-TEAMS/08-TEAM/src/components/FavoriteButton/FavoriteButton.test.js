/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import FavoriteButton from './index';
import { addCountryToFav } from '../../redux/actions/actionCreators';
import { render } from './test-utils';
// import { useParams } from 'react-router';

jest.mock('./../../redux/actions/actionCreators');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue('France')
}));

describe('FavoriteButton Component', () => {
  test.only('should dispatch addCountryToFav action', () => {
    addCountryToFav.mockReturnValue({
      type: 'ADD_FAV',
      data: 'France'
    });

    render(<FavoriteButton />, {
      initialState: {
        favoriteCountry: ['France']

      }
    });

    expect(addCountryToFav()).toHaveBeenCalled();
  });
});
