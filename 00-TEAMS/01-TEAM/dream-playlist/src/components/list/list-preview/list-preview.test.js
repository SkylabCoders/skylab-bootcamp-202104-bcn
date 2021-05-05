/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ListPreview from './index';
import { render, screen } from './test-utils';

describe('List preview component', () => {
  test('should contain user Grande', () => {
    render(<ListPreview />, {
      initialState: {
        token: 'faketoken',
        user: {
          id: 'Grande'
        }
      }
    });

    expect(screen.getByText(/Grande/i)).toBeInTheDocument();
  });
});
