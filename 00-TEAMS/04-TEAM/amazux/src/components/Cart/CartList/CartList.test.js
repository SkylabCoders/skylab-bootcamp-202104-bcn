/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, fireEvent } from '../../../test-utils';
import CartList from './index';
import { deleteProduct } from '../../../redux/actions/actionCreators';

jest.mock('../../../redux/actions/actionCreators');

beforeEach(() => {
  deleteProduct.mockReturnValue(jest.fn);
});

describe('<CartList/>', () => {
  const scenarios = [
    {
      state: {
        initialState: {
          cart: [{ name: 'iPhone', cost: 100, img: { url: 'fakeUrl' } }, { name: 'Ipad', cost: 300, img: { url: 'fakeUrl' } }]
        }
      },
      result: 2
    },
    {
      state: {
        initialState: {
          cart: []
        }
      },
      result: 0
    }
  ];
  scenarios.forEach((scenario) => {
    test(
      `should return ${scenario.result} <li> elements with className main-cart__item`, () => {
        const { container } = render(<CartList />, scenario.state);
        const result = container.querySelectorAll('.main-cart__item').length;
        expect(result).toBe(scenario.result);
      }
    );
  });
  test('should call deleteProduct actionCreator', () => {
    const { getAllByRole } = render(<CartList />, {
      initialState: {
        cart: [{ name: 'iPhone', cost: 100, img: { url: 'fakeUrl' } }, { name: 'Ipad', cost: 300, img: { url: 'fakeUrl' } }]
      }
    });
    const btn = getAllByRole('button')[0];
    fireEvent.click(btn);
    expect(deleteProduct).toHaveBeenCalled();
  });
});
