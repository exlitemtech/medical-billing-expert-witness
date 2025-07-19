interface IconProps {
  className?: string;
  size?: number;
}

export default function ClipboardIcon({ className = "w-8 h-8", size }: IconProps) {
  return (
    <svg 
      className={className} 
      width={size} 
      height={size}
      fill="currentColor" 
      viewBox="0 0 20 20"
    >
      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
      <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3a2 2 0 012-2h1a2 2 0 012 2v1a1 1 0 102 0V3a2 2 0 012-2 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
    </svg>
  );
}