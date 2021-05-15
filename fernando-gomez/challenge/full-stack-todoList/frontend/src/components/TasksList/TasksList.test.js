/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen, fireEvent } from '../../test-utils';
import TasksList from './index';
import { loadTasks } from '../../redux/actions/actionCreators';

jest.mock('../../redux/actions/actionCreators');

describe('<TasksList>', () => {
  test('should render a task list component with a title', () => {
    const initialState = { tasks: [{ _id: '3' }, { _id: '4' }] };
    render(<TasksList />, { initialState });
    loadTasks.mockReturnValue(() => [{ _id: '3' }, { _id: '4' }]);
    const editButton = screen.getByTestId('edit-3');
    fireEvent.click(editButton);
    const mockedEvent = { target: { value: '3' } };
    const titleInput = screen.getByTestId('title-input-3');
    fireEvent.change(titleInput, mockedEvent);
    const descriptionInput = screen.getByTestId('description-input-3');
    fireEvent.change(descriptionInput, mockedEvent);

    const submitEdit = screen.getByTestId('submit-edit-3');
    fireEvent.click(submitEdit);

    expect(screen.getByText(/My tasks/i)).toBeInTheDocument();
  });
});

describe('<TasksList>', () => {
  test('should click a delete button', () => {
    const initialState = { tasks: [{ _id: '3' }, { _id: '4' }] };
    render(<TasksList />, { initialState });
    loadTasks.mockReturnValue(() => [{ _id: '3' }, { _id: '4' }]);

    const deleteButton = screen.getByTestId('delete-3');
    fireEvent.click(deleteButton);

    expect(screen.getByText(/My tasks/i)).toBeInTheDocument();
  });
});

describe('<TasksList>', () => {
  test('should render a task list component with a title', () => {
    const initialState = { tasks: [{ _id: '3' }, { _id: '4' }] };
    render(<TasksList />, { initialState });
    loadTasks.mockReturnValue(() => [{ _id: '3' }, { _id: '4' }]);
    const editButton = screen.getByTestId('edit-3');
    fireEvent.click(editButton);
    const mockedEvent = { target: { value: '3' } };

    const titleInput = screen.getByTestId('title-input-3');
    fireEvent.change(titleInput, mockedEvent);

    const descriptionInput = screen.getByTestId('description-input-3');
    fireEvent.change(descriptionInput, mockedEvent);

    const hideEdit = screen.getByTestId('hide-3');
    fireEvent.click(hideEdit);

    const doneEdit = screen.getByTestId('done-3');
    fireEvent.click(doneEdit);

    expect(screen.getByText(/My tasks/i)).toBeInTheDocument();
  });
});
