interface PageHeaderProps {
  title: string;
  description?: string;
  backgroundColor?: 'white' | 'gray' | 'blue';
  className?: string;
}

export default function PageHeader({
  title,
  description,
  backgroundColor = 'gray',
  className = '',
}: PageHeaderProps) {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-gradient-to-br from-blue-50 to-white',
  };
  
  return (
    <div className={`${bgClasses[backgroundColor]} py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}