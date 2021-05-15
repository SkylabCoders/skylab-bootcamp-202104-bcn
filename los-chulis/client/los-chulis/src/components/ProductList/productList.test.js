/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ProductList from './index';
import { screen, render } from '../../utils/testUtils';
import actionTypes from '../../redux/actions/actionTypes';
import { loadProducts } from '../../redux/actions/actionCreator';

jest.mock('./../../redux/actions/actionCreator');

describe('Given a ProductList component', () => {
  describe('When is rendered with empty initialState', () => {
    test('Should appear /No products/ at document', () => {
      const initialState = { products: [] };
      loadProducts.mockReturnValue({
        type: actionTypes.LOAD_PRODUCT,
        products: []
      });
      render(<ProductList />, { initialState });
      expect(screen.getByText(/No products/i)).toBeInTheDocument();
    });
  });
});
