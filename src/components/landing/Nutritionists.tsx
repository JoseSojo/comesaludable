import React from 'react';
import { Award, MessageCircle } from 'lucide-react';

const Nutritionists: React.FC = () => {
  const nutritionists = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      image: "https://images.pexels.com/photos/5207017/pexels-photo-5207017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      specialty: "Sports Nutrition",
      certification: "Ph.D. in Nutritional Sciences",
      experience: "15+ years",
      restaurants: 12
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      specialty: "Plant-Based Nutrition",
      certification: "M.S. in Clinical Nutrition",
      experience: "10+ years",
      restaurants: 8
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      image: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      specialty: "Weight Management",
      certification: "Ph.D. in Dietary Sciences",
      experience: "12+ years",
      restaurants: 15
    }
  ];

  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Expert Nutritionists</h2>
        <p className="text-center text-gray-600 mb-12">
          Meet our certified nutritionists who carefully evaluate and recommend healthy restaurants
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nutritionists.map((nutritionist) => (
            <div key={nutritionist.id} className="card bg-base-100 shadow-xl">
              <figure className="px-4 pt-4">
                <img
                  src={nutritionist.image}
                  alt={nutritionist.name}
                  className="rounded-xl h-64 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">
                  {nutritionist.name}
                  <Award className="w-5 h-5 text-primary" />
                </h3>
                <p className="text-accent font-medium">{nutritionist.specialty}</p>
                <div className="space-y-2 mt-2">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Certification:</span> {nutritionist.certification}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Experience:</span> {nutritionist.experience}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Restaurants Certified:</span> {nutritionist.restaurants}
                  </p>
                </div>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-primary btn-sm">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    Contact
                  </button>
                  <button className="btn btn-outline btn-sm">View Profile</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn btn-outline btn-lg">Meet All Nutritionists</button>
        </div>
      </div>
    </section>
  );
};

export default Nutritionists;