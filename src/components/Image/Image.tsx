// Image.tsx

import React from 'react';
import styled from 'styled-components';
import { ImageProps } from './Image.types';

const StyledImage = styled.img<ImageProps>`
  width: ${({ size }) => size || '100%'};
  height: auto;
  border-radius: ${({ shape }) => (shape === 'round' ? '50%' : '0')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
`;

const Image: React.FC<ImageProps> = ({ src, alt, size, shape, disabled = false, visibility = false }) => {
  if (visibility) {
    return null; // Hide the component when visibility is true
  }

  return <StyledImage src={src} alt={alt} size={size} shape={shape} disabled={disabled} />;
};

export default Image;
