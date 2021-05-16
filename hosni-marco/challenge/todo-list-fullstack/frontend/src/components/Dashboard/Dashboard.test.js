/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Dashboard from './index';
import { screen, render } from '../../utils/test-utils';
import { loadTasks } from '../../redux/actions/actionCreators';

jest.mock('../../redux/actions/actionCreators');

describe('Dashboard component', () => {
  test('should display \'Repeat test\'', () => {
    render(<Dashboard />, {
      initialState: {
        tasks: [{}, { task: 'Repeat test' }]
      }
    });
    expect(screen.getByText(/Repeat test/i)).toBeInTheDocument();
  });

  test('should call loadTasks', () => {
    loadTasks.mockReturnValue({ type: '' });
    render(<Dashboard />, {
      initialState: {
        tasks: []
      }
    });
    expect(loadTasks).toHaveBeenCalled();
  });
});
