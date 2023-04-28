import { RecipeService } from 'src/app/services/recipe.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe/recipe.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();

    this.http
      .put(
        'https://ng-project-93b9c-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe();
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://ng-project-93b9c-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        tap({
          next: (recipesData) => {
            this.recipeService.setRecipes(recipesData);
          },
        })
      );
  }
}
