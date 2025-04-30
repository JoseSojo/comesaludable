import { RestaurantPort } from '../../domain/ports/RestaurantPort';
import { Restaurant, RestaurantMenu } from '../../domain/entities/Restaurant';

export class RestaurantService {
  constructor(private readonly restaurantPort: RestaurantPort) {}

  async getFeaturedRestaurants(): Promise<Restaurant[]> {
    return this.restaurantPort.getFeaturedRestaurants();
  }

  async getFeaturedMenus(): Promise<RestaurantMenu[]> {
    return this.restaurantPort.getFeaturedMenus();
  }

  async getRestaurantById(id: string): Promise<Restaurant> {
    return this.restaurantPort.getRestaurantById(id);
  }

  async getRestaurantMenus(restaurantId: string): Promise<RestaurantMenu[]> {
    return this.restaurantPort.getRestaurantMenus(restaurantId);
  }
}