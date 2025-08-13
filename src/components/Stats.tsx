import React from 'react';
import { Package, Users, Star, TrendingUp } from 'lucide-react';

interface StatsProps {
  totalLibraries: number;
  averageRating: number;
}

const Stats: React.FC<StatsProps> = ({ totalLibraries, averageRating }) => {
  const stats = [
    {
      icon: Package,
      label: 'UI Libraries',
      value: totalLibraries.toString(),
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Star,
      label: 'Average Rating',
      value: averageRating.toFixed(1),
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      icon: Users,
      label: 'Developers Helped',
      value: '10K+',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: TrendingUp,
      label: 'Growing Daily',
      value: '24/7',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center"
        >
          <div className={`inline-flex items-center justify-center w-12 h-12 ${stat.bgColor} rounded-lg mb-3`}>
            <stat.icon className={`w-6 h-6 ${stat.color}`} />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-gray-600">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;