/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ProductList from './index';
import { screen, render, fireEvent } from '../../utils/testUtils';
import actionTypes from '../../redux/actions/actionTypes';
import { addToCart, loadProducts } from '../../redux/actions/actionCreator';

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
  describe('Whene is rendered with one product', () => {
    beforeEach(() => {
      loadProducts.mockReturnValue({
        type: actionTypes.LOAD_PRODUCT,
        products: [{
          brand: 'Skylab', productType: 'mola', stock: 10, price: 5800
        }]
      });
      const initialState = {
        products: [{
          brand: 'Skylab', productType: 'mola', stock: 10, price: 5800
        }]
      };
      render(<ProductList />, { initialState });
    });
    describe('And add button is clicked', () => {
      test('addToCart function in invoked', () => {
        const button = screen.getByTestId('button-add-to-cart');
        addToCart.mockReturnValue({
          type: actionTypes.ADD_PRODUCTS_TO_CART,
          product: {
            brand: 'Hola', productType: 'Lola', stock: 10, price: 10
          }
        });
        fireEvent.click(button);
        expect(addToCart).toHaveBeenCalledTimes(1);
      });
    });
  });
});
