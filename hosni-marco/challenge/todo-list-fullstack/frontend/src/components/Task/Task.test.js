/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen, fireEvent } from '../../utils/test-utils';
import { deleteTask } from '../../redux/actions/actionCreators';
import actionTypes from '../../redux/actions/actionTypes';
import Task from './index';

jest.mock('../../redux/actions/actionCreators');

describe('Given a Task component', () => {
  describe('When is redered with one task', () => {
    let initialState = {};
    beforeEach(() => {
      initialState = { tasks: { _id: '1', task: 'Learn Javascript' } };
      render(<Task />, { initialState });
    });

    describe('And delete button is clicked', () => {
      test('Then trashTask should be invoked', () => {
        deleteTask.mockImplementationOnce(() => ({ type: actionTypes.DELETE_TASK }));

        fireEvent.click(screen.getByText(/Delete/i));

        expect(deleteTask).toHaveBeenCalledTimes(1);
      });
    });
  });
});
