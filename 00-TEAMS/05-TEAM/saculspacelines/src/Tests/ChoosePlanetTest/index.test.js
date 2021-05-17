/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import { render } from '../TestUtils';
import ChoosePlanet from '../../Components/ChoosePlanet';

describe('Given a ChoosePlanet component', () => {
  test('Should print a choose planet section', () => {
    const { container } = render(
      <Router>
        <ChoosePlanet />
      </Router>
    );

    const chooseTitle = container.querySelector('.choose-planet');
    expect(chooseTitle.textContent).toBe('Choose a planet');
  });
});
