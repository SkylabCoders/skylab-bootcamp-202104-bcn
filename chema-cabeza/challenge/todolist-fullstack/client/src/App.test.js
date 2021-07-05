/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App', () => {
  test('renders To Do List link', () => {
    render(<App />);
    const title = screen.getByText(/My ToDo List/i);
    expect(title).toBeInTheDocument();
  });
});
