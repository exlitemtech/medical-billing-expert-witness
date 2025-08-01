interface IconProps {
  className?: string;
  size?: number;
}

export default function EmailIcon({ className = "w-4 h-4", size }: IconProps) {
  return (
    <svg 
      className={className} 
      width={size} 
      height={size}
      fill="currentColor" 
      viewBox="0 0 20 20"
    >
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
    </svg>
  );
}