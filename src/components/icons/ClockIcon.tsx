interface IconProps {
  className?: string;
  size?: number;
}

export default function ClockIcon({ className = "w-4 h-4", size }: IconProps) {
  return (
    <svg 
      className={className} 
      width={size} 
      height={size}
      fill="currentColor" 
      viewBox="0 0 20 20"
    >
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
    </svg>
  );
}