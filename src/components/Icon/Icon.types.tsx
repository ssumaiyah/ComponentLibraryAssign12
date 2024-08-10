export type IconProps = {
  name: 'twitter' | 'github' | 'linkedin' | 'instagram';  // Required prop
  url: string;  // Required prop
  type?: 'primary' | 'disabled';  // Optional prop with specific values
  disabled?: boolean;
  className?: string;
};
