/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import TasksList from './TasksList';
import { fireEvent, render, screen } from '../../assets/test-utils';
import { createTask, deleteTask, updateTask } from '../../redux/actions/actionCreators';

// jest.mock('../../redux/actions/actionCreators');

describe('Given a TasksList component', () => {
  test('Should render All Tasks', () => {
    render(<TasksList />);

    expect(screen.getByText(/All tasks/)).toBeInTheDocument();
  });

  test('Should render sacar', () => {
    render(<TasksList />, {
      initialState: {
        tasks: [{
          _id: '123',
          name: 'Sacar al perro',
          isFinished: false,
        }],
      },
    });

    expect(screen.getByText(/Sacar/)).toBeInTheDocument();
  });

  test('Should render iaia', () => {
    render(<TasksList />, {
      initialState: {
        tasks: [{
          _id: '123',
          name: 'Llamar a iaia',
          isFinished: false,
        }],
      },
    });

    expect(screen.getByText(/iaia/)).toBeInTheDocument();
  });

  test('Should call dispatch when clicked Add a task button', () => {
    render(<TasksList />, {
      initialState: {
        tasks: [{
          _id: '123',
          name: 'Llamar a iaia',
          isFinished: false,
        }],
      },
    });
    fireEvent.click(screen.getByText(/Add a task/));
    const dispatch = jest.fn();
    dispatch(createTask());

    expect(dispatch).toHaveBeenCalled();
  });

  test('Should call dispatch when clicked Delete', () => {
    render(<TasksList />, {
      initialState: {
        tasks: [{
          _id: '123',
          name: 'Llamar a iaia',
          isFinished: false,
        }],
      },
    });
    fireEvent.click(screen.getByText(/Delete/));
    const dispatch = jest.fn();
    dispatch(deleteTask());

    expect(dispatch).toHaveBeenCalled();
  });

  test('Should call dispatch when clicked Delete', () => {
    render(<TasksList />, {
      initialState: {
        tasks: [{
          _id: '123',
          name: 'Llamar a iaia',
          isFinished: false,
        }],
      },
    });
    fireEvent.click(screen.getByText(/Done/));
    const dispatch = jest.fn();
    dispatch(updateTask());

    expect(dispatch).toHaveBeenCalled();
  });
});
