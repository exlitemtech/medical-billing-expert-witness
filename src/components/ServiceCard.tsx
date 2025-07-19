import Link from 'next/link';
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  href?: string;
  className?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  href = '/services',
  className = '',
}: ServiceCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow ${className}`}>
      <div className="text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      {features.length > 0 && (
        <ul className="space-y-2 text-gray-600 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
              {feature}
            </li>
          ))}
        </ul>
      )}
      
      <Link 
        href={href} 
        className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group"
      >
        Learn More 
        <svg 
          className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}