// Text.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Text from './Text';
import { TextProps } from './Text.types';

// Helper function to render the component with default props
const renderText = (props: Partial<TextProps> = {}) => {
  return render(<Text {...props}>Test Text</Text>);
};

describe('Text Component', () => {
  it('should render the text with given children', () => {
    renderText();
    expect(screen.getByText('Test Text')).toBeInTheDocument();
  });

  it('should apply the correct font size for small', () => {
    renderText({ size: 'small' });
    const textElement = screen.getByText('Test Text');
    expect(textElement).toHaveStyle('font-size: 12px');
  });

  it('should apply the correct font size for medium', () => {
    renderText({ size: 'medium' });
    const textElement = screen.getByText('Test Text');
    expect(textElement).toHaveStyle('font-size: 16px');
  });

  it('should apply the correct font size for large', () => {
    renderText({ size: 'large' });
    const textElement = screen.getByText('Test Text');
    expect(textElement).toHaveStyle('font-size: 20px');
  });

  it('should apply bold style when bold is true', () => {
    renderText({ bold: true });
    const textElement = screen.getByText('Test Text');
    expect(textElement).toHaveStyle('font-weight: bold');
  });

  it('should apply underline style when underline is true', () => {
    renderText({ underline: true });
    const textElement = screen.getByText('Test Text');
    expect(textElement).toHaveStyle('text-decoration: underline');
  });

  it('should apply disabled styles when disabled is true', () => {
    renderText({ disabled: true });
    const textElement = screen.getByText('Test Text');
    expect(textElement).toHaveStyle('color: grey');
    expect(textElement).toHaveStyle('cursor: not-allowed');
  });

  it('should not render the text if visibility is true', () => {
    renderText({ visibility: true });
    expect(screen.queryByText('Test Text')).toBeNull();
  });
});
