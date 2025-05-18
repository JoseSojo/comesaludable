import React from 'react';
import { Menu } from '../../../infrastructure/interface/DataType';
import { Edit, Trash2, Eye } from 'lucide-react';

interface MenuTableProps {
  menus: Menu[];
  reload: () => void;
  HandleDelete?: (id: string) => void;
  HandleUpdate?: (id: string) => void;
  HandleFicha?: (id: string) => void;
}

const MenuTable: React.FC<MenuTableProps> = ({ menus,HandleDelete,HandleFicha,HandleUpdate }) => {  

  return (
    <div className="overflow-x-auto -mx-6 -mb-6">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nombre
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Costo
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Categoría
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Restaurant
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {menus.map((menu) => (
            <tr key={menu.id} className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 skeleton flex-shrink-0 rounded-md overflow-hidden">
                    {/* <img 
                      src={menu.image} 
                      alt={menu.name}
                      className="h-10 w-10 object-cover skeleton"
                    /> */}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">
                  {menu.name}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {menu.price} $
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {menu.categoryReference.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {menu.restauranteReference.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="flex items-center justify-end space-x-2">
                  {HandleFicha && <button onClick={() => HandleFicha(menu.id)} className="p-1 rounded-full hover:bg-gray-100">
                    <Eye className="h-4 w-4 text-gray-400" />
                  </button>}
                  {HandleUpdate && <button onClick={() => HandleUpdate(menu.id)} className="p-1 rounded-full hover:bg-gray-100">
                    <Edit className="h-4 w-4 text-blue-500" />
                  </button>}
                  {HandleDelete && <button onClick={() => HandleDelete(menu.id)} className="p-1 rounded-full hover:bg-gray-100">
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </button>}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MenuTable;