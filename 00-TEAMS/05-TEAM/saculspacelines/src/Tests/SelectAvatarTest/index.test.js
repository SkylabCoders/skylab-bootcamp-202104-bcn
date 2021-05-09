/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import SelectAvatar from '../../Components/SelectAvatar';
import configureStore from '../../redux/store/configureStore';

describe('Given a SelectAvatar component', () => {
  test('Should print a select avatar section', () => {
    const { container } = render(
      <Provider store={configureStore()}>
        <Router>
          <SelectAvatar />
        </Router>
      </Provider>,
      {
        initialState: {
          people: [{
            name: '',
            imgUrl: '',
            faction: 'LIGHT'
          }]
        }
      }
    );
    const chooseTitle = container.querySelector('h1');
    expect(chooseTitle.textContent).toBe('Choose your avatar');
  });
});
