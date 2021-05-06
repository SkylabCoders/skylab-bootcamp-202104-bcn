/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Ranking from './index';

describe('When invoked Ranking func', () => {
  test('Wants to contain', () => {
    const { container } = render(<BrowserRouter><Ranking /></BrowserRouter>);
    const prueba = container.querySelector('.ranking-game__text');
    expect(prueba.textContent).toBe('Has quedado en X posicion!');
  });
});
