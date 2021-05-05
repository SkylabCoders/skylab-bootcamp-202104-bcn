/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from './test-utils';
import Form from '.';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Form Component', () => {
  test('should contain title Form', () => {
    render(<Form />, container);

    expect(screen.getByText(/form/i)).toBeTruthy();
  });
  test('should exist select html element', () => {
    render(<Form />, container);

    expect(screen.getByText(/Instrumental/)).toBeTruthy();
  });
});
