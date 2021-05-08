/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '../../../../test-utils';
import SideNav from './index';

describe('SideNav Component', () => {
  test('has a specific text in document', () => {
    render(<SideNav />);
    expect(screen.getByText(/My account/i)).toBeInTheDocument();
  });
  test('has a specific text in html element', () => {
    const { container } = render(<SideNav />);
    const elementSelected = container.querySelector('.sidenav__user-welcome');
    expect(elementSelected.textContent).toBe('Welcome, User');
  });
});
