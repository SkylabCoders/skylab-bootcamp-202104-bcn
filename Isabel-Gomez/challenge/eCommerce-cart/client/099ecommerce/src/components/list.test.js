/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import List from './List';
import { fireEvent, render, screen } from '../utils/test-utils';
import {
  loadTasks, addTask, deleteTask, updateTask, doneTask, loadItems, loadItemById,
} from '../redux/actions/actionCreators';
import actionTypes from '../redux/actions/actionTypes';

jest.mock('../redux/actions/actionCreators');

describe('Given a List component', () => {
  describe('When is rendered with empty initial state', () => {
    test('then loadItems actionCreator should be called', () => {
      const initialState = { products: [] };
      loadItems.mockReturnValue({
        type: actionTypes.LOAD_ITEMS,
        items: [],
      });
      render(<List />, { initialState });
      expect(loadItems).toHaveBeenCalled();
    });
  });

  describe('When is rendered with one product', () => {
    test('then a addToCart button shul be in the document', () => {
      const initialState = { products: [{ name: 'crema', price: 200 }] };
      loadItems.mockReturnValue({
        type: actionTypes.LOAD_ITEMS,
        items: [{ name: 'crema', price: 200 }],
      });

      const { container } = render(<List />, { initialState });

      const targetClasses = container.querySelectorAll('.items-list__item');

      expect(targetClasses.length).toBe(1);
    });

    describe('And addToCart button is clicked', () => {
      test('then loadItemById is called', () => {
        const addToCartButton = screen.getByTestId('addToCart-button-1');
        loadItemById.mockImplementation();
        fireEvent.click(addToCartButton);
        expect(loadItemById).toHaveBeenCalled();
      });
    });
  });
});
