import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  className?: string;
}

export default function Card({
  children,
  padding = 'md',
  shadow = 'md',
  hover = false,
  className = '',
}: CardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-12',
  };

  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  };

  const hoverClass = hover ? 'hover:shadow-lg transition-shadow duration-200' : '';

  return (
    <div
      className={`bg-white rounded-lg ${paddingClasses[padding]} ${shadowClasses[shadow]} ${hoverClass} ${className}`}
    >
      {children}
    </div>
  );
}