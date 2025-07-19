import { ReactNode } from 'react';

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  icon?: ReactNode;
  isLast?: boolean;
  className?: string;
}

export default function ProcessStep({
  step,
  title,
  description,
  icon,
  isLast = false,
  className = '',
}: ProcessStepProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Step Number/Icon */}
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
          {icon || step}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
      </div>
      
      {/* Description */}
      <div className="ml-16">
        <p className="text-gray-600 mb-6">{description}</p>
      </div>
      
      {/* Connecting Line */}
      {!isLast && (
        <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-300"></div>
      )}
    </div>
  );
}