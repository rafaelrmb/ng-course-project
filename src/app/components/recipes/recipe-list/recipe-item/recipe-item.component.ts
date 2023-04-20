import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input('recipe')
  recipe!: Recipe;

  constructor(private recipeService: RecipeService) {}

  onRecipeSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
