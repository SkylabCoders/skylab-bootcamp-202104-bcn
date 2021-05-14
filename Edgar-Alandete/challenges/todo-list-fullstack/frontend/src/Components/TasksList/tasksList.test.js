/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import TasksList from './TasksList';
import { fireEvent, render, screen } from '../../assets/test-utils';
import { createTask } from '../../redux/actions/actionCreators';

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

  test('Should call dispatch', () => {
    const { getAllByRole } = render(<TasksList />, {
      initialState: {
        tasks: [{
          _id: '123',
          name: 'Llamar a iaia',
          isFinished: false,
        }],
      },
    });
    const buttonCreate = getAllByRole('button')[0];
    fireEvent.click(buttonCreate);
    const dispatch = jest.fn();
    dispatch(createTask());

    expect(dispatch).toHaveBeenCalled();
  });
});
