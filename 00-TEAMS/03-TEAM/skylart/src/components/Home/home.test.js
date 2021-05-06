/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Home from './index';
import { render, screen } from './test-utils';

describe('For a Home component', () => {
  test('should contain "American" ', () => {
    render(<Home />, {
      initialState: [
        {
          departmentId: 1,
          displayName: 'American Decorative Arts',
        },
        {
          departmentId: 3,
          displayName: 'Ancient Near Eastern Art',
        },

      ],
    });
    expect(screen.getByText(/rights/i)).toBeInTheDocument();
  });
});
