import React, { ReactNode } from 'react';

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
  action?: ReactNode;
}

const UiCard: React.FC<CardProps> = ({ title, children, className = '', action }) => {
  return (
    <div className={`card bg-white h-auto ${className}`}>
      {(title || action) && (
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          {title && <h3 className="font-semibold text-lg text-gray-800">{title}</h3>}
          {action && <div>{action}</div>}
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export default UiCard;