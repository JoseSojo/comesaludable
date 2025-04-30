import React, { useState } from 'react';
import NavbarRestaurant from '../../components/restaurant/NavbarRestaurant';
import UiCard from '../../components/restaurant/card/UiCard';
import MenuTable from '../../components/restaurant/menu/MenuTable';
import MenuCards from '../../components/restaurant/menu/MenuCards';
import MenuViewToggle from '../../components/restaurant/menu/MenuViewToggle';
import { FileText, Plus } from 'lucide-react';
import { menus } from '../../infrastructure/data/data';

const RestaurantMenu: React.FC = () => {
  const [viewType, setViewType] = useState<'table' | 'cards'>('table');

  return (
    <div className="min-h-screen bg-base-100">
      <NavbarRestaurant />

      <div className="space-y-6 animate-fade-in w-[90%] m-auto mt-11">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <h1 className="text-2xl font-bold text-gray-900">Menus</h1>
        <div className="flex items-center space-x-3">
          <MenuViewToggle viewType={viewType} onChange={setViewType} />
          
          <button className="btn btn-outline">
            <FileText className="h-4 w-4 mr-2" />
            Export
          </button>
          
          <button className="btn btn-primary">
            <Plus className="h-4 w-4 mr-2" />
            Add Menu
          </button>
        </div>
      </div>
      
      <UiCard>
        <div className="mb-6 flex flex-col sm:flex-row justify-between gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search menus..."
              className="input pr-10"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <select className="input max-w-xs">
              <option value="">All Categories</option>
              <option value="Bowls">Bowls</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Mains">Mains</option>
              <option value="Drinks">Drinks</option>
              <option value="Salads">Salads</option>
              <option value="Wraps">Wraps</option>
            </select>
            
            <select className="input max-w-xs">
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
        
        {viewType === 'table' ? (
          <MenuTable menus={menus} />
        ) : (
          <MenuCards menus={menus} />
        )}
      </UiCard>
    </div>

    </div>
  );
};

export default RestaurantMenu;