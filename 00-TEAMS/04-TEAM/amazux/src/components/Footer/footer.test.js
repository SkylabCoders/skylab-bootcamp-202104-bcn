import React from 'react';
import { render, screen } from './test-utils';
import Footer from './index';

describe('UserNav Component', () => {
  test('has an copyright text', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    render(<Footer />);
    expect(screen.getByText(/Siguenos/i)).toBeInTheDocument();
  });
});
