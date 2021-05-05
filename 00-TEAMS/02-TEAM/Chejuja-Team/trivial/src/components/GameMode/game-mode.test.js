/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
// import Provider from 'react-router-dom';
import GameMode from './index';

describe('GameMode Component', () => {
  test('should contain ', () => {
    const { container } = render(<GameMode />);
    const prueba = container.querySelector('.title');

    expect(prueba.textContent).toBe('GAME MODE');
  });
});
