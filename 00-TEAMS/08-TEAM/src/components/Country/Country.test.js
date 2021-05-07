/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import Country from './index';
import { render, screen } from './test-utils';

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

describe('Country component', () => {
  test('should contain Vaccines', () => {
    render(<Country />, container);

    expect(screen.getByText(/Vaccines/i)).toBeInTheDocument();
  });
});
