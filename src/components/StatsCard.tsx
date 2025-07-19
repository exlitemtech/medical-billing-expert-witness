interface StatsCardProps {
  value: string;
  label: string;
  className?: string;
}

export default function StatsCard({ value, label, className = '' }: StatsCardProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-4xl font-bold text-blue-600 mb-2">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}