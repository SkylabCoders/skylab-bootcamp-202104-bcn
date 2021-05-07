/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '../../../common/test';
import Layout from './Layout';

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

describe('Footer Component', () => {
  test('should contain text Films', () => {
    render(<Layout />, container);
    expect(screen.getByText(/Películas más vistas/i)).toBeInTheDocument();
  });
});
