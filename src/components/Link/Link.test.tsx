// Link.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Link from './Link';
import { LinkProps } from './Link.types';

const renderLink = (props: Partial<LinkProps> = {}) => {
  return render(<Link href="#" {...props}>Test Link</Link>);
};

describe('Link Component', () => {
  it('should render the link with given text', () => {
    renderLink();
    expect(screen.getByText('Test Link')).toBeInTheDocument();
  });

  it('should apply the correct color', () => {
    renderLink({ color: 'green' });
    const link = screen.getByText('Test Link');
    expect(link).toHaveStyle('color: green');
  });

  it('should apply disabled styles', () => {
    renderLink({ disabled: true });
    const link = screen.getByText('Test Link');
    expect(link).toHaveStyle('cursor: not-allowed');
    expect(link).toHaveStyle('text-decoration: none');
  });

  it('should apply default color when no color is specified', () => {
    renderLink();
    const link = screen.getByText('Test Link');
    expect(link).toHaveStyle('color: blue'); // Default color
  });

  it('should not render the link if visibility is true', () => {
    renderLink({ visibility: true });
    expect(screen.queryByText('Test Link')).toBeNull();
  });

  it('should render the link with underline when not disabled', () => {
    renderLink({ disabled: false });
    const link = screen.getByText('Test Link');
    expect(link).toHaveStyle('text-decoration: underline');
  });

  it('should not apply underline when disabled', () => {
    renderLink({ disabled: true });
    const link = screen.getByText('Test Link');
    expect(link).toHaveStyle('text-decoration: none');
  });
});
