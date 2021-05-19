/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen, fireEvent } from '../../test-utils';
import TaskAdder from './index';
import { addTask } from '../../redux/actions/actionCreators';

jest.mock('../../redux/actions/actionCreators');

describe('<TaskAdder>', () => {
  test('should render a task adder component with a title', () => {
    const initialState = { tasks: [] };

    render(<TaskAdder />, { initialState });

    expect(screen.getByText(/To do List/i)).toBeInTheDocument();
  });

  describe('When add task button is clicked', () => {
    test('add Task should be invoked', () => {
      // arrange
      const initialState = { tasks: [] };
      render(<TaskAdder />, { initialState });
      const button = screen.getByTestId('add-task-button-test');
      // act
      addTask.mockImplementationOnce(() => ({ type: 'add-task', task: 'mytask' }));
      fireEvent.click(button);
      // assert
      expect(addTask).toHaveBeenCalled();
    });
  });

  describe('When title input changes', () => {
    test('should fire the event on change', () => {
      // arrange
      const initialState = { tasks: [] };
      render(<TaskAdder />, { initialState });
      const button = screen.getByTestId('add-task-button-test');
      const input = screen.getByTestId('task-title-input');
      const mockedEvent = { target: { value: '3' } };
      // act
      addTask.mockImplementationOnce(() => ({ type: 'add-task', task: 'mytask' }));
      fireEvent.click(button);
      fireEvent.change(input, mockedEvent);
      // assert
      expect(addTask).toHaveBeenCalled();
    });
  });

  describe('When description input changes', () => {
    test('should fire the event on change', () => {
      // arrange
      const initialState = { tasks: [] };
      render(<TaskAdder />, { initialState });
      const button = screen.getByTestId('add-task-button-test');
      const input = screen.getByTestId('task-description-input');
      const mockedEvent = { target: { value: '3' } };
      // act
      addTask.mockImplementationOnce(() => ({ type: 'add-task', task: 'mytask' }));
      fireEvent.click(button);
      fireEvent.change(input, mockedEvent);
      // assert
      expect(addTask).toHaveBeenCalled();
    });
  });
});
