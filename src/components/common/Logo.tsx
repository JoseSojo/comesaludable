import React from 'react';
import { Shield } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center shadow-lg">
          <Shield className="w-10 h-10 text-white" />
        </div>
        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white text-xs font-bold">A</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;