import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from '../models/recipe/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new Subject<Recipe>();
  updatedRecipeList = new Subject<Recipe[]>();

  private recipesList: Recipe[] = [];

  constructor() {}

  setRecipes(recipes: Recipe[]) {
    this.recipesList = recipes;
    this.updatedRecipeList.next(this.recipesList.slice());
  }

  addNewRecipe(recipe: Recipe) {
    this.recipesList.push(recipe);
    this.updatedRecipeList.next(this.recipesList.slice());
  }

  updateRecipe(name: string, newRecipe: Recipe) {
    const index = this.recipesList.findIndex((recipe) => recipe.name === name);

    this.recipesList[index] = newRecipe;
    this.updatedRecipeList.next(this.recipesList.slice());
  }

  deleteRecipe(recipe: Recipe) {
    this.recipesList.splice(this.recipesList.indexOf(recipe), 1);
    this.updatedRecipeList.next(this.recipesList.slice());
  }

  getRecipes() {
    return this.recipesList.slice();
  }

  getRecipesByName(recipeName: string): Recipe {
    return this.recipesList.find((recipe) => recipe.name === recipeName)!;
  }
}
