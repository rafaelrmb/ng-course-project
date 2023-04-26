import { RecipeService } from 'src/app/services/recipe.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();

    this.http
      .put(
        'https://ng-complete-course-97a40-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe();
  }

  fetchRecipes() {
    this.http
      .get<Recipe[]>(
        'https://ng-complete-course-97a40-default-rtdb.firebaseio.com/recipes.json'
      )
      .subscribe({
        next: (recipesData) => {
          this.recipeService.setRecipes(recipesData);
        },
      });
  }
}
