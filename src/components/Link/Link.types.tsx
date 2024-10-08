// Link.types.ts

export interface LinkProps {
  href: string;
  children: React.ReactNode;
  color?: string;
  disabled?: boolean;
  visibility?: boolean;
  className?: string; // Add visibility prop
}
