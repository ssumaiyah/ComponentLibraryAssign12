// Text.types.ts

export interface TextProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  bold?: boolean;
  underline?: boolean;
  disabled?: boolean;
  visibility?: boolean;
  className?: string; // Add visibility prop
}
