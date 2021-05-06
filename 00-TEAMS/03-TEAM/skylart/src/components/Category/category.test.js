/* eslint-disable react/jsx-filename-extension */
import React, { useParams } from 'react';
import axios from 'axios';
import Category from './index';
import { render, screen } from '../../utils/test-utils';

jest.mock('axios');

describe('For a Category component', () => {
  test('should contain <img> ', () => {
    render(<Category />, {
      initialState: {
        category: [
          {
            primaryImageSmall: 'hola',
          },
        ],
      },
      urlParam: '/23',
    });
    expect(screen.getByAltText('hola')).toBeInTheDocument();
  });
});
