/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { fireEvent, render, screen } from '../../assets/test-utils';
import actionTypes from '../../redux/actions/actionTypes';
import { addProduct, loadProducts } from '../../redux/actions/actionCreators';
import ProductList from '.';

jest.mock('../../redux/actions/actionCreators');

describe('Given a Product-List component', () => {
  let initialState;
  beforeEach(() => {
    initialState = { products: [] };
  });
  describe('When its rendered with no products', () => {
    test('Then \'Products \' should appear in the screen', () => {
      loadProducts.mockReturnValueOnce({
        type: actionTypes.LOAD_PRODUCTS,
        products: []
      });
      render(<ProductList />, initialState);
      expect(screen.getByText(/no hay productos en stock/)).toBeInTheDocument();
    });
  });

  describe('When its rendered with a Product', () => {
    beforeEach(() => {
      initialState = { products: [{ _id: 11, productName: 'Crema solar', stock: 5 }] };
      loadProducts.mockReturnValueOnce({
        type: actionTypes.LOAD_PRODUCTS,
        products: [{ _id: 11, productName: 'Crema solar', stock: 5 }]
      });
      render(<ProductList />, initialState);
    });
    test('Then \'Crema solar \' should appear in the screen', () => {
      expect(screen.getByText(/Crema solar/)).toBeInTheDocument();
    });

    describe('And then the ADD to cart button is clicked', () => {
      test('The product must be added to the Cart', () => {
        addProduct.mockReturnValueOnce({
          type: actionTypes.ADD_PRODUCTS,
          product: { _id: 11, productName: 'Crema solar', stock: 5 }
        });
        const addToCart = screen.getByTestId(11);
        fireEvent.click(addToCart);
        expect(addProduct).toHaveBeenCalled();
      });
    });
  });
});
