/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import NotFound from './index';
import { render, screen } from '../../test-utils';

describe('<NotFound/>', () => {
  test('should show Error 404', () => {
    render(<NotFound />);
    expect(screen.queryAllByText(/Error 404/i)[0]).toBeInTheDocument();
  });
});
