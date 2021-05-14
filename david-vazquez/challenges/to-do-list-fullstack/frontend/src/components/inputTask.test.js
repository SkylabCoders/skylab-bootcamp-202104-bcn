/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import InputTask from './InputTask';
import { screen, render, fireEvent } from '../utils/testUtils';
import {
  loadTasks, deleteTask, doneTask, addTask,
} from '../redux/actions/actionCreator';
import actionTypes from '../redux/actions/actionTypes';

jest.mock('./../redux/actions/actionCreator');

describe('Given a InputTask component', () => {
  describe('When is rendered with empty initial state', () => {
    test('Then /No task/ should be in document', () => {
      // Arrange
      const initialState = { allTasks: [] };

      loadTasks.mockReturnValue({
        type: actionTypes.LOAD_TASKS,
        allTasks: [],
      });
      // Act
      render(<InputTask />, { initialState });
      // Assert
      expect(screen.getByText(/No tasks/i)).toBeInTheDocument();
    });
  });
  describe('When is rendered with one task', () => {
    let initialState;
    beforeEach(() => {
      loadTasks.mockReturnValue({
        type: actionTypes.LOAD_TASKS,
        allTasks: [{ text: 'Test component', state: false }],
      });
      initialState = { tasks: [{ text: 'Test component', state: false }] };
      render(<InputTask />, { initialState });
    });
    describe('And delete button is clicked', () => {
      test('Then deleteTask is invoked', () => {
        deleteTask.mockImplementationOnce(() => ({ type: actionTypes.DELETE_TASK }));
        fireEvent.click(screen.getByTestId('button-delete'));
        expect(deleteTask).toHaveBeenCalledTimes(1);
      });
    });
    describe('And done button is clicked', () => {
      test('Then doneTask is invoked', () => {
        const button = screen.getByTestId('button-done');

        doneTask.mockReturnValueOnce({
          type: actionTypes.DONE_TASK,
          updateTask: { text: 'I dont know Javascript', state: false },
        });
        fireEvent.click(button);
        expect(doneTask).toHaveBeenCalledTimes(1);
      });
    });
    describe('And add button is clicked', () => {
      test('Then addTask is invoked', () => {
        const button = screen.getByTestId('button-add');

        addTask.mockReturnValueOnce({
          type: actionTypes.ADD_TASK,
          newTask: { text: 'I dont know Javascript', state: false },
        });
        fireEvent.click(button);
        expect(addTask).toHaveBeenCalledTimes(1);
      });
    });
  });
});
