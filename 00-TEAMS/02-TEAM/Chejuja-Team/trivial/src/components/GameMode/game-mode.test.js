/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import GameMode from './index';
import { render } from '../../test-util.js';

describe('GameMode Component', () => {
  test('should contain ', () => {
    const { container } = render(<GameMode />);
    const prueba = container.querySelector('.title');

    expect(prueba.textContent).toBe('GAME MODE');
  });
});
