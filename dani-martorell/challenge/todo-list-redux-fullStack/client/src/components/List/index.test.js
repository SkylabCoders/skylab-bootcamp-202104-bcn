/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { fireEvent, render, screen } from '../../utils/test-utils';
import List from './index';
import { deleteTask, markAsDone } from '../../redux/actions/actionCreators';
import actionTypes from '../../redux/actions/actionTypes';

jest.mock('../../redux/actions/actionCreators');

describe('Given a List component', () => {
  describe('When is rendered with one task', () => {
    test('Then \'Delete\' should be in the document', () => {
      const initialState = { tasks: [{ id: 1, name: 'buy milk', isCompleted: false }] };

      render(<List />, { initialState });

      expect(screen.getByText(/Delete/i)).toBeInTheDocument();
    });
  });
});

describe('When is rendered with one task', () => {
  let initialState;
  beforeEach(() => {
    initialState = { tasks: [{ id: 1, task: 'buy milk', isCompleted: false }] };
    render(<List />, { initialState });
  });
  describe('And delete button is clicked', () => {
    test('Then handleDelete should be called', () => {
      deleteTask.mockImplementation(() => ({
        type: actionTypes.DELETE_TASK,
        response: {
          data: { id: 1, name: 'buy milk' },
          status: 200,
        },
      }));
      fireEvent.click(screen.getByText(/Delete/i));
      expect(deleteTask).toHaveBeenCalled();
    });
  });
  describe('And done button is clicked', () => {
    test('Then handleDone should be called', () => {
      markAsDone.mockReturnValue(() => ({
        type: actionTypes.COMPLETE_TASK,
        task: { id: 1, name: 'buy milk', isCompleted: true },
      }
      ));
      fireEvent.click(screen.getByText(/Done/i));
      expect(markAsDone).toHaveBeenCalled();
    });
  });
});
