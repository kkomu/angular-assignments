import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Peanut', 100),
  ];

  onIngredientAdded(ingredient: Ingredient) {
    console.log("I'd like to add this please, ", ingredient);
    this.ingredients.push(ingredient);
  }
}
