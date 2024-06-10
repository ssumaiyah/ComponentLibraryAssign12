// Section.tsx

import React from 'react';
import styled from 'styled-components';
import { SectionProps } from './Section.types';

const StyledSection = styled.section<SectionProps>`
  padding: 20px;
  background: ${({ background }) => background || 'white'};
  border: 1px solid #ddd;
  border-radius: 4px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
`;

const Section: React.FC<SectionProps> = ({ children, background, disabled = false, visibility = false }) => {
  if (visibility) {
    return null; // Hide the component when visibility is true
  }

  return (
    <StyledSection background={background} disabled={disabled}>
      {children}
    </StyledSection>
  );
};

export default Section;
