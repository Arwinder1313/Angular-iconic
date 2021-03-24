import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'rajma',
      imageUrl:
        'https://external-preview.redd.it/hvC-UFDXkh849oZAIE0FTvFNs3VjIvYgwcv5a_NLH4c.jpg?auto=webp&s=8a7b05b6d7c96339e7759774727ccfbaa28727b4',
      ingredients: ['kidney bean', 'rice', 'coriander']
    },
    {
      id: 'r2',
      title: 'Aloo gobhi',
      imageUrl:
        'https://www.lieferando.de/foodwiki/uploads/sites/8/2017/03/aloo-gobi-4.jpg',
      ingredients: ['potato', 'cauliflower', 'Tomatoes']
    }
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
