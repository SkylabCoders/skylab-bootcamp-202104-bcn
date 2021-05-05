/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Ranking from './index';

describe('When invoked Ranking func', () => {
  test('Wants to contain', () => {
    render(<BrowserRouter><Ranking /></BrowserRouter>);
    expect(screen.getByText('Chejuja')).toBeInTheDocument();
  });
});
