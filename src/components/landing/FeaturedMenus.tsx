import React from 'react';
import { Leaf, Heart } from 'lucide-react';

const FeaturedMenus: React.FC = () => {
  const menus = [
    {
      id: 1,
      name: "Mediterranean Bowl",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      restaurant: "Green Garden",
      calories: 450,
      protein: "22g",
      price: 14.99,
      tags: ["High Protein", "Low Carb"]
    },
    {
      id: 2,
      name: "Quinoa Power Salad",
      image: "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      restaurant: "Vital Kitchen",
      calories: 380,
      protein: "18g",
      price: 12.99,
      tags: ["Vegan", "Gluten-Free"]
    },
    {
      id: 3,
      name: "Grilled Salmon Plate",
      image: "https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      restaurant: "Pure & Fresh",
      calories: 520,
      protein: "32g",
      price: 18.99,
      tags: ["Omega-3", "Keto"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Featured Healthy Menus</h2>
        <p className="text-center text-gray-600 mb-12">
          Discover nutritionist-approved dishes that are both delicious and healthy
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menus.map((menu) => (
            <div key={menu.id} className="card bg-base-100 shadow-xl">
              <figure className="px-4 pt-4">
                <img
                  src={menu.image}
                  alt={menu.name}
                  className="rounded-xl h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">
                  {menu.name}
                  <Leaf className="w-5 h-5 text-green-500" />
                </h3>
                <p className="text-sm text-gray-500">{menu.restaurant}</p>
                
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
                  <button className="btn btn-ghost btn-sm">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn btn-outline btn-lg">View All Menus</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenus;