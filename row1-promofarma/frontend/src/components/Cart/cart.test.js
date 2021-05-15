/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '../../assets/test-utils';
import Cart from './index';

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

describe('Cart Component', () => {
  test('should contain title This is the cart', () => {
    render(<Cart />, container);

    expect(screen.getByText(/This is the cart/i)).toBeInTheDocument();
  });
  test('should have a button', () => {
    render(<Cart />, container);

    expect(screen.getByText(/DELETE ALL/)).toBeTruthy();
  });
});
