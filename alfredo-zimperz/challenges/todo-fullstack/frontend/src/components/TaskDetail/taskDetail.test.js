/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen, fireEvent } from '../../test-utils';
import { getTaskById, updateTask } from '../../redux/actions/actionCreators';
import TaskDetail from './index';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '5a0b35c1734d1d08bf7084c3' }),
}));

jest.mock('../../redux/actions/actionCreators');

describe('<TaskDetail/>', () => {
  describe('Given an empty selected task', () => {
    test('Should show "There is no task"', () => {
      getTaskById.mockReturnValue(jest.fn);
      updateTask.mockReturnValue(jest.fn());

      render(<TaskDetail />, {
        initialState:
        { selectedTask: {} },
      });

      expect(screen.getByText(/There is no task/i)).toBeInTheDocument();
    });
  });
  describe('Given a selected task with state done', () => {
    test('Should state "Done"', () => {
      getTaskById.mockReturnValue(jest.fn);
      updateTask.mockReturnValue(jest.fn());

      const { container } = render(<TaskDetail />, {
        initialState:
        {
          selectedTask: {
            _id: 10, title: 'Title', description: 'Description', done: true,
          },
        },
      });

      const descriptionInput = container.querySelector('#task-description');
      const titleInput = container.querySelector('#task-detail__title');
      const doneButton = screen.getByText(/Mark as pending/i);
      fireEvent.change(descriptionInput, { target: { value: 'New description' } });
      fireEvent.change(titleInput, { target: { value: 'New title' } });
      fireEvent.click(doneButton);
      expect(screen.getByText(/Done/i)).toBeInTheDocument();
    });
  });
});
