import { RecipeService } from 'src/app/services/recipe.service';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {
    setTimeout(() => {
      this.selectedRecipe.emit(this.recipes[0]);
    }, 5000); //practice with spinners and ng template.
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }
}
