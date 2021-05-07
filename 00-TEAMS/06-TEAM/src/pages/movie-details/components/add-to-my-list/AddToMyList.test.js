import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddToMyList from './AddToMyList';

describe('AddToMyList Component', () => {
  test('should contain the supplied content text', () => {
    // Arrange
    const callback = jest.fn();
    render(<AddToMyList onAddToMyList={callback} id={500} />);

    // Act
    const button = screen.getByText('Add to my list');
    fireEvent.click(button);

    // Expect
    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledWith(500);
  });
});
