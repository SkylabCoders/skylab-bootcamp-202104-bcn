/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from './utils/test-utils';
import App from './App';

describe('Given a app component', () => {
  describe('When is redered', () => {
    test('Then \'TO DO LIST\' should be in the document', () => {
      render(
        <App />,
      );
      expect(screen.getByText(/TO DO LIST/i)).toBeInTheDocument();
    });
  });
});
