import { Component } from '@angular/core';
import { Recipe } from 'src/app/models/recipe/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent {
  selectedRecipe!: Recipe;

  displayRecipe(selectedRecipe: Recipe) {
    this.selectedRecipe = selectedRecipe;
  }
}
