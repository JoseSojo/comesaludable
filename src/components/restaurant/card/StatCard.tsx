import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: number;
  changeText?: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon, 
  change, 
  changeText, 
  className = '' 
}) => {
  const isPositive = change !== undefined ? change >= 0 : true;
  
  return (
    <div className={`card p-6 animate-fade-in ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 font-medium">{title}</p>
          <h3 className="text-2xl font-semibold mt-1">{value}</h3>
          
          {change !== undefined && (
            <div className={`flex items-center mt-2 text-sm ${
              isPositive ? 'text-green-600' : 'text-red-600'
            }`}>
              {isPositive ? 
                <ArrowUpRight className="h-4 w-4 mr-1" /> : 
                <ArrowDownRight className="h-4 w-4 mr-1" />
              }
              <span>{isPositive ? '+' : ''}{change}% {changeText || ''}</span>
            </div>
          )}
        </div>
        
        <div className={`rounded-full p-3 ${
          className.includes('bg-') ? 'bg-white bg-opacity-30' : 'bg-primary-100'
        }`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;