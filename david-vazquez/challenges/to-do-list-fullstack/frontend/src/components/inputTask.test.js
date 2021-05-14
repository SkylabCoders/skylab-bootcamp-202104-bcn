/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import InputTask from './InputTask';
import { screen, render } from '../utils/testUtils';
// import {
//   loadTasks, addTask, doneTask, deleteTask,
// } from '../redux/actions/actionCreator';

jest.mock('./../redux/actions/actionCreator');

describe('inputTask component', () => {
  test('should display Buy Food', () => {
    // Arrange
    const initialState = { tasks: [] };
    // Act
    render(<InputTask />, { initialState });
    // Assert
    expect(screen.getByText(/No tasks/i)).toBeeInDocument();
  });
});
