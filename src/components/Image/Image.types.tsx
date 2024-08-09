export interface ImageProps {
  src: string;
  alt: string;
  size?: string;
  shape?: 'square' | 'round';
  disabled?: boolean;
  visibility?: boolean;
  className?: string; // Add visibility prop if you use it
}
