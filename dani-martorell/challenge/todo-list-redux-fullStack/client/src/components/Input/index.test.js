/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { fireEvent, render, screen } from '../../utils/test-utils';
import { addTask } from '../../redux/actions/actionCreators';

import Input from './index';

jest.mock('../../redux/actions/actionCreators');

describe('Given an Input component', () => {
  beforeEach(() => {
    render(<Input />);
  });

  describe('When the page is rendered', () => {
    test('Then \'Add Task\' should be in the document', () => {
      expect(screen.getByText(/Add Task/i)).toBeInTheDocument();
    });
  });
  describe('When add task button is clicked', () => {
    test('Then handleCLick should be called', () => {
      addTask.mockReturnValueOnce(jest.fn());
      fireEvent.click(screen.getByText(/Add Task/i));
      expect(addTask).toHaveBeenCalled();
    });
  });
});
