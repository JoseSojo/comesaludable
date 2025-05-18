import React from 'react';
import { Layout, Grid } from 'lucide-react';

interface MenuViewToggleProps {
  viewType: 'table' | 'cards';
  onChange: (viewType: 'table' | 'cards') => void;
}

const MenuViewToggle: React.FC<MenuViewToggleProps> = ({ viewType, onChange }) => {
  return (
    <div className="flex bg-gray-100 p-1 rounded-lg">
      <button
        onClick={() => onChange('table')}
        className={`px-3 py-1.5 rounded flex items-center ${
          viewType === 'table'
            ? 'bg-white shadow text-gray-800'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        <Layout className="h-4 w-4 mr-1.5" />
        <span className="text-sm">Tabla</span>
      </button>
      
      <button
        onClick={() => onChange('cards')}
        className={`px-3 py-1.5 rounded flex items-center ${
          viewType === 'cards'
            ? 'bg-white shadow text-gray-800'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        <Grid className="h-4 w-4 mr-1.5" />
        <span className="text-sm">Tarjetas</span>
      </button>
    </div>
  );
};

export default MenuViewToggle;