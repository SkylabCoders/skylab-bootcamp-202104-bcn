import React from 'react';
import { render, screen } from '@testing-library/react';
import Heading from './Heading';

describe('Heading Component', () => {
  test('should contain the supplied content text', () => {
    // Arrange
    render(<Heading content="Hi" type={1} />);

    // Expect
    const content = screen.getByText(/Hi/i);
    expect(content).toBeInTheDocument();
  });
});
