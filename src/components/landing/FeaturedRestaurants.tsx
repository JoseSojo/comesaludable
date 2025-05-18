import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { useCurrent } from '../../context/CurrentContext';
import { Link } from 'wouter';

const FeaturedRestaurants: React.FC = () => {
  const { restaurants } = useCurrent();

  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Restaurantes destacados</h2>
        <p className="text-center text-gray-600 mb-12">
          Descubra nuestros restaurantes saludables mejor valorados, cuidadosamente seleccionados por nuestros expertos
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="card bg-base-100 shadow-xl">
              <figure className="px-4 pt-4">
                {/* <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="rounded-xl h-48 w-full object-cover"
                /> */}
              </figure>
              <div className="card-body">
                <h3 className="card-title">
                  {restaurant.name}
                  <div className="badge badge-accent">
                    <Star className="w-4 h-4 mr-1" />
                    {/* {restaurant.} */}
                  </div>
                </h3>
                <p className="flex items-center text-gray-500 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  {restaurant.address}
                </p>
                <p className="text-gray-600">{restaurant.about.substring(0, 64)}
                {restaurant.about.length > 64 && "..."}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {/* {restaurant.tags.map((tag, index) => (
                    <span key={index} className="badge badge-outline">{tag}</span>
                  ))} */}
                </div>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-primary btn-sm">Ver menús</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href='/search/restaurant' className="btn btn-outline btn-lg">Ver más</Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;