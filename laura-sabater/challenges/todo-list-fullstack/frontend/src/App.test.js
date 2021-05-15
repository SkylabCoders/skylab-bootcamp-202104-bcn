/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Given App function, ', () => {
  test('while resolved, then render title with list', () => {
    render(<App />);
    const title = screen.getByText(/list/i);
    expect(title).toBeInTheDocument();
  });
});
