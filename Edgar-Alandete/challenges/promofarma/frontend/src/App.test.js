/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from './assets/test-utils';

import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/no hay productos en la cesta/i);
  expect(linkElement).toBeInTheDocument();
});
