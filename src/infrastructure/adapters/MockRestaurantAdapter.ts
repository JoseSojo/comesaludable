import { RestaurantPort } from '../../domain/ports/RestaurantPort';
import { Restaurant, RestaurantMenu } from '../../domain/entities/Restaurant';

export class MockRestaurantAdapter implements RestaurantPort {
  async getFeaturedRestaurants(): Promise<Restaurant[]> {
    return [
      {
        id: '1',
        name: "Green Garden",
        description: "Farm-to-table organic restaurant specializing in fresh salads and bowls.",
        location: "Downtown",
        rating: 4.8,
        tags: ["Organic", "Vegan Options", "Gluten-Free"],
        image: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: '2',
        name: "Vital Kitchen",
        description: "Modern healthy cuisine with a focus on balanced nutrition.",
        location: "Westside",
        rating: 4.7,
        tags: ["Keto", "High Protein", "Low Carb"],
        image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: '3',
        name: "Pure & Fresh",
        description: "Innovative healthy dishes using locally sourced ingredients.",
        location: "Eastside",
        rating: 4.9,
        tags: ["Raw", "Organic", "Plant-Based"],
        image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ];
  }

  async getFeaturedMenus(): Promise<RestaurantMenu[]> {
    return [
      {
        id: '1',
        restaurantId: '1',
        name: "Mediterranean Bowl",
        description: "Fresh Mediterranean ingredients with quinoa base",
        price: 14.99,
        calories: 450,
        protein: "22g",
        tags: ["High Protein", "Low Carb"],
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: '2',
        restaurantId: '2',
        name: "Quinoa Power Salad",
        description: "Protein-rich quinoa with fresh vegetables",
        price: 12.99,
        calories: 380,
        protein: "18g",
        tags: ["Vegan", "Gluten-Free"],
        image: "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: '3',
        restaurantId: '3',
        name: "Grilled Salmon Plate",
        description: "Wild-caught salmon with seasonal vegetables",
        price: 18.99,
        calories: 520,
        protein: "32g",
        tags: ["Omega-3", "Keto"],
        image: "https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ];
  }

  async getRestaurantById(id: string): Promise<Restaurant> {
    const restaurants = await this.getFeaturedRestaurants();
    const restaurant = restaurants.find(r => r.id === id);
    if (!restaurant) {
      throw new Error('Restaurant not found');
    }
    return restaurant;
  }

  async getRestaurantMenus(restaurantId: string): Promise<RestaurantMenu[]> {
    const menus = await this.getFeaturedMenus();
    return menus.filter(m => m.restaurantId === restaurantId);
  }
}