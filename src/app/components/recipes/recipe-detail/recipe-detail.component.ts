import { RecipeService } from './../../../services/recipe.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from 'src/app/models/ingredient/ingredient.model';
import { Recipe } from 'src/app/models/recipe/recipe.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;

  constructor(
    private shoppingListService: ShoppingListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  addToShoppingList(ingredientsList: Ingredient[]) {
    for (const ingredient of ingredientsList) {
      this.shoppingListService.addNewIngredients(ingredient);
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.recipe = this.recipeService.getRecipesByName(params['name']);
    });
  }
}
