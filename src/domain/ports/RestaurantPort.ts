import { Restaurant, RestaurantMenu } from '../entities/Restaurant';

export interface RestaurantPort {
  getFeaturedRestaurants(): Promise<Restaurant[]>;
  getFeaturedMenus(): Promise<RestaurantMenu[]>;
  getRestaurantById(id: string): Promise<Restaurant>;
  getRestaurantMenus(restaurantId: string): Promise<RestaurantMenu[]>;
}