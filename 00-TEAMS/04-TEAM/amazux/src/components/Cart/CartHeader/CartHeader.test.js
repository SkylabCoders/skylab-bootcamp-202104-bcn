/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '../../../test-utils';
import CartHeader from './index';

describe('<CartHeader/>', () => {
  const scenarios = [
    {
      state: {
        initialState: {
          cart: [{ name: 'iPhone', cost: 100 }, { name: 'Ipad', cost: 300 }]
        }
      },
      result: 'Total: 400'
    },
    {
      state: {
        initialState: {
          cart: []
        }
      },
      result: 'Total: 0'
    }
  ];
  scenarios.forEach((scenario) => {
    test('should show de quantity of products in the cart', () => {
      const { container } = render(<CartHeader />, scenario.state);
      const result = container.querySelectorAll('h3')[0].textContent;
      expect(scenario.result).toMatch(result);
    });
  });
});
