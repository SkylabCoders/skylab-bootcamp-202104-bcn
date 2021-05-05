/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  render, screen
} from './test-utils';
import ErrorMessage from './index';

test('should return an error message', () => {
  render(<ErrorMessage message="Hola Josep" />);

  expect(screen.getByText(/Hola Josep/i)).toBeInTheDocument();
});
