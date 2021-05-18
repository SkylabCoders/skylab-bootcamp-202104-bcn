/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Dashboard from './index';
import { render, screen } from '../../test-utils';

describe('<Dashboard/>', () => {
  test('should show Pending tasks', () => {
    render(<Dashboard />, {
      initialState: {
        tasks: [{ id: 1 }, { id: 2 }],
      },
    });
    expect(screen.queryAllByText(/Pending/i)[0]).toBeInTheDocument();
  });
});
