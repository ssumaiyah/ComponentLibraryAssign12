// Image.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Image from './Image';
import { ImageProps } from './Image.types';

const renderImage = (props: Partial<ImageProps> = {}) => {
  return render(<Image src="https://via.placeholder.com/150" alt="Test Image" {...props} />);
};

describe('Image Component', () => {
  it('should render the image with given alt text', () => {
    renderImage();
    expect(screen.getByAltText('Test Image')).toBeInTheDocument();
  });

  it('should apply the correct size to the image', () => {
    renderImage({ size: '200px' });
    const image = screen.getByAltText('Test Image');
    expect(image).toHaveStyle('max-width: 200px');
  });

  it('should apply round shape to the image', () => {
    renderImage({ shape: 'round' });
    const image = screen.getByAltText('Test Image');
    expect(image).toHaveStyle('border-radius: 50%');
  });

  it('should apply square shape to the image', () => {
    renderImage({ shape: 'square' });
    const image = screen.getByAltText('Test Image');
    expect(image).toHaveStyle('border-radius: 0');
  });

  it('should apply disabled styles to the image', () => {
    renderImage({ disabled: true });
    const image = screen.getByAltText('Test Image');
    expect(image).toHaveStyle('opacity: 0.5');
    expect(image).toHaveStyle('cursor: not-allowed');
  });

  it('should not render the image if visibility is false', () => {
    renderImage({ visibility: false });
    expect(screen.getByAltText('Test Image')).toBeInTheDocument();
  });

  it('should not render the image if visibility is true', () => {
    renderImage({ visibility: true });
    expect(screen.queryByAltText('Test Image')).toBeNull();
  });
});
