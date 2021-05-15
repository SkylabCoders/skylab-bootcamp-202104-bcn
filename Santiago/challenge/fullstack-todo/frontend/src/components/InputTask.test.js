/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen, fireEvent } from '../utils/test-utils';
import { addTask } from '../redux/actions/actionCreators';
import InputTask from './InputTask';

jest.mock('../redux/actions/actionCreators');

describe('Given InputTask component', () => {
  describe('When is rendered with one task', () => {
    test('Then the task name should be in the document', async () => {
      const initialState = { tasks: [{ name: 'Walk the dog' }] };
      render(<InputTask />, { initialState });
      expect(screen.getByText(/Walk the dog/i)).toBeInTheDocument();
    });
  });
});

describe('Given InputTask component', () => {
  let initialState;
  beforeEach(() => {
    initialState = { tasks: [{ name: 'Walk the dog' }] };
    render(<InputTask />, { initialState });
  });

  describe('When add button is clicked', () => {
    test('Then addTask should be invoked', async () => {
      addTask.mockImplementationOnce(() => ({ type: 'add' }));
      fireEvent.click(screen.getByRole('button', { name: /ADD/i }));
      expect(addTask).toHaveBeenCalled();
    });
  });
});
