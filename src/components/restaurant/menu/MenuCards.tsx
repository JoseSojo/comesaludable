import React from 'react';
import { Menu } from '../../../infrastructure/interface/DataType';
import { Star, Eye, Heart } from 'lucide-react';

interface MenuCardsProps {
  menus: Menu[];
}

const MenuCards: React.FC<MenuCardsProps> = ({ menus }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
      {menus.map((menu) => (
        <div key={menu.id} className="card overflow-hidden transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]">
          <div className="relative">
            <img 
              src={menu.image} 
              alt={menu.name} 
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-0 right-0 m-2">
              {menu.isPopular && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                  Popular
                </span>
              )}
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{menu.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{menu.category}</p>
              </div>
              <div className="bg-primary-50 text-primary-700 px-2 py-1 rounded font-medium">
                ${menu.price.toFixed(2)}
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mt-3 line-clamp-2">{menu.description}</p>
            
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium">{menu.rating.toFixed(1)}</span>
                </div>
                
                <div className="flex items-center">
                  <Eye className="h-4 w-4 text-gray-400 mr-1" />
                  <span className="text-sm text-gray-500">{menu.views}</span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="p-1.5 rounded-full hover:bg-gray-100">
                  <Heart className="h-4 w-4 text-gray-400" />
                </button>
                <button className="p-1.5 rounded-full text-white bg-primary-500 hover:bg-primary-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="mt-3 pt-3 border-t grid grid-cols-3 gap-2 text-center text-xs">
              <div>
                <p className="text-gray-500">Calories</p>
                <p className="font-medium">{menu.calories}</p>
              </div>
              <div>
                <p className="text-gray-500">Protein</p>
                <p className="font-medium">{menu.protein}g</p>
              </div>
              <div>
                <p className="text-gray-500">Carbs</p>
                <p className="font-medium">{menu.carbs}g</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuCards;