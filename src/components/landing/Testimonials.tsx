import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emma Thompson",
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      comment: "Finding healthy restaurants has never been easier! I love that all recommendations come from certified nutritionists.",
      rating: 5,
      likes: 124,
      replies: 12,
      date: "2 days ago"
    },
    {
      id: 2,
      name: "David Chen",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      comment: "The quality of restaurants listed here is outstanding. I've discovered so many great healthy options!",
      rating: 5,
      likes: 98,
      replies: 8,
      date: "1 week ago"
    },
    {
      id: 3,
      name: "Sofia Rodriguez",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      comment: "As someone who's health-conscious, this platform has been a game-changer for finding restaurants that align with my diet.",
      rating: 5,
      likes: 156,
      replies: 15,
      date: "3 days ago"
    }
  ];

  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Lo que dicen nuestros usuarios</h2>
        <p className="text-center text-gray-600 mb-12">
          Experiencias reales de nuestra comunidad de comensales preocupados por su salud
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="flex items-center gap-4">
                  <div className="avatar">
                    <div className="w-12 h-12 rounded-full">
                      <img src={testimonial.avatar} alt={testimonial.name} />
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

                <p className="mt-4 text-gray-600">{testimonial.comment}</p>

                <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                  <span>{testimonial.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;