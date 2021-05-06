/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '../../test-utils';
import Products from './index';
import { loadProducts } from '../../redux/actions/actionCreators';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '5a0b35c1734d1d08bf7084c3' })
}));

jest.mock('../../redux/actions/actionCreators');

describe('<Products/>', () => {
  test('should call loadProducts actionCreator', () => {
    loadProducts.mockReturnValue(jest.fn);
    render(<Products />, {
      initialState: {
        products: []
      }
    });
    expect(loadProducts).toHaveBeenCalled();
  });

  test('should show an sku with the same string as the url', () => {
    loadProducts.mockReturnValue(jest.fn);
    render(<Products />, {
      initialState: {
        products: [{
          name: 'Iphone 8',
          category: 'phones',
          cost: 800,
          img: {
            url: 'fakeUrl',
            hdUrl: 'fakeHdUrl'
          },
          _id: '5a0b35c1734d1d08bf7084c3'
        }]
      }
    });
    expect(screen.getByText(/5a0b35c1734d1d08bf7084c3/i)).toBeInTheDocument();
  });
});
