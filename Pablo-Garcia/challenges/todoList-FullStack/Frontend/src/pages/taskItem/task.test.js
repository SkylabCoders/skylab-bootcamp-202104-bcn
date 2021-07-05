import React from 'react';
import { render, screen, fireEvent } from '../../common/test';
import Task from './task';

const mockTask = {
  _id: '1',
  task: 'Do homework',
  description_task: 'Homework from History class',
  done: true
};

const createTask = (values = {}) => ({
  ...mockTask,
  ...values
});

describe('Task Component', () => {
  test('should display the task title and description', () => {
    // Arrange
    const task = createTask();
    render(<Task task={task} />);

    const taskTitle = screen.getByText(mockTask.task);
    const taskDescription = screen.getByText(mockTask.description_task);

    // Expect
    expect(taskTitle).toBeInTheDocument();
    expect(taskDescription).toBeInTheDocument();
  });

  test('should show the task status', () => {
    // Arrange
    const task = createTask({ done: false });
    render(<Task task={task} />);

    const pendingText = screen.getByText('Pending');

    // Expect
    expect(pendingText).toBeInTheDocument();
  });

  test('should not display the task status if it is done', () => {
    // Arrange
    const task = createTask();
    render(<Task task={task} />);

    const pendingText = screen.queryByText('Pending');

    // Expect
    expect(pendingText).not.toBeInTheDocument();
  });

  test('should not display the delete button if handleDelete is not supplied', () => {
    // Arrange
    const task = createTask();
    render(<Task task={task} />);

    // Act
    const deleteButton = screen.queryByRole('button');

    // Expect
    expect(deleteButton).not.toBeInTheDocument();
  });

  test('should not display the task status if it is done', () => {
    // Arrange
    const task = createTask();
    const handleDelete = jest.fn();
    render(<Task task={task} handleDelete={handleDelete} />);

    // Act
    const deleteButton = screen.getByRole('button');
    fireEvent.click(deleteButton);

    // Expect
    expect(handleDelete).toHaveBeenCalled();
    expect(handleDelete).toHaveBeenCalledWith(mockTask._id);
  });
});
