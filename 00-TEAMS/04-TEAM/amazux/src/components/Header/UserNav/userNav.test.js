import React from 'react';
import { render, screen } from '../../../test-utils';
import UserNav from './index';

describe('UserNav Component', () => {
  test('has an tag text', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const { container } = render(<UserNav />);
    const asd = container.querySelector('.navigation__location-name');
    expect(asd.textContent).toBe('Enviar a Joseluis');
  });

  test('has an nav tag', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    render(<UserNav />);
    expect(screen.getByText(/enviar/i)).toBeInTheDocument();
  });
});
