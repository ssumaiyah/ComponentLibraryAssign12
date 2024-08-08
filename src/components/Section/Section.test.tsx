// Section.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Ensure this is installed
import Section from './Section';
import { SectionProps } from './Section.types';

// Helper function to render the component with default props
const renderSection = (props: Partial<SectionProps> = {}) => {
  return render(<Section {...props}>Test Section</Section>);
};

describe('Section Component', () => {
  it('should render the section with given children', () => {
    renderSection();
    expect(screen.getByText('Test Section')).toBeInTheDocument();
  });

  it('should apply the correct background color', () => {
    renderSection({ background: 'lightgray' });
    const section = screen.getByText('Test Section');
    expect(section).toHaveStyle('background: lightgray');
  });

  it('should apply disabled styles', () => {
    renderSection({ disabled: true });
    const section = screen.getByText('Test Section');
    expect(section).toHaveStyle('opacity: 0.5');
    expect(section).toHaveStyle('cursor: not-allowed');
  });

  it('should apply default background when no background is specified', () => {
    renderSection();
    const section = screen.getByText('Test Section');
    expect(section).toHaveStyle('background: white'); // Default background
  });

  it('should not render the section if visibility is true', () => {
    renderSection({ visibility: true });
    expect(screen.queryByText('Test Section')).toBeNull();
  });
});
