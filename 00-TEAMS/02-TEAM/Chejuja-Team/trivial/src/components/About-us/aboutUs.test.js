/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AboutUs from './index';

describe('When invoked a aboutUs func', () => {
  test('Expect to print', () => {
    const { container } = render(<BrowserRouter><AboutUs /></BrowserRouter>);
    const prueba = container.querySelector('.prueba');
    expect(prueba.textContent).toBe('Chema');
    // expect(screen.getByText('Chejuja')).toBeInTheDocument();
  });
});
