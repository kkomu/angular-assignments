import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'Test description',
      'https://www.cookipedia.co.uk/wiki/images/2/2c/Kachumbari_recipe.jpg',
      [new Ingredient('Bun', 1), new Ingredient('Chili', 5)]
    ),
    new Recipe(
      'Test recipe 2',
      'Test description 2',
      'https://www.cookipedia.co.uk/wiki/images/2/2c/Kachumbari_recipe.jpg',
      [new Ingredient('Fish', 5), new Ingredient('Sauce', 3)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
