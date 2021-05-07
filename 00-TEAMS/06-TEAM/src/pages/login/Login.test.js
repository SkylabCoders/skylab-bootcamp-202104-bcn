import React from 'react';
import { render, screen } from '../../common/test';
import LoginUser from './Login';

describe('Footer Component', () => {
  test('should contain text Login', () => {
    render(<LoginUser />);
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });
});
