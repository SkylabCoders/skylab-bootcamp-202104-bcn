/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from './test.utils';
import TvShows from './Tv_shows';

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
  test('should contain text Tv_shows', () => {
    render(<TvShows />, container);
    expect(screen.getByText(/Tv shows/i)).toBeInTheDocument();
  });
});
