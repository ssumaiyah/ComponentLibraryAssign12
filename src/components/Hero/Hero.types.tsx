export interface HeroProps {
  title: string;
  subtitle?: string;
  background?: string;
  disabled?: boolean;
  visibility?: boolean;
  image?: React.ReactNode;
  className?: string; // New image prop added
}
