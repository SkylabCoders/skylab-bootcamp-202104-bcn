/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '../../utils/test-utils';
import List from './index';
import { loadTasks } from '../../redux/actions/actionCreators';
import actionTypes from '../../redux/actions/actionTypes';

jest.mock('../../redux/actions/actionCreators');

describe('Given a List component', () => {
  describe('When is redered with one task', () => {
    test('Then \'Delete\' should be in the document', () => {
      const initialState = { tasks: [{ id: 1, name: 'buy milk' }] };
      loadTasks.mockReturnValueOnce({ type: actionTypes.LOAD_TASKS, tasks: [{ id: 1, name: 'buy milk' }] });

      render(<List />, { initialState });

      expect(screen.getByText(/Delete/i)).toBeInTheDocument();
    });
  });
});
