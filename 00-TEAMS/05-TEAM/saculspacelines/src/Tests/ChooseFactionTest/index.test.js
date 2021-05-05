/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '../TestUtils';
import ChooseFaction from '../../Components/ChooseFaction';

describe('Given a ChooseFaction component', () => {
  test('Should print a choose faction section', () => {
    render(<ChooseFaction />, {
      initialState: {
        auth: {
          isLoggedIn: true
        }
      }
    });
  });

  expect(screen.toBeInTheDocument());
});
