import React from 'react';
import { Star, MapPin } from 'lucide-react';

const FeaturedRestaurants: React.FC = () => {
  const restaurants = [
    {
      id: 1,
      name: "Green Garden",
      image: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4.8,
      location: "Downtown",
      description: "Farm-to-table organic restaurant specializing in fresh salads and bowls.",
      tags: ["Organic", "Vegan Options", "Gluten-Free"]
    },
    {
      id: 2,
      name: "Vital Kitchen",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4.7,
      location: "Westside",
      description: "Modern healthy cuisine with a focus on balanced nutrition.",
      tags: ["Keto", "High Protein", "Low Carb"]
    },
    {
      id: 3,
      name: "Pure & Fresh",
      image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4.9,
      location: "Eastside",
      description: "Innovative healthy dishes using locally sourced ingredients.",
      tags: ["Raw", "Organic", "Plant-Based"]
    }
  ];

  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Featured Restaurants</h2>
        <p className="text-center text-gray-600 mb-12">
          Discover our top-rated healthy restaurants, carefully selected by expert nutritionists
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="card bg-base-100 shadow-xl">
              <figure className="px-4 pt-4">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="rounded-xl h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">
                  {restaurant.name}
                  <div className="badge badge-accent">
                    <Star className="w-4 h-4 mr-1" />
                    {restaurant.rating}
                  </div>
                </h3>
                <p className="flex items-center text-gray-500 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  {restaurant.location}
                </p>
                <p className="text-gray-600">{restaurant.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {restaurant.tags.map((tag, index) => (
                    <span key={index} className="badge badge-outline">{tag}</span>
                  ))}
                </div>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-primary btn-sm">View Menu</button>
                  <button className="btn btn-outline btn-sm">Book Table</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn btn-outline btn-lg">View All Restaurants</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;