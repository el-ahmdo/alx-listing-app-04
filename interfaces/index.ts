export interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}
