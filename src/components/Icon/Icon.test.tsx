import React from 'react';
import { render, screen } from '@testing-library/react';
import Icon from './Icon';

describe('Icon Component', () => {
  const props = {
    name: 'twitter' as const,
    url: 'https://twitter.com',
    type: 'primary' as const,
    disabled: false,
  };

  it('renders the icon correctly', () => {
    render(<Icon {...props} />);
    const iconElement = screen.getByTestId('icon');
    expect(iconElement).toBeTruthy();
  });

  it('applies the correct classes', () => {
    render(<Icon {...props} />);
    const iconLinkElement = screen.getByRole('link');
    expect(iconLinkElement.className).toContain('icon-link primary');
  });

  it('renders a disabled icon when disabled is true', () => {
    render(<Icon {...props} disabled={true} />);
    const iconLinkElement = screen.getByRole('link');
    expect(iconLinkElement.className).toContain('disabled');
  });

  it('has the correct href attribute', () => {
    render(<Icon {...props} />);
    const iconLinkElement = screen.getByRole('link');
    expect(iconLinkElement.getAttribute('href')).toBe(props.url);
  });

  it('opens the link in a new tab with noopener noreferrer', () => {
    render(<Icon {...props} />);
    const iconLinkElement = screen.getByRole('link');
    expect(iconLinkElement.getAttribute('target')).toBe('_blank');
    expect(iconLinkElement.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('renders the correct icon based on name prop', () => {
    render(<Icon {...props} />);
    const iconElement = screen.getByTestId('icon');
    expect(iconElement.getAttribute('data-icon')).toBe('twitter'); // FontAwesome adds the data-icon attribute
  });
});
