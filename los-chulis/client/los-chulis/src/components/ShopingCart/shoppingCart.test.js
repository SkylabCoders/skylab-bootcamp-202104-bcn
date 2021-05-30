/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ShoppingCart from './index';
import { screen, render, fireEvent } from '../../utils/testUtils';
import actionTypes from '../../redux/actions/actionTypes';
import {
  loadCart, deleteFromCart, updateCart, loadProducts
} from '../../redux/actions/actionCreator';

jest.mock('./../../redux/actions/actionCreator');

describe('Given a ShoppingCart component', () => {
  describe('When is rendered with empty initialState', () => {
    test('Should appear /No products at cart/ in document', () => {
      const initialState = { cartList: [] };
      loadCart.mockReturnValue({
        type: actionTypes.LOAD_CART_PRODUCT,
        cartList: []
      });
      render(<ShoppingCart />, { initialState });
      expect(screen.getByText(/No products at cart/i)).toBeInTheDocument();
    });
  });
  describe('Whene is rendered with one product in cart', () => {
    beforeEach(() => {
      loadCart.mockReturnValue({
        type: actionTypes.LOAD_CART_PRODUCT,
        cartList: [{
          brand: 'Skylab', productType: 'mola', stock: 10, price: 5800
        }]
      });
      const initialState = {
        cartList: [{
          brand: 'Skylab', productType: 'mola', stock: 10, price: 5800
        }],
        products: [{
          brand: 'Hola', productType: 'bola', stock: 2, price: 5
        }]
      };
      render(<ShoppingCart />, { initialState });
    });
    describe('And delete button from cart is clicked', () => {
      test('deleteFromCart function in invoked', () => {
        const button = screen.getByTestId('button-remove');
        deleteFromCart.mockImplementationOnce(() => ({
          type: actionTypes.DELETE_CART_PRODUCT
        }));
        fireEvent.click(button);
        expect(deleteFromCart).toHaveBeenCalledTimes(1);
      });
    });
    describe('And But button is clicked', () => {
      test('buyCartList function must be invoked', () => {
        const button = screen.getByTestId('button-buy');
        updateCart.mockReturnValue({
          type: actionTypes.UPDATE_PRODUCTS,
          product: {}
        });
        loadProducts.mockImplementationOnce(() => ({
          type: actionTypes.LOAD_PRODUCT,
          products: [{
            brand: 'Hola', productType: 'bola', stock: 2, price: 5
          }]
        }));
        fireEvent.click(button);
        expect(updateCart).toHaveBeenCalledTimes(1);
        expect(loadProducts).toHaveBeenCalledTimes(1);
      });
    });
  });
});
