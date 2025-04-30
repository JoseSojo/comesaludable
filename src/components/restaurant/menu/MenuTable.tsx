import React from 'react';
import { Menu } from '../../../infrastructure/interface/DataType';
import { Star, MoreVertical, Edit, Trash2, Eye } from 'lucide-react';

interface MenuTableProps {
  menus: Menu[];
}

const MenuTable: React.FC<MenuTableProps> = ({ menus }) => {
  return (
    <div className="overflow-x-auto -mx-6 -mb-6">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Menu Item
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Views
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rating
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {menus.map((menu) => (
            <tr key={menu.id} className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0 rounded-md overflow-hidden">
                    <img 
                      src={menu.image} 
                      alt={menu.name}
                      className="h-10 w-10 object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="font-medium text-gray-900">{menu.name}</div>
                    <div className="text-sm text-gray-500 truncate max-w-xs">{menu.description}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">
                  {menu.category}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ${menu.price.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {menu.views.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-sm text-gray-900">{menu.rating.toFixed(1)}</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  menu.isPopular 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {menu.isPopular ? 'Popular' : 'Regular'}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="flex items-center justify-end space-x-2">
                  <button className="p-1 rounded-full hover:bg-gray-100">
                    <Eye className="h-4 w-4 text-gray-400" />
                  </button>
                  <button className="p-1 rounded-full hover:bg-gray-100">
                    <Edit className="h-4 w-4 text-blue-500" />
                  </button>
                  <button className="p-1 rounded-full hover:bg-gray-100">
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </button>
                  <button className="p-1 rounded-full hover:bg-gray-100">
                    <MoreVertical className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="bg-white px-6 py-4 border-t border-gray-200 flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of <span className="font-medium">12</span> results
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border rounded-md text-sm">Previous</button>
          <button className="px-3 py-1 border rounded-md bg-primary-50 text-primary-600 text-sm">1</button>
          <button className="px-3 py-1 border rounded-md text-sm">2</button>
          <button className="px-3 py-1 border rounded-md text-sm">Next</button>
        </div>
      </div>
    </div>
  );
};

export default MenuTable;