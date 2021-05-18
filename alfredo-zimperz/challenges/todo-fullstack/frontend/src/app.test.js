/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import App from './App';
import { render } from './test-utils';

describe('<App/>', () => {
  test('Should display a title "To Do List"', () => {
    const { container } = render(<App />);
    const title = container.querySelector('h1').textContent;
    expect(title).toMatch('To Do List');
  });
});
