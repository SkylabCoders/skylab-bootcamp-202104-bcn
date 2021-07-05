/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { getTaskById, updateTask } from '../../redux/actions/actionCreators';
import { render, screen, fireEvent } from '../../test-utils';
import TaskDetail from './index';

const mockHistoryGoBack = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '5a0b35c1734d1d08bf7084c3' }),
  useHistory: () => (
    {
      goBack: mockHistoryGoBack,
    }),
}));

jest.mock('../../redux/actions/actionCreators');

describe('<TaskDetail/>', () => {
  describe('Given an id from an existant task', () => {
    test('Should call "getTaskById"', () => {
      getTaskById.mockReturnValue(jest.fn);
      updateTask.mockReturnValue(jest.fn());
      render(<TaskDetail />, {
        initialState:
        { selectedTask: { id: '5a0b35c1734d1d08bf7084c3' } },
      });

      expect(getTaskById).toHaveBeenCalled();
    });
  });
  describe('Given a selectedTask, and clicked "save" button', () => {
    test('Should call "updateTask"', () => {
      getTaskById.mockReturnValue(jest.fn);
      updateTask.mockReturnValue(jest.fn());
      render(<TaskDetail />, {
        initialState:
        {
          selectedTask: {
            _id: 10, title: 'Title', description: 'Description', done: false,
          },
        },
      });
      const button = screen.getByTestId('save-button');
      fireEvent.click(button);
      expect(updateTask).toHaveBeenCalled();
    });
  });
  describe('Given a selectedTask, and clicked "go back" button', () => {
    test('Should call "history.goBack" function', () => {
      getTaskById.mockReturnValue(jest.fn);
      updateTask.mockReturnValue(jest.fn());
      render(<TaskDetail />, {
        initialState:
        {
          selectedTask: {
            _id: 10, title: 'Title', description: 'Description', done: false,
          },
        },
      });
      const button = screen.getByTestId('goback-button');
      fireEvent.click(button);
      expect(mockHistoryGoBack).toHaveBeenCalled();
    });
  });
});
