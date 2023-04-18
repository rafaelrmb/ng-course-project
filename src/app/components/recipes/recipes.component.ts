import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  selectedRecipe!: Recipe;

  displayRecipe(selectedRecipe: Recipe) {
    this.selectedRecipe = selectedRecipe;
  }
}
