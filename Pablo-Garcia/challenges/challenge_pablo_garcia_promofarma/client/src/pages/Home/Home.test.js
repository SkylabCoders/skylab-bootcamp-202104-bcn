import React from 'react';
import { render, screen, within, fireEvent } from '../../common/test';
import Home from './index';

const promisify = (value) => () => new Promise((resolve) => resolve(value));

const createProducts = () => {
  const createProduct = (data) => ({
    _id: 1,
    name: 'SuperProduct',
    price: 10,
    ...data
  });
  return [
    createProduct({ _id: 1, name: 'Product 1' }),
    createProduct({ _id: 2, name: 'Product 2' }),
    createProduct({ _id: 3, name: 'Product 3' })
  ];
};

jest.mock('../../common/services/product', () => ({
  getProducts: promisify({ data: createProducts() })
}));

describe('Home Page', () => {
  test('should render the initial products', async () => {
    // Arrange
    render(<Home />);

    const product = await screen.findByText('Product 1');
    // Expect
    expect(product).toBeInTheDocument();
  });

  test('should add the item to the cart', async () => {
    // Arrange
    render(<Home />);

    const { getByTestId } = within(await screen.findByTestId('product-item-0'));
    const addToCardButton = getByTestId('add-to-card');

    fireEvent.click(addToCardButton);

    const { findByText } = within(await screen.findByTestId('cart'));
    const cartProduct = await findByText('Product 1');

    // Expect
    expect(cartProduct).toBeInTheDocument();
  });
});
