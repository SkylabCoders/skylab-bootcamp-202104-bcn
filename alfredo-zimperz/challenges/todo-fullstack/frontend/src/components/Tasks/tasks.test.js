/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { addTask, loadTasks } from '../../redux/actions/actionCreators';
import {
  render, screen, fireEvent,
} from '../../test-utils';
import Tasks from './index';

jest.mock('../../redux/actions/actionCreators');

const tasks = [{
  _id: 123456,
  title: 'Title',
  description: 'Description',
  done: false,
},
{
  _id: 123456,
  title: 'Title',
  description: 'Description',
  done: true,
}];

describe('<Tasks/>', () => {
  describe('Given a list of two tasks', () => {
    test('should show two Task with title "title"', () => {
      render(<Tasks />, { initialState: { tasks } });
      const showedTasks = screen.getAllByText(/title/i);
      expect(showedTasks.length).toBe(2);
    });
  });
  describe('Given an empty tasks list', () => {
    test('Should call loadTask', () => {
      loadTasks.mockReturnValueOnce(jest.fn);

      render(<Tasks />, {
        initialState: { tasks: [] },
      });

      expect(loadTasks).toHaveBeenCalled();
    });
  });
  describe('Given a list of two tasks', () => {
    describe('filling the inputs and pressing "add task" button', () => {
      test('Should call addTask', () => {
        addTask.mockReturnValueOnce(jest.fn);

        render(<Tasks />, {
          initialState: { tasks },
        });

        const descriptionInput = screen.getByTestId('add-task_description_input');
        const titleInput = screen.getByTestId('add-task_title_input');
        const addTaskButton = screen.getByTestId('add-task_button');
        fireEvent.change(descriptionInput, { target: { value: 'New task description' } });
        fireEvent.change(titleInput, { target: { value: 'New task title' } });
        fireEvent.click(addTaskButton);

        expect(addTask).toHaveBeenCalled();
      });
    });
  });
});
