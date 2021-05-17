import React from 'react';
import TasksTodo from './index';
import { render } from '../../../utils/test-utils';
import { loadTasks } from '../../redux/actions/actionCreator';

describe('TasksTodo', () => {
  test('should display buy', () => {
    render(<TasksTodo />, {
      initialState: {
        heroes: [{}, { name: 'buy' }]
      }
    });
    // eslint-disable-next-line no-restricted-globals
    expect(screen.getByText(/buy/i)).toBeInTheDocument();
  });

  test('should call loadTasks', () => {
    loadTasks.mockReturnValue({ type: '' });
    render(<TasksTodo />, {
      initialState: {
        heroes: []
      }
    });
    expect(loadTasks).toHaveBeenCalled();
  });
});
