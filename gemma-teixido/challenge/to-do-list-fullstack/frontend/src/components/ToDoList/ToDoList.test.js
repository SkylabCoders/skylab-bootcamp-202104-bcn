/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen, fireEvent } from '../../utils/test-utils';
import { addTask, deleteTask, doneTask } from '../../redux/actions/actionCreator';
import ToDoList from './index';

jest.mock('../../redux/actions/actionCreator');

describe('Given ToDoList component', () => {
  describe('When is render with one task', () => {
    test('Then the task name should be in the document', async () => {
      const initialState = { tasks: [{ task: 'Buy milk' }] };

      render(<ToDoList />, { initialState });

      expect(screen.getByText(/Buy milk/i)).toBeInTheDocument();
    });
  });
});

describe('Given ToDoList component', () => {
  let initialState;
  beforeEach(() => {
    initialState = { tasks: [{ name: 'Buy milk' }] };
    render(<ToDoList />, { initialState });
  });

  describe('And delete button is clicked', () => {
    test('Then handleDelete sould be invoked', async () => {
      deleteTask.mockImplementationOnce(() => ({ type: 'delete' }));

      fireEvent.click(screen.getByText(/Delete/i));

      expect(deleteTask).toHaveBeenCalled();
    });
  });

  describe('And done button is clicked', () => {
    test('Then handleDone sould be invoked', async () => {
      doneTask.mockImplementationOnce(() => ({ type: 'done' }));

      fireEvent.click(screen.getByText(/Done/i));

      expect(doneTask).toHaveBeenCalled();
    });
  });

  describe('And add button is clicked', () => {
    test('Then addTask sould be invoked', async () => {
      addTask.mockImplementationOnce(() => ({ type: 'add' }));

      fireEvent.click(screen.getByText(/Add/i));

      expect(addTask).toHaveBeenCalled();
    });
  });
});
