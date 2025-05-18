import React from 'react';
import { Leaf, Heart } from 'lucide-react';
import { useCurrent } from '../../context/CurrentContext';

const FeaturedMenus: React.FC = () => {
  const { menus } = useCurrent();

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Menús destacados</h2>
        <p className="text-center text-gray-600 mb-12">
          Descubra platos deliciosos y saludables aprobados por expertos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menus.map((menu) => (
            <div key={menu.id} className="card bg-base-100 shadow-xl">
              <figure className="px-4 pt-4">

              </figure>
              <div className="card-body flex flex-col justify-between">
                <h3 className="card-title">
                  {menu.name}
                  <Leaf className="w-5 h-5 text-green-500" />
                </h3>

                <div className="flex flex-wrap gap-2">
                  {menu.tags.map((tag, index) => (
                    <span key={index} className="badge badge-outline badge-sm">{tag}</span>
                  ))}
                </div>

                <div className="grid grid-cols-3 place-content-center place-items-center mt-4">
                  <div className="stat bg-base-200 rounded-lg p-2 flex justify-center items-center">
                    <div className="stat-title text-xs">Price</div>
                    <div className="stat-value text-secondary text-lg">${menu.price}</div>
                  </div>

                  <div className='col-span-2'>
                    <button className="btn btn-primary btn-sm">Restaurant</button>

                    <button className="btn btn-ghost btn-sm">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn btn-outline btn-lg">Ver más</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenus;