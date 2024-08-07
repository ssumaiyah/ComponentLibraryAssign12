import React from 'react';
import { render, screen } from '@testing-library/react';
import Link from './Link'; // make sure to import the Link component correctly

describe('Link component', () => {
  test('renders primary link', () => {
    render(<Link href="#" color="blue">Primary Link</Link>);
    const linkElement = screen.getByText('Primary Link');
    expect(linkElement).toBeInTheDocument();
  });

  test('renders secondary link', () => {
    render(<Link href="#" color="gray">Secondary Link</Link>);
    const linkElement = screen.getByText('Secondary Link');
    expect(linkElement).toBeInTheDocument();
  });
});