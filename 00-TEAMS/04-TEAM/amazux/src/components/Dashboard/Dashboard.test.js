/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
import React from 'react';
import Dashboard from './index';
import { render, screen } from '../../test-utils';

test('should return a div with class products__list', () => {
  const { container } = render(<Dashboard />, {
    initialState: {
      products: [
        {
          img: {
            url: 'https://picsum.photos/200',
            hdUrl: 'https://picsum.photos/1000'
          },
          _id: 1,
          name: 'Iphone 8',
          cost: 800,
          category: 'Cellphones'
        },
        {
          img: {
            url: 'https://picsum.photos/200',
            hdUrl: 'https://picsum.photos/1000'
          },
          _id: 2,
          name: 'Iphone 10',
          cost: 1200,
          category: 'Cellphones'
        }
      ]
    }
  });
  const slider = container.querySelector('.slider');
  expect(slider).toBeInTheDocument();
});
