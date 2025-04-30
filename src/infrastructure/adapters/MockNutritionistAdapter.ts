import { NutritionistPort } from '../../domain/ports/NutritionistPort';
import { Nutritionist } from '../../domain/entities/Nutritionist';

export class MockNutritionistAdapter implements NutritionistPort {
  async getFeaturedNutritionists(): Promise<Nutritionist[]> {
    return [
      {
        id: '1',
        name: "Dr. Sarah Johnson",
        specialty: "Sports Nutrition",
        certification: "Ph.D. in Nutritional Sciences",
        experience: "15+ years",
        restaurantCount: 12,
        image: "https://images.pexels.com/photos/5207017/pexels-photo-5207017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: '2',
        name: "Dr. Michael Chen",
        specialty: "Plant-Based Nutrition",
        certification: "M.S. in Clinical Nutrition",
        experience: "10+ years",
        restaurantCount: 8,
        image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      {
        id: '3',
        name: "Dr. Emily Rodriguez",
        specialty: "Weight Management",
        certification: "Ph.D. in Dietary Sciences",
        experience: "12+ years",
        restaurantCount: 15,
        image: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
    ];
  }

  async getNutritionistById(id: string): Promise<Nutritionist> {
    const nutritionists = await this.getFeaturedNutritionists();
    const nutritionist = nutritionists.find(n => n.id === id);
    if (!nutritionist) {
      throw new Error('Nutritionist not found');
    }
    return nutritionist;
  }

  async getNutritionistReviews(id: string): Promise<any[]> {
    return []; // Mock implementation
  }
}