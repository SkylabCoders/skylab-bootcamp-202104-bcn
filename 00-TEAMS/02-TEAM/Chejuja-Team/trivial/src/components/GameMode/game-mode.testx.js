/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Provider from 'react-router-dom';
// import configureStore from '../../redux/store';
import store from '../../test-util.test';
import GameMode from './index';

describe('GameMode Component', () => {
  test('should contain input', () => {
    render(<Provider store={store}><GameMode /> { store: {} }, </Provider>);
    expect(screen.getByText('GAME')).toBeInTheDocument();
  });
});
