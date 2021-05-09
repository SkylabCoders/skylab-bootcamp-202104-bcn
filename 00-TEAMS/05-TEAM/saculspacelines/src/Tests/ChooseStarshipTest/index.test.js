/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import ChooseStarship from '../../Components/ChooseStarship';
import configureStore from '../../redux/store/configureStore';

describe('Given a Choose Starship component', () => {
  test('Should print a choose starship section', () => {
    const { container } = render(
      <Provider store={configureStore()}>
        <ChooseStarship />
      </Provider>,
      {
        initialState: {
          auth: {
            isLoggedIn: true,
            user: {
              email: 'admin@admin.com'
            }
          }
        }
      }
    );

    const chooseTitle = container.querySelector('.starships__title');
    expect(chooseTitle.textContent).toBe('Choose a starhsip');
  });
});
