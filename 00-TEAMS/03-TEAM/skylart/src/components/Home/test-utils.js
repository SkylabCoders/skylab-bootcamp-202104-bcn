/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from '../../redux/store/index';

function render(
  ui,
  {
    initialState,
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={configureStore(initialState)}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}
// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
