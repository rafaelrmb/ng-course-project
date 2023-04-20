import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../models/recipe/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipesList: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG'
    ),
    new Recipe(
      'Chicken Alfredo',
      'Creamy pasta dish with chicken and Alfredo sauce',
      'https://bellyfull.net/wp-content/uploads/2021/02/Chicken-Alfredo-blog-4-768x1024.jpg'
    ),
    new Recipe(
      'Beef Stroganoff',
      'Russian dish with sautéed beef, onions, and mushrooms in creamy sauce',
      'https://lilluna.com/wp-content/uploads/2017/06/beef-stroganoff-final-resize-3.jpg'
    ),
  ];

  constructor() {
    setTimeout(() => {
      this.recipeSelected.emit(this.recipesList[0]);
    }, 5000); //practice with spinners and ng template.
  }

  addNewRecipe(
    recipeName: string,
    recipeDescription: string,
    recipeImagePath: string
  ) {
    this.recipesList.push(
      new Recipe(recipeName, recipeDescription, recipeImagePath)
    );
  }

  getRecipes() {
    return this.recipesList.slice();
  }
}
