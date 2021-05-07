import React from 'react';
import { render, screen } from '../../common/test';
import { createStore } from '../../application/store';
import Films from './Films';

const store = createStore({
  moviesGrid: [{ id: 3, poster_path: 'www.google.es', originalTitle: 'SuperFilm' }]
});

describe('Footer Component', () => {
  test('should contain text Films', () => {
    render(<Films />, { store });
    expect(screen.getByAltText('SuperFilm')).toBeInTheDocument();
  });
});
