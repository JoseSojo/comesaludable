import React from 'react';
import { Star, Quote } from 'lucide-react';

const RestaurantTestimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Green Garden Restaurant",
      logo: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "Being certified by top nutritionists has helped us reach health-conscious customers and grow our business significantly.",
      author: "Maria Garcia",
      role: "Owner",
      rating: 5
    },
    {
      id: 2,
      name: "Vital Kitchen",
      logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "The certification process helped us improve our menu and attract customers who care about their health.",
      author: "John Smith",
      role: "Executive Chef",
      rating: 5
    },
    {
      id: 3,
      name: "Pure & Fresh",
      logo: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "Working with nutritionists has been invaluable in creating healthy, delicious meals our customers love.",
      author: "Sarah Johnson",
      role: "Manager",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-base-200 to-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Historias de éxito de restaurantes</h2>
        <p className="text-center text-gray-600 mb-12">
        Escuche a restaurantes que han transformado su negocio gracias a la certificación saludable
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card bg-white shadow-xl">
              <div className="card-body">
                <div className="flex items-center gap-4 mb-4">
                  <div className="avatar">
                    <div className="w-16 h-16 rounded-full">
                      <img src={testimonial.logo} alt={testimonial.name} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                <Quote className="w-8 h-8 text-primary opacity-20 mb-2" />
                <p className="text-gray-600 italic">{testimonial.quote}</p>

                <div className="mt-4">
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantTestimonials;