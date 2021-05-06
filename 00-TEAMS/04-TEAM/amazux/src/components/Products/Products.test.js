/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '../../test-utils';
import Products from './index';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '10' })
}));

describe('<Products/>', () => {
  test('should return a title with an id', () => {
    render(<Products />);
    expect(screen.getByText(/10/i)).toBeInTheDocument();
  });
});
