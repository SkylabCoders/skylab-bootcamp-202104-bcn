/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import TasksList from './TasksList';
import { render, screen } from '../../assets/test-utils';

describe('Given a TasksList component', () => {
  test('Should render All Tasks', () => {
    render(<TasksList />);

    expect(screen.getByText(/All tasks/)).toBeInTheDocument();
  });

  test('Should render All Tasks', () => {
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

  test('Should render All Tasks', () => {
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
});
