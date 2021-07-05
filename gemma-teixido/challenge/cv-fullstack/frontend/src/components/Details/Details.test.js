/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '../../utils/test-utils';
import Details from './index';
import getInformation from '../../redux/actions/actionCreators';

jest.mock('../../redux/actions/actionCreators');

describe('Presentation component', () => {
  test('should call getInformation', () => {
    getInformation.mockReturnValue({ type: '' });
    render(<Details />, {
      initialState: {
        details: []
      }
    });
    expect(getInformation).toHaveBeenCalled();
  });
});
