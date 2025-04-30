import React, { createContext, useContext } from 'react';
import { AuthService } from '../services/AuthService';
import { RestaurantService } from '../services/RestaurantService';
import { NutritionistService } from '../services/NutritionistService';
import { ApiAuthAdapter } from '../../infrastructure/adapters/ApiAuthAdapter';
import { MockRestaurantAdapter } from '../../infrastructure/adapters/MockRestaurantAdapter';
import { MockNutritionistAdapter } from '../../infrastructure/adapters/MockNutritionistAdapter';

interface ServiceContextType {
  authService: AuthService;
  restaurantService: RestaurantService;
  nutritionistService: NutritionistService;
}

const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

export const ServiceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const authService = new AuthService(new ApiAuthAdapter());
  const restaurantService = new RestaurantService(new MockRestaurantAdapter());
  const nutritionistService = new NutritionistService(new MockNutritionistAdapter());

  return (
    <ServiceContext.Provider value={{
      authService,
      restaurantService,
      nutritionistService
    }}>
      {children}
    </ServiceContext.Provider>
  );
};

export const useServices = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error('useServices must be used within a ServiceProvider');
  }
  return context;
};