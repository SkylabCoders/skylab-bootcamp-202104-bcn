/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import SelectAvatar from '../../Components/SelectAvatar';
import configureStore from '../../redux/store/configureStore';

describe('Given a Select Avatar component', () => {
  test('Should print a select avatar section', () => {
    const { container } = render(
      <Provider store={configureStore()}>
        <SelectAvatar />
      </Provider>, {
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

    const chooseTitle = container.querySelector('.select-avatar__title');
    expect(chooseTitle.textContent).toBe('Select your avatar');
  });
});
