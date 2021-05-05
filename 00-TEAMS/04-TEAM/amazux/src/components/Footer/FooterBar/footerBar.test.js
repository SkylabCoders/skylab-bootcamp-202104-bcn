import React from 'react';
import { render, screen } from '../test-utils';
import FooterBar from './index';

describe('UserNav Component', () => {
  test('has an tag text', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const { container } = render(<FooterBar />);
    const asd = container.querySelector('.footer__item');
    expect(asd.textContent).toBe('Conocenos');
  });

  test('has an copyright text', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    render(<FooterBar />);
    expect(screen.getByText(/Siguenos/i)).toBeInTheDocument();
  });
});
