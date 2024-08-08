// Hero.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from './Hero';
import { HeroProps } from './Hero.types';

// Helper function to render the component with default props
const renderHero = (props: Partial<HeroProps> = {}) => {
  return render(
    <Hero title="Test Title" subtitle="Test Subtitle" background="lightblue" {...props} />
  );
};

describe('Hero Component', () => {
  it('should render the title and subtitle', () => {
    renderHero();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  it('should apply the correct background color', () => {
    renderHero({ background: 'lightcoral' });
    const heroElement = screen.getByText('Test Title').closest('div');
    expect(heroElement).toHaveStyle('background: lightcoral');
  });

  it('should apply disabled styles when disabled is true', () => {
    renderHero({ disabled: true });
    const heroElement = screen.getByText('Test Title').closest('div');
    expect(heroElement).toHaveStyle('opacity: 0.5');
    expect(heroElement).toHaveStyle('cursor: not-allowed');
  });

  it('should not render the component if visibility is true', () => {
    renderHero({ visibility: true });
    expect(screen.queryByText('Test Title')).toBeNull();
    expect(screen.queryByText('Test Subtitle')).toBeNull();
  });
});
