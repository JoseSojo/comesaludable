import React from 'react';
import { Menu } from '../../../infrastructure/interface/DataType';
import { Link } from 'wouter';

interface MenuCardsProps {
  menus: Menu[];
}

const MenuCards: React.FC<MenuCardsProps> = ({ menus }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
      {menus.map((menu) => (
        <Link href={`/admin/menus/${menu.id}`} key={menu.id} className="card overflow-hidden transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]">
          <div className="relative skeleton">
            {/* <img 
              src={menu.image} 
              alt={menu.name} 
              className="w-full h-48 object-cover"
            /> */}
          </div>

          <div className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{menu.name}</h3>
                <span className='text-xs'>(para {menu.forPeople} personas)</span>
                <p className="text-sm text-gray-500 mt-1">{menu.categoryReference.name}</p>
              </div>
              <div className="bg-primary-50 text-primary-700 px-2 py-1 rounded font-medium">
                ${menu.price}
              </div>
            </div>

            <p className="text-gray-600 text-sm mt-3 line-clamp-2">{menu.about}</p>

            {/* <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium">{menu.rating}</span>
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
             */}
            <div className="mt-3 pt-3 border-t grid grid-cols-3 gap-2 text-center text-xs">
              <div>
                <p className="text-gray-500">Alergenos <span className='font-black text-xs'>({menu.allergens.length})</span></p>
                <div className='flex flex-wrap gap-1 mt-2'>
                  {
                    menu && menu.allergens.map(allergen => <span className='badge badge-xs'>{allergen}</span>)
                  }
                </div>
              </div>
              <div>
                <p className="text-gray-500">Ingredientes <span className='font-black text-xs'>({menu.ingredients.length})</span></p>
                <div className='flex flex-wrap gap-1 mt-2'>
                  {
                    menu && menu.ingredients.map(ingredient => <span className='badge badge-xs'>{ingredient}</span>)
                  }
                </div>
              </div>
              <div>
                <p className="text-gray-500">Etiquetas <span className='font-black text-xs'>({menu.tags.length})</span></p>
                <div className='flex flex-wrap gap-1 mt-2'>
                  {
                    menu && menu.tags.map(tag => <span className='badge badge-xs'>{tag}</span>)
                  }
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuCards;