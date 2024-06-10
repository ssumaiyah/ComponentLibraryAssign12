export interface ImageProps {
  src: string;
  alt: string;
  size?: string;
  shape?: 'square' | 'round';
  disabled?: boolean;
  visibility?: boolean; // Add visibility prop
}
