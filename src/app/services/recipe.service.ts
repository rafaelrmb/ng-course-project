import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe/recipe.model';
import { Ingredient } from '../models/ingredient/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new Subject<Recipe>();
  updatedRecipeList = new Subject<Recipe[]>();

  private recipesList: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Chicken Alfredo',
      'Creamy pasta dish with chicken and Alfredo sauce',
      'https://bellyfull.net/wp-content/uploads/2021/02/Chicken-Alfredo-blog-4-768x1024.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Cheese', 1),
      ]
    ),
    new Recipe(
      'Beef Stroganoff',
      'Russian dish with sautéed beef, onions, and mushrooms in creamy sauce',
      'https://lilluna.com/wp-content/uploads/2017/06/beef-stroganoff-final-resize-3.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Cheese', 1),
        new Ingredient('Onions', 1),
      ]
    ),
  ];

  constructor() {
    setTimeout(() => {
      this.recipeSelected.next(this.recipesList[0]);
    }, 3000); //practice with spinners and ng template.
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

  deleteRecipe(index: number) {
    this.recipesList.splice(index, 1);
    this.updatedRecipeList.next(this.recipesList.slice());
  }

  getRecipes() {
    return this.recipesList.slice();
  }

  getRecipesByName(recipeName: string): Recipe {
    return this.recipesList.find((recipe) => recipe.name === recipeName)!;
  }
}
