/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { screen, render } from '../../utils/test-utils';
import ToDoList from './index';

describe('ToDoList component', () => {
  test('should have a li ', () => {
    render(<ToDoList />, {
      initialState: {
      }
    });
    expect(screen.getByText(/li/i)).toBeInDocument();
  });
});
