import React from 'react';
import { Leaf, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="hero min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="hero-content text-center">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold text-primary mt-16">
            Explora entre restaurantes, y menús increibles
            <br />
            <span className="text-accent text-5xl">Saludables y recomendados</span>
          </h1>
          <p className="py-6 text-lg text-gray-600">
            Hoy más que nunca comer saludable no es una opción, es un estilo de vida. 
            ¿Qué esperas para explorar y visitar <strong>Restaurantes</strong> y degustar de sus deliciosos y saludables <strong>Menús</strong>?
          </p>
          <div className="flex justify-center lg:flex-row flex-col gap-4">
            <button className="btn btn-primary">
              <Leaf className="w-5 h-5" />
              Ver Restaurantes
            </button>
            <button className="btn btn-outline btn-accent">
              <Heart className="w-5 h-5" />
              Ver menús saludables
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="stat bg-white rounded-box shadow-lg">
              <div className="stat-title">Restaurants</div>
              <div className="stat-value text-primary">150+</div>
              <div className="stat-desc">Certified healthy options</div>
            </div>
            <div className="stat bg-white rounded-box shadow-lg">
              <div className="stat-title">Nutritionists</div>
              <div className="stat-value text-accent">50+</div>
              <div className="stat-desc">Expert recommendations</div>
            </div>
            <div className="stat bg-white rounded-box shadow-lg">
              <div className="stat-title">Happy Customers</div>
              <div className="stat-value text-secondary">10K+</div>
              <div className="stat-desc">Monthly diners</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;