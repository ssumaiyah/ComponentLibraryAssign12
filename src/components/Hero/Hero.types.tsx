export interface HeroProps {
  title: string;
  subtitle?: string;
  background?: string;
  disabled?: boolean;
  visibility?: boolean;
  image?: React.ReactNode; // New image prop added
}
