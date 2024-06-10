import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const sizes = {
  small: '12px',
  medium: '16px',
  large: '20px',
};

const StyledText = styled.span<TextProps>`
  font-size: ${({ size }) => sizes[size || 'medium']};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  color: ${({ disabled }) => (disabled ? 'grey' : 'black')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
`;

const Text: React.FC<TextProps> = ({ children, size, bold, underline, disabled = false }) => (
  <StyledText size={size} bold={bold} underline={underline} disabled={disabled}>
    {children}
  </StyledText>
);

export default Text;
