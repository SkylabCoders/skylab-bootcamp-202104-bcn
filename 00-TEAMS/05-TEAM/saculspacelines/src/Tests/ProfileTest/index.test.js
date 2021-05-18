/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Profile from '../../Components/Profile';
import { screen, render } from '../TestUtils';

describe('Profile component', () => {
  test.only('Should display user profile name', () => {
    render(<Profile />, {
      initialState: {
        auth: {
          isLoggedIn: true,
          user: {
            email: 'admin@admin.com'
          }
        }
      }
    });
    expect(screen.getByText(/Wishlist/i));
  });
});
