import React from 'react';
import { render, screen } from '../../../test-utils';
import CategoriesNav from './index';

describe('CategoriesNav Component', () => {
  test('has a div tag', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    render(<CategoriesNav />);
    expect(screen.getByText(/Tu compra de supermercado con/i)).toBeInTheDocument();
  });
  test('has an innerText', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const { container } = render(<CategoriesNav />);
    const elementSelected = container.querySelector('.navbar__menu-head');
    expect(elementSelected.textContent).toBe('Todo');
  });
});
