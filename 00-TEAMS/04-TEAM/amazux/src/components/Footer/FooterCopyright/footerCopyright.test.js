import React from 'react';
import { render, screen } from '../../../test-utils';
import FooterCopyright from './index';

describe('UserNav Component', () => {
  test('has an tag text', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const { container } = render(<FooterCopyright />);
    const asd = container.querySelector('.footer__copyrigth');
    expect(asd.textContent).toBe('@TheFAC team - Amazux');
  });

  test('has an copyright text', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    render(<FooterCopyright />);
    expect(screen.getByText(/@/i)).toBeInTheDocument();
  });
});
