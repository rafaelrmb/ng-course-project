import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../../models/recipe/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [];

  constructor() {
    this.recipes = [
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

    setTimeout(() => {
      this.selectedRecipe.emit(this.recipes[0]);
    }, 5000); //practice with spinners and ng template.
  }

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }
}
