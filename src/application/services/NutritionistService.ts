import { NutritionistPort } from '../../domain/ports/NutritionistPort';
import { Nutritionist } from '../../domain/entities/Nutritionist';

export class NutritionistService {
  constructor(private readonly nutritionistPort: NutritionistPort) {}

  async getFeaturedNutritionists(): Promise<Nutritionist[]> {
    return this.nutritionistPort.getFeaturedNutritionists();
  }

  async getNutritionistById(id: string): Promise<Nutritionist> {
    return this.nutritionistPort.getNutritionistById(id);
  }

  async getNutritionistReviews(id: string): Promise<any[]> {
    return this.nutritionistPort.getNutritionistReviews(id);
  }
}