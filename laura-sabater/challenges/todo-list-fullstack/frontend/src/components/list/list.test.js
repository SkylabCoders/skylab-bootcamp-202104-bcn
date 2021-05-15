/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen, fireEvent } from '../../utils/testUtils';
import List from './index';
import { addTask, deleteTask } from '../../redux/actions/actionCreators';
import actionTypes from '../../redux/actions/actionTypes';

jest.mock('../../redux/actions/actionCreators');

describe('Given a List component', () => {
  describe('When is rendered with one task', () => {
    let initialState;
    beforeEach(() => {
      initialState = { tasks: [{ id: 1, task: 'Hello world' }] };
      render(<List />, { initialState });
    });

    describe('And add button is clicked', () => {
      test('Then addOnClick should be invoked', () => {
        addTask.mockImplementationOnce(() => ({ type: actionTypes.ADD_TASK }));
        fireEvent.click(screen.getByText(/Add/i));
        expect(addTask).toHaveBeenCalledTimes(1);
      });
    });

    describe('And delete button is clicked', () => {
      test('Then deleteOnClick should be invoked', () => {
        deleteTask.mockImplementationOnce(() => ({ type: actionTypes.DELETE_TASK }));
        fireEvent.click(screen.getByText(/X/i));
        expect(deleteTask).toHaveBeenCalledTimes(1);
      });
    });
  });
});
