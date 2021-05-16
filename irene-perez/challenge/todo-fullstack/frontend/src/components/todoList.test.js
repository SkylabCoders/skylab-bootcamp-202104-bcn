/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen, fireEvent } from '../utils/test.utils';
import {
  addTask, deleteTask
} from '../redux/actions/actionCreator';
// import actionTypes from '../redux/actions/actionTypes';
import todoList from './index';

jest.mock('../redux/actions/actionCreator');

describe('Given a todoList component', () => {
  describe('When is redered with one task', () => {
    test('Then the task name should be in the document', async () => {
      const initialState = { tasks: [{ name: 'Buy milk' }] };
      render(<todoList />, { initialState });
      expect(screen.getByText(/Buy Milk/i)).toBeInTheDocument();
    });
  });
});

describe('When Add button is clicked', () => {
  test('Then addTask should be invoked', async () => {
    addTask.mockImplementationOnce(() => ({ type: 'add' }));
    fireEvent.click(screen.getByRole('button', { name: /Add/i }));
    expect(addTask).toHaveBeenCalled();
  });
});

describe('When Delete button is clicked', () => {
  test('Then deleteTask shpuld be invoked', async () => {
    deleteTask.mockImplementationOnce(() => ({ type: 'delete' }));
    fireEvent.click(screen.getByText(/Delete/i));
    expect(deleteTask).toHaveBeenCalled();
  });
});
