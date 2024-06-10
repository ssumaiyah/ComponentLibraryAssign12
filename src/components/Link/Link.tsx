// Link.tsx

import React from 'react';
import styled from 'styled-components';
import { LinkProps } from './Link.types';

interface StyledLinkProps {
  color?: string;
  disabled?: boolean;
}

const StyledLink = styled.a<StyledLinkProps>`
  color: ${({ color }) => color || 'blue'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  text-decoration: ${({ disabled }) => (disabled ? 'none' : 'underline')};
  &:hover {
    text-decoration: ${({ disabled }) => (disabled ? 'none' : 'underline')};
  }
`;

const Link: React.FC<LinkProps> = ({ href, children, color, disabled = false, visibility = false }) => {
  if (visibility) {
    return null; // Hide the component when visibility is true
  }

  return (
    <StyledLink href={disabled ? undefined : href} color={color} disabled={disabled}>
      {children}
    </StyledLink>
  );
};

export default Link;
