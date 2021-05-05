import React from 'react';
import { render, screen } from '../../test-utils';
import SideNav from './index';

describe('SideNav Component', () => {
  test('has a specific text in document', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    render(<SideNav />);
    expect(screen.getByText(/Mi Cuenta/i)).toBeInTheDocument();
  });
  test('has a specific text in html element', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const { container } = render(<SideNav />);
    const elementSelected = container.querySelector('.sidenav__user-welcome');
    expect(elementSelected.textContent).toBe('Hola, User');
  });
});
