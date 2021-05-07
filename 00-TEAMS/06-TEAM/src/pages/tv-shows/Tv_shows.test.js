import React from 'react';
import { render, screen } from '../../common/test';
import { createStore } from '../../application/store';
import TvShows from './Tv_shows';

const results = [
  { id: 1, poster_path: 'www.google.es', originalTitle: 'SuperFilm 1' },
  { id: 2, poster_path: 'www.google.es', originalTitle: 'SuperFilm 2' },
  { id: 3, poster_path: 'www.google.es', originalTitle: 'SuperFilm 3' }
];

export const promisify = (value) => new Promise((resolve) => resolve(value));

jest.mock('../../common/services/films', () => ({
  TYPE_PARAMS: {
    on_the_air: 'on_the_air'
  },
  getShows: () => promisify({ data: { results } })
}));

const store = createStore({
  shows: [{ id: 3, poster_path: 'www.google.es', originalTitle: 'SuperFilm' }]
});

describe('Footer Component', () => {
  test('should contain text Tv_shows', async () => {
    render(<TvShows />, { store });

    const initialFilm = screen.getByAltText('SuperFilm');
    const firstLoadedFilm = await screen.findByAltText('SuperFilm 1');
    const total = await screen.findByText('Total: 4');

    expect(initialFilm).toBeInTheDocument();
    expect(firstLoadedFilm).toBeInTheDocument();
    expect(total).toBeInTheDocument();
  });
});
