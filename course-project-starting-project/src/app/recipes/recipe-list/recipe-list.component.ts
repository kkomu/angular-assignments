import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
    recipes: Recipe[] = [
        new Recipe('Test recipe', 'Test description', 'https://www.cookipedia.co.uk/wiki/images/2/2c/Kachumbari_recipe.jpg'),
        new Recipe('Test recipe 2', 'Test description 2', 'https://www.cookipedia.co.uk/wiki/images/2/2c/Kachumbari_recipe.jpg')
    ];
}