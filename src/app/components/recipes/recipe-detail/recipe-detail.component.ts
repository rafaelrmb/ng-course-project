import { Component, Input } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient/ingredient.model';
import { Recipe } from 'src/app/models/recipe/recipe.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input('recipe') selectedRecipe!: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  addToShoppingList(ingredientsList: Ingredient[]) {
    for (const ingredient of ingredientsList) {
      this.shoppingListService.addNewIngredients(ingredient);
      console.log(ingredient);
    }
  }
}
