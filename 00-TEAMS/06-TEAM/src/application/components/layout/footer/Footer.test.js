/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '../../../../common/test';
import Footer from './Footer';

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
  test('should contain text Condiciones de uso', () => {
    render(<Footer />, container);
    expect(screen.getByText(/Condiciones de uso/i)).toBeInTheDocument();
  });
});
