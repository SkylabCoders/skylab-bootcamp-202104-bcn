/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen, fireEvent } from '../../utils/test-utils';
import Todolist from './Todolist';
import {
  loadList, deleteTask, updateTask, addtask,
} from '../../redux/actions/actionCreators';
import actionTypes from '../../redux/actions/actionTypes';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../redux/actions/actionCreators');

describe('Given a Todolist component', () => {
  describe('When is redered with empty initial state', () => {
    test('Then \'No Tasks\' should be in the document', () => {
      const initialState = { list: [] };
      loadList.mockReturnValueOnce({ type: actionTypes.LOAD_LIST, list: [] });

      render(<Todolist />, { initialState });

      expect(screen.getByText(/No Tasks/i)).toBeInTheDocument();
    });
  });

  describe('When is redered with one task', () => {
    let initialState;
    beforeEach(() => {
      initialState = { list: [{ id: 1, name: 'Learn Javascript' }] };
      render(<Todolist />, { initialState });
    });

    describe('And delete button is clicked', () => {
      test('Then delTask should be invoked', () => {
        deleteTask.mockImplementationOnce(() => ({ type: actionTypes.DELETE_TASK }));

        fireEvent.click(screen.getByText(/Delete/i));

        expect(deleteTask).toHaveBeenCalledTimes(1);
      });
    });

    describe('And edit button is clicked', () => {
      test('Then handleUpdateTask should be invoked', () => {
        const button = screen.getByTestId('update-button-1');
        updateTask.mockReturnValueOnce({
          type: actionTypes.UPDATE_TASK,
          task: { id: 1, name: 'I know Javascript' },
        });

        fireEvent.click(button);

        expect(updateTask).toHaveBeenCalledTimes(1);
      });
    });

    describe('And Add button is clicked', () => {
      test('Then addTask should be invoked', () => {
        const button = screen.getByTestId('addtask-button');
        addtask.mockReturnValueOnce({
          type: actionTypes.ADD_TASK,
          task: { id: 2, name: 'I know Javascript' },
        });

        fireEvent.click(button);

        expect(addtask).toHaveBeenCalledTimes(1);
      });
    });
  });
});
