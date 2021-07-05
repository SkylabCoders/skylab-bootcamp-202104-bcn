/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import StarshipDetail from '../../Components/StarshipDetail';

describe('Given a StarshipDetail component', () => {
  test.only('should print a planet details section', () => {
    const clickHandler = jest.fn();
    const data = {
      name: 'random',
      diameter: 'random',
      climate: 'random',
      gravity: 'random',
      terrain: 'random',
      population: 'random',
      imgUrl: 'random',
      rotation_period: 'random',
      orbital_period: '',
      surface_water: ''
    };
    const { container } = render(
      <StarshipDetail data={data} clickHandler={clickHandler} />
    );

    const starshipDetail = container.querySelector('.dropdownButton');
    expect(starshipDetail.textContent).toBe('Details');
  });
});
