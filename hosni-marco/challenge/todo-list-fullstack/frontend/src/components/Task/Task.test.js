/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen, fireEvent } from '../../utils/test-utils';
import { deleteTask } from '../../redux/actions/actionCreators';
import actionTypes from '../../redux/actions/actionTypes';
import Task from './index';

jest.mock('../../redux/actions/actionCreators');

describe('Given a Task component', () => {
  describe('When is redered with one task', () => {
    render(<Task />, {
      initialState: {
        tasks: [{}, { _id: '1', task: 'Learn Javascript' }]
      }
    });

    describe('And delete button is clicked', () => {
      test('Then deleteTask should be invoked', () => {
        deleteTask.mockImplementationOnce(() => ({ type: actionTypes.DELETE_TASK }));

        fireEvent.click(screen.getByText(/Delete/i));

        expect(deleteTask).toHaveBeenCalledTimes(1);
      });
    });
  });
});
