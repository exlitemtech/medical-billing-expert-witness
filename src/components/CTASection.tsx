import Button from './Button';
import { ReactNode } from 'react';

interface CTAButton {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

interface CTASectionProps {
  title: string;
  description: string;
  buttons: CTAButton[];
  backgroundColor?: 'blue' | 'gray' | 'white';
  textColor?: 'white' | 'dark';
  className?: string;
}

export default function CTASection({
  title,
  description,
  buttons,
  backgroundColor = 'blue',
  textColor = 'white',
  className = '',
}: CTASectionProps) {
  const bgClasses = {
    blue: 'bg-blue-600',
    gray: 'bg-gray-900',
    white: 'bg-white',
  };
  
  const textClasses = {
    white: 'text-white',
    dark: 'text-gray-900',
  };
  
  const descriptionClasses = {
    white: 'text-white opacity-90',
    dark: 'text-gray-600',
  };
  
  return (
    <div className={`${bgClasses[backgroundColor]} ${textClasses[textColor]} rounded-lg p-12 text-center ${className}`}>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className={`text-xl mb-8 ${descriptionClasses[textColor]}`}>
        {description}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {buttons.map((button, index) => (
          <Button
            key={index}
            href={button.href}
            variant={button.variant || 'primary'}
            className={backgroundColor === 'blue' && button.variant === 'primary' 
              ? 'bg-white text-blue-600 hover:bg-gray-100' 
              : ''
            }
          >
            {button.text}
          </Button>
        ))}
      </div>
    </div>
  );
}