import React from 'react';
import { render, screen } from './test-utils';
import ErrorMessage from './index';

describe('UserNav Component', () => {
  test('should contain wrong', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    render(<ErrorMessage />);
    expect(screen.getByText(/wrong/i)).toBeInTheDocument();
  });
});
