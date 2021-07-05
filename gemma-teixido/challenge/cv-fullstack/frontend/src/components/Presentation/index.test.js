/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '../../utils/test-utils';
import Presentation from './index';
import getInformation from '../../redux/actions/actionCreators';

jest.mock('../../redux/actions/actionCreators');

describe('Presentation component', () => {
  test('should call getInformation', () => {
    getInformation.mockReturnValue({ type: '' });
    render(<Presentation />, {
      initialState: {
        details: []
      }
    });
    expect(getInformation).toHaveBeenCalled();
  });
});
