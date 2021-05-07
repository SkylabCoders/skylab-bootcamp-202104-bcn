/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from '../../../redux/store';

function render(
  ui,
  {
    initialState,
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={configureStore()}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
