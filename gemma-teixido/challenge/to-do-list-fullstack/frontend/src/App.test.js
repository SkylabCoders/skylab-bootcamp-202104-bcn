/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Given ToDoList component', () => {
  describe('When is render with one task', () => {
    test('Then the task name should be in the document', async () => {
      const initialState = { tasks: [] };

      render(<App />, { initialState });

      expect(screen.getByText(/To-do-list/i)).toBeInTheDocument();
    });
  });
});
