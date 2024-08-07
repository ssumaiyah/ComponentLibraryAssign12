// Hero.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for the `toBeInTheDocument` matcher
import Hero from './Hero';
import { HeroProps } from './Hero.types';

describe('Hero Component', () => {
  it('renders title and subtitle correctly', () => {
    render(<Hero title="Hero Title" subtitle="This is a subtitle" background="lightblue" />);
    
    expect(screen.getByText('Hero Title')).toBeInTheDocument();
    expect(screen.getByText('This is a subtitle')).toBeInTheDocument();
  });

  it('applies the correct background color', () => {
    render(<Hero title="Hero Title" subtitle="This is a subtitle" background="lightgreen" />);
    
    const heroElement = screen.getByText('Hero Title').parentElement;
    expect(heroElement).toHaveStyle('background: lightgreen');
  });

  it('sets cursor to not-allowed when disabled', () => {
    render(<Hero title="Hero Title" subtitle="This is a subtitle" background="lightblue" disabled={true} />);
    
    const heroElement = screen.getByText('Hero Title').parentElement;
    expect(heroElement).toHaveStyle('cursor: not-allowed');
  });

  it('sets opacity to 0.5 when disabled', () => {
    render(<Hero title="Hero Title" subtitle="This is a subtitle" background="lightblue" disabled={true} />);
    
    const heroElement = screen.getByText('Hero Title').parentElement;
    expect(heroElement).toHaveStyle('opacity: 0.5');
  });

  it('does not render when visibility is false', () => {
    render(<Hero title="Hero Title" subtitle="This is a subtitle" background="lightblue" visibility={true} />);
    
    expect(screen.queryByText('Hero Title')).toBeNull();
  });
});
