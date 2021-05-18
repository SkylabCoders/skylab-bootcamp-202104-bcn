/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '../../../../common/test';
import Header from './Header';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Header Component', () => {
  test('should contain text Tv Shows', () => {
    render(<Header />, container);
    expect(screen.getByText(/Tv Shows/i)).toBeInTheDocument();
  });
  test('should contain text peliculas', () => {
    render(<Header />, container);
    expect(screen.getByText(/Películas/i)).toBeInTheDocument();
  });
  test('should contain button', () => {
    render(<Header />, container);
    expect(screen.getByText(/Registrarse/i)).toBeTruthy();
  });
});
