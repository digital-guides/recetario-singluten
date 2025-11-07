export interface Recipe {
  id: string;
  title: string;
  categoryId: string;
  ingredients: string[];
  instructions: string[];
  prepTime?: string;
  cookTime?: string;
  servings?: string;
  chefTip?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  image?: string;
}
