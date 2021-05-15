/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Task from './index';
import { render, screen, fireEvent } from '../../test-utils';
import { deleteTask } from '../../redux/actions/actionCreators';

jest.mock('../../redux/actions/actionCreators');

const taskUndone = {
  _id: 123456,
  title: 'Title',
  description: 'Description',
  done: false,
};

const taskDone = {
  _id: 123456,
  title: 'Title',
  description: 'Description',
  done: true,
};

describe('<Task/>', () => {
  describe('Given a task', () => {
    test('should show the task title', () => {
      render(<Task task={taskUndone} />);
      expect(screen.getByText(/Title/i)).toBeInTheDocument();
    });
  });
  describe('Given a done task', () => {
    test('should be an element h4, with className "done"', () => {
      const { container } = render(<Task task={taskDone} />);
      const title = container.querySelectorAll('h4')[0];
      expect(title.classList.contains('done')).toBe(true);
    });
  });
  describe('Given an undone task', () => {
    test('should be an element h4, with an empty className', () => {
      const { container } = render(<Task task={taskUndone} />);
      const title = container.querySelectorAll('h4')[0];
      expect(title.classList.contains('done')).toBe(false);
    });
  });
  describe('Given a task and clicking the delete button', () => {
    test('should call the handleDelete function', () => {
      deleteTask.mockReturnValue(jest.fn());
      render(<Task task={taskUndone} />);
      const button = screen.getByText(/x/i);
      fireEvent.click(button);
      expect(deleteTask).toHaveBeenCalled();
    });
  });
});
