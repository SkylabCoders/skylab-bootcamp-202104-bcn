/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { Line } from 'react-chartjs-2';
import { render, screen } from '../../utils/test-utils';

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

describe('HistoryGraph Component', () => {
  test('should contain Confirmed', () => {
    render(<Line />, container);

    expect(screen.getByText(/Confirmed/i)).toBeInTheDocument();
  });
});
