export interface Restaurant {
  id: string;
  name: string;
  description: string;
  location: string;
  rating: number;
  tags: string[];
  image: string;
}

export interface RestaurantMenu {
  id: string;
  restaurantId: string;
  name: string;
  description: string;
  price: number;
  calories: number;
  protein: string;
  tags: string[];
  image: string;
}