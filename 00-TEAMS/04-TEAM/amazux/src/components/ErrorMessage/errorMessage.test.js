/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  render, screen, fireEvent
} from './test-utils';
import ErrorMessage from './index';
import { deleteError } from '../../redux/actions/actionCreators';

jest.mock('../../redux/actions/actionCreators');

beforeEach(() => {
  deleteError.mockReturnValue(jest.fn);
});

describe('<ErrorMessage/>', () => {
  test('should return an error message', () => {
    render(<ErrorMessage message="this is an error" />);
    expect(screen.getByText(/this is an error/i)).toBeInTheDocument();
  });

  test('should call deleteError actionCreator', () => {
    const { getAllByRole } = render(<ErrorMessage message="Hola Josep" />);
    const btn = getAllByRole('button')[0];
    // console.log(btn);
    fireEvent.click(btn);
    expect(deleteError).toHaveBeenCalled();
  });
});
