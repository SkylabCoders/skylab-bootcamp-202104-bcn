/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import InputTask from './InputTask';
import { screen, render } from '../utils/testUtils';
import {
  loadTasks,
} from '../redux/actions/actionCreator';
import actionTypes from '../redux/actions/actionTypes';

jest.mock('./../redux/actions/actionCreator');

describe('Given a InputTask component', () => {
  describe('When is rendered with empty initial state', () => {
    test('Then /No task/ should be in document', () => {
      // Arrange
      const initialState = { allTasks: [] };

      loadTasks.mockReturnValueOnce({
        type: actionTypes.LOAD_TASKS,
        allTasks: [],
      });
      // Act
      render(<InputTask />, { initialState });
      // Assert
      expect(screen.getByText(/No tasks/i)).toBeeInTheDocument();
    });
  });
});
