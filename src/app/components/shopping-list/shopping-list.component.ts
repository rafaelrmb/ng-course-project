import { Component, Input } from '@angular/core';
import { Ingredient } from '../../models/ingredient/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [];
  @Input() newIngredients!: Ingredient;

  constructor() {
    this.ingredients = [
      new Ingredient('Apples', 5),
      new Ingredient('Tomatoes', 10),
    ];
  }

  addNewIngredients(newIngredients: Ingredient) {
    this.ingredients.push(newIngredients);
  }
}
