/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import FavoriteButton from './index';
import { render, screen } from './test-utils';

describe('FavoriteButton Component', () => {
  test.only('should dispatch addCountryToFav action', () => {
    render(<FavoriteButton />, {
      initialState: {
        auth: {
          isLoggedIn: true,
          user: { name: 'pepe' }
        }
      }
    });

    expect(screen.getByText(/username/i)).toBeInTheDocument();
  });
  test('should contain stranger', () => {
    render(<FavoriteButton />, {
      initialState: {
        auth: {
          isLoggedIn: false
        }
      }
    });

    expect(screen.getByText(/stranger/i)).toBeInTheDocument();
  });
});
