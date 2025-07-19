interface IconProps {
  className?: string;
  size?: number;
}

export default function CheckIcon({ className = "w-8 h-8", size }: IconProps) {
  return (
    <svg 
      className={className} 
      width={size} 
      height={size}
      fill="currentColor" 
      viewBox="0 0 20 20"
    >
      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  );
}