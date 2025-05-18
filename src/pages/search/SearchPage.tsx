import React, { useState } from 'react';
import { Search, Filter, MapPin } from 'lucide-react';
import { Restaurant, RestaurantMenu } from '../../domain/entities/Restaurant';

const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'restaurants' | 'menus'>('restaurants');
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [menus, setMenus] = useState<RestaurantMenu[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      if (activeTab === 'restaurants') {
        // const results = await restaurantService.getFeaturedRestaurants();
        // setRestaurants(results);
      } else {
        // const results = await restaurantService.getFeaturedMenus();
        // setMenus(results);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Search Healthy Options</h1>
          
          <div className="tabs tabs-boxed mb-6">
            <button 
              className={`tab ${activeTab === 'restaurants' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('restaurants')}
            >
              Restaurants
            </button>
            <button 
              className={`tab ${activeTab === 'menus' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('menus')}
            >
              Menus
            </button>
          </div>

          <div className="join w-full max-w-2xl">
            <input
              type="text"
              placeholder="Search by name, location, or cuisine..."
              className="input input-bordered join-item flex-1"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button 
              className="btn btn-primary join-item"
              onClick={handleSearch}
              disabled={isLoading}
            >
              <Search className="w-5 h-5" />
              Search
            </button>
          </div>

          <div className="flex gap-2 mt-4">
            <button className="btn btn-outline btn-sm">
              <Filter className="w-4 h-4" />
              Filters
            </button>
            <button className="btn btn-outline btn-sm">
              <MapPin className="w-4 h-4" />
              Near Me
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : activeTab === 'restaurants' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((restaurant) => (
              <div key={restaurant.id} className="card bg-base-100 shadow-xl">
                <figure>
                  <img src={restaurant.image} alt={restaurant.name} className="h-48 w-full object-cover" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{restaurant.name}</h2>
                  <p className="text-sm text-gray-600">{restaurant.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    {restaurant.location}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {restaurant.tags.map((tag, index) => (
                      <span key={index} className="badge badge-outline">{tag}</span>
                    ))}
                  </div>
                  <div className="card-actions justify-end mt-4">
                    <button className="btn btn-primary btn-sm">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menus.map((menu) => (
              <div key={menu.id} className="card bg-base-100 shadow-xl">
                <figure>
                  <img src={menu.image} alt={menu.name} className="h-48 w-full object-cover" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{menu.name}</h2>
                  <p className="text-sm text-gray-600">{menu.description}</p>
                  <div className="grid grid-cols-3 gap-2 my-3">
                    <div className="stat bg-base-200 rounded-lg p-2">
                      <div className="stat-title text-xs">Calories</div>
                      <div className="stat-value text-primary text-lg">{menu.calories}</div>
                    </div>
                    <div className="stat bg-base-200 rounded-lg p-2">
                      <div className="stat-title text-xs">Protein</div>
                      <div className="stat-value text-accent text-lg">{menu.protein}</div>
                    </div>
                    <div className="stat bg-base-200 rounded-lg p-2">
                      <div className="stat-title text-xs">Price</div>
                      <div className="stat-value text-secondary text-lg">${menu.price}</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {menu.tags.map((tag, index) => (
                      <span key={index} className="badge badge-outline badge-sm">{tag}</span>
                    ))}
                  </div>
                  <div className="card-actions justify-end mt-4">
                    <button className="btn btn-primary btn-sm">Order Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;