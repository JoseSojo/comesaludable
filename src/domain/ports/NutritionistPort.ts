import { Nutritionist } from '../entities/Nutritionist';

export interface NutritionistPort {
  getFeaturedNutritionists(): Promise<Nutritionist[]>;
  getNutritionistById(id: string): Promise<Nutritionist>;
  getNutritionistReviews(id: string): Promise<any[]>;
}