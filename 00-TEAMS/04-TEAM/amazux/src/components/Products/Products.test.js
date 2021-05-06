/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '../../test-utils';
import Products from './index';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '5a0b35c1734d1d08bf7084c3' })
}));

describe('<Products/>', () => {
  test('should return an sku with the same string as the title', () => {
    render(<Products />);
    expect(screen.getByText(/5a0b35c1734d1d08bf7084c3/i)).toBeInTheDocument();
  });
});
