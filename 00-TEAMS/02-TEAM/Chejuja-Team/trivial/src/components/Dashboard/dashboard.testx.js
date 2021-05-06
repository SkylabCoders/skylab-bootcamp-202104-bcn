/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Dashboard from './index';
import { render } from '../../test-util';

describe('When invoked a Dashboard component', () => {
  test('Should contain', () => {
    const img = render(<Dashboard />);
    const img2 = img.querySelectorAll('.sidebar');
    console.log(img2);
    expect(img2.toBeInDocument());
  });
});
