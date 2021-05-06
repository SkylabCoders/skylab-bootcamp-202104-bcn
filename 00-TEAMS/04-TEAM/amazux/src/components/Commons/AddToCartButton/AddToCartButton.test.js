/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '../../../test-utils';
import AddToCartButton from './index';

describe('<AddToCartButton/>', () => {
  test('should show the product name', () => {
    render(<AddToCartButton product={{ name: 'Iphone 8' }} />);
    expect(screen.getByText(/Iphone 8/i)).toBeInTheDocument();
  });
});
