/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import ChooseFaction from '../../Components/ChooseFaction';

describe('Given a ChooseFaction component', () => {
  test('Should print a choose faction section', () => {
    const { container } = render(<ChooseFaction />);

    const chooseTitle = container.querySelector('h1');
    expect(chooseTitle.textContent).toBe('Choose your Faction');
  });
});
