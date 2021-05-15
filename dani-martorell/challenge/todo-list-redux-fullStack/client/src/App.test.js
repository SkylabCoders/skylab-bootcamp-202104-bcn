/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from './utils/test-utils';
import App from './App';

describe('Given a List component', () => {
  describe('When is redered', () => {
    test('Then \'Tasks Tracker\' should be in the document', () => {
      render(<App />);

      expect(screen.getByText(/Tasks Tracker/i)).toBeInTheDocument();
    });
  });
});
