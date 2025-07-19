import Image from 'next/image';

interface ExpertCardProps {
  name: string;
  title: string;
  certifications: string[];
  experience: string;
  specialties: string[];
  imageUrl?: string;
  bio?: string;
  className?: string;
}

export default function ExpertCard({
  name,
  title,
  certifications,
  experience,
  specialties,
  imageUrl,
  bio,
  className = '',
}: ExpertCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow ${className}`}>
      {imageUrl && (
        <div className="w-24 h-24 mx-auto mb-6 relative">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="rounded-full object-cover"
          />
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-lg text-blue-600 font-medium">{title}</p>
        <p className="text-gray-600">{experience}</p>
      </div>
      
      {bio && (
        <p className="text-gray-600 mb-6 text-center">{bio}</p>
      )}
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-3">Certifications</h4>
        <div className="flex flex-wrap gap-2">
          {certifications.map((cert, index) => (
            <span 
              key={index}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-3">Specialties</h4>
        <ul className="space-y-2">
          {specialties.map((specialty, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
              {specialty}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}