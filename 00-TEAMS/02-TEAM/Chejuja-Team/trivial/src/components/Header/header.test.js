import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '../../../test-util.test';
import Header from './index';

describe('Header Component', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  const { container } = render(<BrowserRouter><Header /></BrowserRouter>);
  test('expected to print Titulo1', () => {
    const aux = container.querySelector('.header__list--itemgit');
    expect(aux.textContent).toBe('Titulo1');
  });
});
