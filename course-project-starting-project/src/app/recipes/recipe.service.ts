import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'Test description',
      'https://www.cookipedia.co.uk/wiki/images/2/2c/Kachumbari_recipe.jpg'
    ),
    new Recipe(
      'Test recipe 2',
      'Test description 2',
      'https://www.cookipedia.co.uk/wiki/images/2/2c/Kachumbari_recipe.jpg'
    ),
  ];

  constructor() {}

  getRecipes() {
    return this.recipes.slice();
  }
}
