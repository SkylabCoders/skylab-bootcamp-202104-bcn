/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import PlanetDetail from '../../Components/PlanetDetail';

describe('Given a PlanetDetail component', () => {
  test('should print a planet details section', () => {
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
      <PlanetDetail data={data} clickHandler={clickHandler} />
    );

    const planetDetail = container.querySelector('.dropdownButton');
    expect(planetDetail.textContent).toBe('Details');
  });
});
